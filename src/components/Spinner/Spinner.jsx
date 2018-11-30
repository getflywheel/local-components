import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SpinnerSVG from '../../svg/spinner.svg';
import styles from './Spinner.sass';

export default class Spinner extends Component {
	static propTypes = {
		className: PropTypes.string,
		ellipsis: PropTypes.node,
		lines: PropTypes.number,
	};

	static defaultProps = {
		lines: 1,
		ellipsis: '...',
	};

	render () {
		return (
			<SpinnerSVG
				className={classnames(
					styles.Spinner,
					this.props.className,
				)}
			/>
		);
	}
}
