import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import TruncateMarkup from 'react-truncate-markup';

// todo - crum: this component doesn't currently support 'className' or 'style' because 3rd party 'TruncateMarkup' doesn't support it...use TypeScript 'omit???' Omit<IXProps, "unwantedProp">

interface PropsI {

	lines?: number | undefined;
	ellipsis?: React.ReactNode;

}

export default class Truncate extends React.Component<PropsI & LocalComponentPropsI> {

	static defaultProps: Partial<PropsI> = {
		lines: 1,
		ellipsis: '...',
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
