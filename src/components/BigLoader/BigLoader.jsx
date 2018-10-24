import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import LoadingIndicator from '../LoadingIndicator';
import styles from './BigLoader.sass';

export default class BigLoader extends Component {
	static propTypes = {
		message: PropTypes.string,
	};

	render () {
		return (
            <div
				className={classnames(
                	styles.BigLoader,
                	'MainPanel',
					this.props.className,
				)}
                style={this.props.style}
			>
				<LoadingIndicator big={true} />
				{
					this.props.message && <h3>{this.props.message}</h3>
				}
			</div>
		);
	}
}
