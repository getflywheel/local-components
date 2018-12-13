import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SpinnerSVG from '../../svg/spinner.svg';
import styles from './Spinner.sass';

export default class Spinner extends Component {
	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.oneOf('Gray25', 'GrayDark50'),
		ellipsis: PropTypes.node,
		lines: PropTypes.number,
	};

	static defaultProps = {
		color: 'Gray25',
		ellipsis: '...',
		lines: 1,
	};

	render () {
		return (
			<SpinnerSVG
				className={classnames(
					styles.Spinner,
					this.props.className,
					{
						[styles.Spinner__ColorGrayDark50]: this.props.color === 'GrayDark50',
					},
				)}
			/>
		);
	}
}
