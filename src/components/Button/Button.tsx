import * as React from "react";

interface LocalComponentPropsI {
	className?: string;
	style?: object;
}

interface ButtonPropsI {
	/** Button contents */
	children: React.ReactNode;
	/** Click handler */
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default class Button extends React.Component<ButtonPropsI & LocalComponentPropsI> {

	static defaultProps: ButtonPropsI = {
		children: null,
	};

	render () {
		return (
			<button
				style={this.props.style}
				{...this.props}
			>
				{this.props.children}
			</button>
		);
	}

}
