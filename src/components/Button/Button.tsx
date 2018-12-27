import React from 'react';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';

interface PropsI extends ReactComponentPropsI {

	disabled?: boolean;

}

export default class Button extends React.Component<PropsI> {

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
