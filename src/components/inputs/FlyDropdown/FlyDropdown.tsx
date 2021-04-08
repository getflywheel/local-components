import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import * as styles from './FlyDropdown.scss';
import CaretSVG from '../../../svg/caret.svg';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface IItems {
	color: 'red' | 'none';
	content?: React.ReactNode;
	label?: string;
	onClick: FunctionGeneric;
}

interface IProps extends IReactComponentProps {
	caret?: boolean;
	items: IItems[];
	navItem?: boolean;
	navItemActive?: boolean;
	position?: 'top' | 'bottom';
}

const FlyDropdown = (props: IProps) => {
	const {
		caret,
		children,
		className,
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
		<div
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
			id={id}
			onClick={onClick}
			onBlur={onBlur}
			style={style}
			tabIndex={0}
		>
			{children}
			{caret && (
				<CaretSVG
					className={classnames(
						styles.FlyDropdown_Caret,
						'FlyDropdown_Caret'
					)}
				/>
			)}
			<ul
				className={classnames(
					styles.FlyDropdown_Items,
					'FlyDropdown_Items',
					{
						[styles.FlyDropdown_Items__PositionTop]: position === 'top',
					},
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
		</div>
	);
}

FlyDropdown.defaultProps = {
	caret: true,
	forceHover: true,
	items: [],
	navItem: false,
	navItemActive: false,
	position: 'bottom',
} as Partial<IProps>;

export default FlyDropdown;
