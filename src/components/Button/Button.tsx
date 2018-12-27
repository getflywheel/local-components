import React from "react";
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';

interface PropsI extends LocalComponentPropsI {

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
