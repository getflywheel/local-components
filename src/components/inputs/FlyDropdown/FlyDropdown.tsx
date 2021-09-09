import * as React from 'react';
import classnames from 'classnames';
import * as styles from './FlyDropdown.scss';
import CaretSVG from '../../../svg/caret.svg';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { Tooltip, TooltipProps } from '../../overlays/Tooltip/Tooltip';
import { Rect } from '@popperjs/core';

interface IItems {
	color: 'red' | 'none';
	className?: string;
	content?: React.ReactNode;
	label?: string;
	onClick: FunctionGeneric;
}

interface IProps extends IReactComponentProps {
	caret?: boolean;
	/** className for the list items' container */
	classNameList?: string;
	/** className for an individual list item */
	classNameListItem?: string;
	/** whether to force the tooltip to show and ignore mouse events **/
	forceHover?: boolean;
	/** */
	items: IItems[];
	navItem?: boolean;
	navItemActive?: boolean;
	popperOptions?: TooltipProps;
	position?: 'top' | 'bottom';
	useClickInsteadOfHover?: boolean;
}

const setArrowPadding = ({ popper }: { popper: Rect }) => {
	const $arrowSize = 16;

	return {
		left: popper.width - $arrowSize - 20,
	};
};

const FlyDropdown = (props: IProps) => {
	const {
		caret,
		children,
		className,
		classNameList,
		classNameListItem,
		forceHover,
		id,
		items,
		navItem,
		navItemActive,
		popperOptions,
		position,
		style,
		useClickInsteadOfHover,
	} = props;
	const {
		popperArrowModifier,
		popperOffsetModifier,
		...restPopperOptions
	} = popperOptions ?? {};
	const onClickItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: IItems) => {
		item.onClick.call(null);
		event.stopPropagation();
	};

	return (
		<Tooltip
			className={classnames(
				styles.FlyDropdown,
				'FlyDropdown',
				{
					[styles.FlyDropdown__NavItem]: navItem,
					[styles.FlyDropdown__NavItemActive]: navItemActive,
				},
				className,
			)}
			content={
				<ul
					className={classnames(
						styles.FlyDropdown_Items,
						'FlyDropdown_Items',
						classNameList,
					)}
				>
					{
						items.map((item: IItems, i: number) => (
							<li
								key={i}
								className={classnames(
									styles.FlyDropdown_Item,
									'FlyDropdown_Item',
									{
										[styles.FlyDropdown_Item__ColorNone]: item.color === 'none',
										[styles.FlyDropdown_Item__ColorRed]: item.color === 'red',
									},
									classNameListItem,
									item.className,
								)}
								onClick={(event) => onClickItem(event, item)}
								onMouseDown={(event) => event.preventDefault()}
							>
								{item.label}
								{item.content}
							</li>
						))
					}
				</ul>
			}
			forceHover={forceHover}
			id={id}
			popperArrowModifier={{
				padding: setArrowPadding,
				...popperArrowModifier,
			}}
			popperOffsetModifier={{
				offset: [ 20, 10 ],
				...popperOffsetModifier,
			}}
			popperVisualContainerClassName={styles.FlyDropdown_PopperVisualContainer}
			position={position === 'top' ? 'top-end' : 'bottom-end'}
			hideDelay={useClickInsteadOfHover ? 0 : 300}
			showDelay={0}
			style={style}
			useClickInsteadOfHover={useClickInsteadOfHover}
			{...restPopperOptions}
		>
			{children}
			{caret && (
				<CaretSVG
					className={classnames(
						styles.FlyDropdown_Caret,
						'FlyDropdown_Caret',
					)}
				/>
			)}
		</Tooltip>
	);
}

FlyDropdown.defaultProps = {
	caret: true,
	forceHover: false,
	items: [],
	navItem: false,
	navItemActive: false,
	position: 'bottom',
	useClickInsteadOfHover: true,
} as Partial<IProps>;

export default FlyDropdown;
