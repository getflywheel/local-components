import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from  './Switch.sass';

export default class Switch extends Component {
	static propTypes = {
		label: PropTypes.string,
		tiny: PropTypes.bool,
		flat: PropTypes.bool,
		disabled: PropTypes.bool,
		name: PropTypes.string,
		noValue: PropTypes.bool,
		checked: PropTypes.bool,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		checked: false,
	};

	constructor (props) {
		super(props);

		this.state = {
			checked: this.props.checked,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps (nextProps) {
		this.props = nextProps;

		if ('checked' in nextProps) {
			this.setState({ checked: nextProps.checked });
		}
	}

	handleChange () {
		const checked = !this.state.checked;

		this.setState({ checked: checked });

		if (this.props.onChange) {
			this.props.onChange(this.props.name, checked);
		}
	}

	render () {
		return (
			<div
				className={classnames(
					styles.Switch, {
						[styles.Switch__Tiny]: this.props.tiny,
						[styles.Switch__Flat]: this.props.flat,
					}
				)}
			>
				{this.props.label && <label>{this.props.label}</label>}
				<input
					type="checkbox"
					defaultChecked={this.state.checked}
					disabled={this.props.disabled || this.props.noValue}
					onChange={this.handleChange}
					data-no-value={this.props.noValue}
				/>
			</div>
		);
	}
}
