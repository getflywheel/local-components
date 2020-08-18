import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import Omit from '../../../common/structures/Omit';
import * as TruncateMarkup from 'react-truncate-markup/lib';

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
				className={this.props.className}
				ellipsis={this.props.ellipsis}
				id={this.props.id}
				lines={this.props.lines}
				style={this.props.style}
			>
				<div>
					{this.props.children}
				</div>
			</TruncateMarkup>
		);
	}
}
