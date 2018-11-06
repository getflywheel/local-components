import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './TabNav.sass';

export default class TabNav extends Component {
	static propTypes = {
		tag: PropTypes.string,
		itemsClassName: PropTypes.string,
		aux: PropTypes.node, // Used for adding items in the right-hand side of the TabNav such as Site Info buttons
	};

	static defaultProps = {
		tag: 'nav',
	};

	maybeRenderAux () {
		if (!this.props.aux) {
			return;
		}

		return (
			<div className={styles.TabNav_Aux}>
				{this.props.aux}
			</div>
		);
	}

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

				{this.maybeRenderAux()}
			</NavTag>
		);
	}
}
