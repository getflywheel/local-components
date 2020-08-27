import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import TruncateMarkup from 'react-truncate-markup';

interface IProps extends IReactComponentProps {
	ellipsis?: React.ReactNode;
	lines?: number | undefined;
}

export default class Truncate extends React.Component<IProps> {
	static defaultProps: Partial<IProps> = {
		ellipsis: '...',
		lines: 1,
	};

	render () {
		return (
			<TruncateMarkup
				ellipsis={this.props.ellipsis}
				lines={this.props.lines}
			>
				<div
					className={this.props.className}
					id={this.props.id}
					style={this.props.style}
				>
					{this.props.children}
				</div>
			</TruncateMarkup>
		);
	}
}
