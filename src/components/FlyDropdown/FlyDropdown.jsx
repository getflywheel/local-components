import React, { Component } from 'react';
import classnames from 'classnames';
import CaretSVG from '../../svg/caret.svg';
import PropTypes from 'prop-types';
import styles from './FlyDropdown.sass';

export default class FlyDropdown extends Component {
	static propTypes = {
		items: PropTypes.array,
		caret: PropTypes.bool,
		position: PropTypes.oneOf(['top', 'bottom']),
		navItem: PropTypes.bool,
		navItemActive: PropTypes.bool,
	};

	static defaultProps = {
		items: [],
		caret: true,
		position: 'bottom',
		navItem: false,
		navItemActive: false,
	};

	constructor (props) {
		super(props);

		this.state = {
			open: false,
			tipItemHover: false,
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

	tipItemHoverFactory (i, value) {
		if (this.props.position === 'bottom' && i !== 0) {
			return null;
		}

		if (this.props.position === 'top' && i !== this.props.items.length - 1) {
			return null;
		}

		return () => {
			this.setState({ tipItemHover: value });
		};
	}

	render () {
		return (
			<div
				className={classnames(
					styles.FlyDropdown,
					{
						[styles.FlyDropdown__Open]: this.state.open,
						'FlyDropdown__Open': this.state.open, // this also needs to be globally accessible so other component styles can reference it
						[styles.FlyDropdown__NavItem]: this.props.navItem,
						[styles.FlyDropdown__NavItemActive]: this.props.navItemActive,
					},
					this.props.className,
				)}
				tabIndex="0"
				onClick={this.onClick}
				onBlur={this.onBlur}
			>
				{this.props.children}

				{this.props.caret && <CaretSVG className={styles.FlyDropdown_Caret}/>}

				<ul
					className={classnames(
						styles.FlyDropdown_Items,
						{
							[styles.FlyDropdown_Items__PositionTop]: this.props.position === 'top',
							[styles.FlyDropdown_Items__TipItemHover]: this.state.tipItemHover,
						},
						typeof this.state.tipItemHover === 'string' && this.state.tipItemHover === 'red' ? styles.FlyDropdown_Items__TipItemHover__ColorRed : null,
					)}
				>
					{
						this.props.items.map((item, i) => (
							<li
								key={i}
								className={classnames(
									styles.FlyDropdown_Item,
									item.color && item.color === 'red' ? styles.FlyDropdown_Item__ColorRed : null,
								)}
								onClick={(event) => {
									item.onClick.call();
									this.setState({ open: false });
									event.stopPropagation();
								}}
								onMouseDown={(event) => event.preventDefault()}
								onMouseOver={this.tipItemHoverFactory(i, item.color ? item.color : true)}
								onMouseOut={this.tipItemHoverFactory(i, false)}
							>
								{item.label}
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}
