import React, { Component } from 'react';
import classnames from 'classnames';
import CaretSVG from '../../svg/caret.svg';
import PropTypes from 'prop-types';

export default class FlyDropdown extends Component {
	static propTypes = {
		items: PropTypes.array,
		caret: PropTypes.bool,
		position: PropTypes.string,
	};

	static defaultProps = {
		caret: true,
		position: 'bottom',
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
			<div className={classnames('FlyDropdown', { '--Open': this.state.open }, this.props.className)} tabIndex="0" onClick={this.onClick} onBlur={this.onBlur}>
				{this.props.children}

				{this.props.caret && <CaretSVG className="FlyDropdown_Caret"/>}

				<ul className={classnames([
					'FlyDropdown_Items',
					`FlyDropdown_Items--${this.props.position}`,
					{ '--TipItemHover': this.state.tipItemHover },
					typeof this.state.tipItemHover === 'string' ? `--TipItemHover--${this.state.tipItemHover}` : null,
				])}>
					{
						this.props.items.map((item, i) => (
							<li key={i} className={classnames('FlyDropdown_Item', item.color ? `--${item.color}` : null)} onClick={(event) => {
								item.onClick.call();
								this.setState({ open: false });

								event.stopPropagation();
							}} onMouseDown={(event) => event.preventDefault()}
								    onMouseOver={this.tipItemHoverFactory(i, item.color ? item.color : true)}
								    onMouseOut={this.tipItemHoverFactory(i, false)}>
								{item.label}
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}
