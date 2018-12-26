import * as React from "react";

interface ButtonPropsI {
	/** Button contents */
	children?: React.ReactNode;
	/** Click handler */
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default class Button extends React.Component {

	static defaultProps: ButtonPropsI = {
		children: null,
	};

	render () {
		return (
			<button
				{...this.props}
			>
				{this.props.children}
			</button>
		);
	}

}
