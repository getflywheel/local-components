import React, { Component } from 'react';
import EyeSVG from '../../svg/eye.svg';

export default class InputPasswordToggle extends Component {
	constructor (props) {
		super(props);

		this.state = {
			inputType: 'password',
		};

		this.toggleType = this.toggleType.bind(this);
	}

	toggleType () {
		this.setState({
			inputType: this.state.inputType === 'password' ? 'text' : 'password',
		});
	}

	render () {
		const { className, ...props } = this.props;

		return (
			<div className={`PasswordToggle PasswordToggle__${this.state.inputType}`}>
				<input
					type={this.state.inputType}
					className={className ? `PasswordToggleInput ${className}` : 'PasswordToggleInput'}
					{...props}
				/>
				<span className="Eye" onClick={this.toggleType}>
					<EyeSVG />`
				</span>
			</div>
		);
	}
}
