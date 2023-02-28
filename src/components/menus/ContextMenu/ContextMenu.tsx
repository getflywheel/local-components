import * as React from 'react';
import classnames from 'classnames';
import shortid from 'shortid';
import { useRef } from 'react';
import styles from './ContextMenu.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { Tooltip, TooltipProps, hideTooltip } from '../../overlays/Tooltip/Tooltip';
import { TextButton } from '../../buttons/TextButton/TextButton';
import { ThreeDotButton } from '../../buttons/ThreeDotButton/ThreeDotButton';

export interface IMenuItem {
	color?: 'red' | 'none';
	className?: string;
	content?: React.ReactNode;
	label?: string;
	onClick?: FunctionGeneric;
	enabled?: boolean;
	type?: 'normal' | 'separator';
}

export interface IContextMenuProps extends Omit<TooltipProps, 'content' | 'useClickInsteadOfHover'> {
	/** className for the list items' container */
	classNameList?: string;
	/** className for an individual list item */
	classNameListItem?: string;
	/** array of menu items */
	items: IMenuItem[];
	/** whether to have background behind 3 dots - set to false for low key 3 dot dropdowns */
	noBG?: boolean;
	/** whether to have background behind 3 dots - set to false for low key 3 dot dropdowns */
	bgOnHover?: boolean;
}

const ContextMenu = (props: IContextMenuProps) => {
	const { className, classNameList, classNameListItem, items, onShow, onHide, noBG, bgOnHover, id, ...otherProps } =
		props;

	const menuId = useRef(id ?? `${'contextMenu'}-${shortid.generate()}`);

	const [isShowing, setIsShowing] = React.useState(false);

	const onClickItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: IMenuItem) => {
		event.preventDefault();
		event.stopPropagation();
		if (item.onClick) {
			item.onClick.call(null);
			hideTooltip(menuId.current);
		}
	};

	const content = (
		<ul className={classnames(styles.ContextMenu_Items, 'ContextMenu_Items', classNameList)}>
			{items
				.filter((item: IMenuItem) => Object.keys(item).length !== 0)
				.map((item: IMenuItem, i: number) => (
					// eslint-disable-next-line react/no-array-index-key
					<li key={i} className={classnames(styles.ContextMenu_Item, classNameListItem, item.className)}>
						{item.type === 'separator' ? (
							<div className={styles.ContextMenu_Divider} />
						) : (
							<TextButton
								className={item.color !== 'red' ? styles.ContextMenu_Item_TextButton : ''}
								onClick={(event) => onClickItem(event, item)}
								disabled={item.enabled === undefined ? false : !item.enabled}
								intent={item.color === 'red' ? 'destructive' : 'default'}
								style={{ padding: '5px 0' }}
							>
								{item.label}
								{item.content}
							</TextButton>
						)}
					</li>
				))}
		</ul>
	);

	return (
		<Tooltip
			className={classnames(styles.ContextMenu, className)}
			popperVisualContainerClassName={styles.ContextMenu_PopperVisualContainer}
			onShow={() => {
				onShow?.call(null);
				setIsShowing(true);
			}}
			onHide={() => {
				onHide?.call(null);
				setIsShowing(false);
			}}
			focusOnOpen
			useClickInsteadOfHover
			id={menuId.current}
			{...otherProps}
			content={content}
		>
			<ThreeDotButton aria-label="Open context menu" active={isShowing} noBG={noBG} bgOnHover={bgOnHover} />
		</Tooltip>
	);
};

ContextMenu.defaultProps = {
	items: [],
	position: 'bottom-start',
	hideArrow: true,
	showDelay: 0,
	hideDelay: 0,
} as Partial<IContextMenuProps>;

export default ContextMenu;
