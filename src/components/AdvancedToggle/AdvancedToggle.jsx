import React, { Component } from 'react';
import CaretSVG from '../../svg/caret.svg';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AdvancedToggle.sass';

export default class AdvancedToggle extends Component {

	static propTypes = {
		headingText: PropTypes.string,
	};

	static defaultProps = {
		headingText: 'Advanced Options',
	};

	constructor (props) {
		super(props);

		this.state = {
			advancedOpen: false,
		};

		this.toggleAdvanced = this.toggleAdvanced.bind(this);
	}

	toggleAdvanced () {
		this.setState({
			advancedOpen: !this.state.advancedOpen,
		});
	}

	render () {
		return (
			<div
				className={classnames(
					styles.AdvancedToggle, {
						[styles.AdvancedToggle__isOpen]: this.state.advancedOpen
					}
				)}
			>
				<span
					className={styles.Toggle}
					onClick={this.toggleAdvanced}
				>
					<span>
						{this.props.headingText}
						<CaretSVG />
					</span>
				</span>

				<div className={styles.Content}>
					{this.props.children}
				</div>
			</div>
		);
	}

}
