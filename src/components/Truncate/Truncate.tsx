import React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import TruncateMarkup from 'react-truncate-markup';

// todo - crum: this component doesn't currently support 'className' or 'style' because 3rd party 'TruncateMarkup' doesn't support it...use TypeScript 'omit???' Omit<IXProps, "unwantedProp">

interface IProps {

	ellipsis?: React.ReactNode;
	lines?: number | undefined;

}

export default class Truncate extends React.Component<IProps & IReactComponentProps> {

	static defaultProps: Partial<IProps> = {
		ellipsis: '...',
		lines: 1,
	};

	render () {
		return (
			<TruncateMarkup
				lines={this.props.lines}
				ellipsis={this.props.ellipsis}
			>
				<div>
					{this.props.children}
				</div>
			</TruncateMarkup>
		);
	}

}
