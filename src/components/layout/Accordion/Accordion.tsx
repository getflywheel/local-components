import * as React from 'react';
import classnames from 'classnames';
import { Container } from '../../modules/Container/Container';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import AccordionItem from './AccordionItem';

export interface Props extends ILocalContainerProps {
	allowMultipleOpenItems?: boolean;
	clickArea?: 'icon' | 'all';
}

const Accordion: React.FC<Props> = ({
	allowMultipleOpenItems,
	children,
	className,
	clickArea = 'icon',
	container,
	id,
	style,
}) => {
	const [lastOpenedItemId, setLastOpenedItemId] = React.useState<string | undefined>();
	const [openedItemsLookup, setOpenedItemsLookup] = React.useState<{[key: string]: boolean}>({});

	const onToggle = (itemId: string | undefined) => {
		// toggle if already open otherwise set new item to open
		setLastOpenedItemId((lastOpenedItemId) => itemId === lastOpenedItemId ? undefined : itemId);

		if (itemId) {
			setOpenedItemsLookup((openedItemsLookup) => ({
				...openedItemsLookup,
				[itemId]: !openedItemsLookup[itemId],
			}));
		}
	};

	const isItemOpen = (itemId: string | undefined) => {
		return allowMultipleOpenItems
			? itemId && !!openedItemsLookup[itemId]
			: itemId === lastOpenedItemId;
	}

	return (
		<Container {...container}>
			<div
				className={classnames(
					'Accordion',
					className,
				)}
				id={id}
				style={style}
			>
				{ React.Children.map(children, (child: React.ReactNode, index: number) => {
					if (!child) {
						return;
					}

					const childPlus: React.ReactNode & {props?: any[]} = child;

					return (
						<AccordionItem
							itemId={`item-${index}`}
							clickArea={clickArea}
							onToggle={onToggle}
							opened={isItemOpen(`item-${index}`)}
							{...childPlus.props}
						>
							<>
								{/* directly render children, if possible, thereby removing the wrapper (aka 'child') */}
								{childPlus?.props?.children || child}
							</>
						</AccordionItem>
					);
				})}
			</div>
		</Container>
	);
};

export default Accordion;
