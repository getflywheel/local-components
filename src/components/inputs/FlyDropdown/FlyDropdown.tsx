import * as React from 'react';
import classnames from 'classnames';
import * as styles from './FlyDropdown.sass';
import CaretSVG from '../../../svg/caret';
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

interface IState {
	open: boolean;
}

export default class FlyDropdown extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		caret: true,
		items: [],
		navItem: false,
		navItemActive: false,
		position: 'bottom',
	};

	constructor (props: IProps) {
		super(props);

		this.state = {
			open: false,
		};

		this.onClick = this.onClick.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

	onClick () {
		this.setState({
			open: !this.state.open,
		});
	}

	onBlur () {
		this.setState({
			open: false,
		});
	}

	render () {
		return (
			<div
				className={classnames(
					styles.FlyDropdown,
					'FlyDropdown',
					{
						[styles.FlyDropdown__Open]: this.state.open,
						'FlyDropdown__Open': this.state.open, // this also needs to be globally accessible so other component styles can reference it
						[styles.FlyDropdown__NavItem]: this.props.navItem,
						[styles.FlyDropdown__NavItemActive]: this.props.navItemActive,
					},
					this.props.className,
				)}
				tabIndex={0}
				onClick={this.onClick}
				onBlur={this.onBlur}
			>
				{this.props.children}
				{this.props.caret && (
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
							[styles.FlyDropdown_Items__PositionTop]: this.props.position === 'top',
						},
					)}
				>
					{
						this.props.items.map((item: IItems, i: number) => (
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
								onClick={(event) => {
									item.onClick.call(null);
									this.setState({ open: false });
									event.stopPropagation();
								}}
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

}
