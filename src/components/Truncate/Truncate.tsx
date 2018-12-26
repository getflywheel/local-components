import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TruncateMarkup from 'react-truncate-markup';

export default class Truncate extends React.Component {
	static propTypes = {
		lines: PropTypes.number,
		ellipsis: PropTypes.node,
	};

	static defaultProps = {
		lines: 1,
		ellipsis: '...',
	};

	render () {
		return (
			<TruncateMarkup
				className={classnames(this.props.className)}
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
