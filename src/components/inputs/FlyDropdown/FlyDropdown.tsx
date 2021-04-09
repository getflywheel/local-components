import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import * as styles from './FlyDropdown.scss';
import CaretSVG from '../../../svg/caret.svg';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { Tooltip } from '../../overlays/Tooltip/Tooltip';
import { Rect } from '@popperjs/core';

interface IItems {
	color: 'red' | 'none';
	content?: React.ReactNode;
	label?: string;
	onClick: FunctionGeneric;
}

interface IProps extends IReactComponentProps {
	caret?: boolean;
	/** whether to force the tooltip to show and ignore mouse events **/
	forceHover?: boolean;
	/** */
	items: IItems[];
	navItem?: boolean;
	navItemActive?: boolean;
	position?: 'top' | 'bottom';
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
		forceHover,
		id,
		items,
		navItem,
		navItemActive,
		position,
		style,
	} = props;
	const [ open, setOpen ] = useState(false);

	const onClick = () => {
		setOpen((open) => !open);
	};

	const onBlur = () => {
		setOpen(false);
	}

	const onClickItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: IItems) => {
		item.onClick.call(null);
		setOpen(false);
		event.stopPropagation();
	}

	return (
		<Tooltip
			className={classnames(
				styles.FlyDropdown,
				'FlyDropdown',
				{
					[styles.FlyDropdown__Open]: open,
					'FlyDropdown__Open': open, // this also needs to be globally accessible so other component styles can reference it
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
									}
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
			popperArrowModifier={{ padding: setArrowPadding }}
			popperOffsetModifier={{ offset: [ 20, 0 ] }}
			popperVisualContainerClassName={styles.FlyDropdown_PopperVisualContainer}
			position={position === 'top' ? 'top-end' : 'bottom-end'}
			hideDelay={0}
			showDelay={0}
			style={style}
			useClickInsteadOfHover
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
} as Partial<IProps>;

export default FlyDropdown;
