import * as React from "react";

export default class Button extends React.Component {

	render () {
		return (
			<button {...this.props}>z2{this.props.children}</button>
		);
	}

}
