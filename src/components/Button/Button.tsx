import React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {

	disabled?: boolean;

}

export default class Button extends React.Component<IProps> {

	render () {
		return (
			<button
				disabled={this.props.disabled}
				{...this.props}
			>
				{this.props.children}
			</button>
		);
	}

}
