import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './EmptyArea.sass';

export default class EmptyArea extends Component {
	static propTypes = {
		border: PropTypes.bool,
		FadeIn: PropTypes.bool,
	};

	render () {
		return (
			<div
				className={classnames(
					styles.EmptyArea,
					'EmptyArea', // this also needs to be globally accessible so other component styles can reference it
					{
						'__NoBorder': this.props.border === false,
						'__FadeIn': this.props.FadeIn,
					}
				)}
			>
				{this.props.children}
			</div>
		);
	}
}
