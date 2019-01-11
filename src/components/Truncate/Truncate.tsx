import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import Omit from '../../common/structures/Omit';

/* TruncateMarkup's types and exports are all jacked up. This makes it play nicely in Local. */
const TruncateMarkup = require('react-truncate-markup');

interface IProps {

	ellipsis?: React.ReactNode;
	lines?: number | undefined;

}

type ReactComponentPropsModified = Omit<IReactComponentProps, 'className' | 'style'>;

export default class Truncate extends React.Component<IProps & ReactComponentPropsModified> {

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
