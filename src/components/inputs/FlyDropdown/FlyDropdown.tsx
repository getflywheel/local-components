import * as React from 'react';
import classnames from 'classnames';
import { Rect } from '@popperjs/core';
import styles from './FlyDropdown.scss';
import { CaretIcon, CheckmarkMixedIcon } from '../../icons/Icons';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { Tooltip, TooltipProps } from '../../overlays/Tooltip/Tooltip';
import { TextButton } from '../../buttons/TextButton/TextButton';
import { DashIcon } from '../../icons/svgs/DashIcon';

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
	/** whether to force the tooltip to show and ignore mouse events * */
	forceShow?: boolean;
	/** */
	items: IItems[];
	navItem?: boolean;
	navItemActive?: boolean;
	popperOptions?: TooltipProps;
	position?: 'top' | 'bottom';
	useClickInsteadOfHover?: boolean;
	/** Icon to show to the left of the selected item - will not have fill added */
	selectedIcon?: any;
	/** Style the trigger textButton as disabled */
	disabledStyle?: boolean;
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
		forceShow,
		id,
		items,
		navItem,
		navItemActive,
		popperOptions,
		position,
		style,
		useClickInsteadOfHover,
		selectedIcon,
		disabledStyle,
	} = props;
	const { popperArrowModifier, popperOffsetModifier, ...restPopperOptions } = popperOptions ?? {};
	const onClickItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: IItems) => {
		item.onClick.call(null);
		event.stopPropagation();
	};

	const [isShowing, setIsShowing] = React.useState(false);

	const SelectedIcon: any = selectedIcon;

	return (
		<Tooltip
			className={classnames(
				styles.FlyDropdown,
				'FlyDropdown',
				{
					[styles.FlyDropdown__NavItem]: navItem,
					[styles.FlyDropdown__NavItemActive]: navItemActive,
				},
				className
			)}
			content={
				<ul className={classnames(styles.FlyDropdown_Items, 'FlyDropdown_Items', classNameList)}>
					{items.map((item: IItems, i: number) => (
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
								item.className
							)}
							onClick={(event) => onClickItem(event, item)}
							onMouseDown={(event) => event.preventDefault()}
						>
							{item.label}
							{item.content}
						</li>
					))}
				</ul>
			}
			forceShow={forceShow}
			id={id}
			popperArrowModifier={{
				padding: setArrowPadding,
				...popperArrowModifier,
			}}
			popperOffsetModifier={{
				offset: [20, 10],
				...popperOffsetModifier,
			}}
			popperVisualContainerClassName={styles.FlyDropdown_PopperVisualContainer}
			position={position === 'top' ? 'top-end' : 'bottom-end'}
			hideDelay={useClickInsteadOfHover ? 0 : 300}
			showDelay={0}
			style={style}
			useClickInsteadOfHover={useClickInsteadOfHover}
			onShow={() => setIsShowing(true)}
			onHide={() => setIsShowing(false)}
			{...restPopperOptions}
		>
			{selectedIcon && <SelectedIcon />}
			<TextButton
				disabled={disabledStyle}
				inline
				rightIcon={caret && (isShowing ? DashIcon : CaretIcon)}
				privateOptions={{ padding: 'none' }}
			>
				{children}
			</TextButton>
		</Tooltip>
	);
};

FlyDropdown.defaultProps = {
	caret: true,
	forceShow: false,
	items: [],
	navItem: false,
	navItemActive: false,
	position: 'bottom',
	useClickInsteadOfHover: true,
} as Partial<IProps>;

export default FlyDropdown;
