import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './LoadingIndicator.sass';

export default class LoadingIndicator extends Component {
	static propTypes = {
		big: PropTypes.bool,
		color: PropTypes.oneOf(['Green', 'Gray']),
	};

	static defaultProps = {
		big: false,
		color: 'Green',
	};

	render () {
		return (
            <div
				className={classnames(
					styles.LoadingIndicator, {
						[styles.__Gray]: this.props.color === 'Gray',
						[styles.__Big]: this.props.big,
					}
				)}
			>
                <div />
                <div />
                {this.props.big && <div />}
            </div>
        );
	}
}
