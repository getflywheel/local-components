import * as React from "react";

interface ButtonPropsI {
	text: string;
}

export default class Button extends React.Component<ButtonPropsI, {}> {

	static defaultProps: ButtonPropsI = {
		text: "click click boom"
	};

	render () {
		return (
			<button {...this.props}>{this.props.text}--{this.props.children}</button>
		);
	}

}
