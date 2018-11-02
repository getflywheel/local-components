import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './TabNav.sass';

export default class TabNav extends Component {
	static propTypes = {
		tag: PropTypes.string,
		itemsClassName: PropTypes.string,
	};

	static defaultProps = {
		tag: 'nav',
	};

	render () {
		const NavTag = this.props.tag;

		return (
			<NavTag
				className={classnames(
					styles.TabNav,
					this.props.className,
				)}
			>
				<div className={classnames(
					styles.TabNav_Items,
					this.props.itemsClassName,
				)}
			>
					{this.props.children}
				</div>
			</NavTag>
		);
	}
}
