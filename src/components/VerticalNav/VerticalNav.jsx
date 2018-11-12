import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import { NavLink } from 'react-router-dom';
import styles from './VerticalNav.sass';

export class VerticalNav extends Component {

	render () {
		return (
			<div className={styles.VerticalNav}>
				{this.props.children}
			</div>
		);
	}

}

