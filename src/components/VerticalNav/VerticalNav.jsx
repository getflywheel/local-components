import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import { NavLink } from 'react-router-dom';
import styles from './VerticalNav.sass';
import FlyTooltip from '../FlyTooltip/FlyTooltip';

export class VerticalNav extends Component {

	render () {
		return (
			<div className={styles.VerticalNav}>
				{this.props.children}
			</div>
		);
	}

}

export class VerticalNavItem extends Component {

	static propTypes = {
		className: PropTypes.string,
		fadeIn: PropTypes.bool,
		navLinkActive: PropTypes.bool,
		// navLinkActiveClassName: PropTypes.string,
		navLinkClass: PropTypes.string,
		routeTo: PropTypes.string,
		tooltip: PropTypes.string,
		type: PropTypes.oneOf('navlink', 'filler'),
	};

	static defaultProps = {
		fadeIn: true,
		type: 'navlink'
	};

	renderWrapper (children, additionalTooltipClassName) {
		return (
			this.props.tooltip
				?
				<FlyTooltip
					className={classnames(
						styles.VerticalNavItem,
						additionalTooltipClassName,
						this.props.className,
					)}
					content={this.props.tooltip}
					position="right"
					hoverIntent={true}
				>
					{children}
				</FlyTooltip>
				:
				<div className={classnames(
					styles.VerticalNavItem,
					this.props.className,
				)}>
					{children}
				</div>
		);
	}

	renderTypeNavLink (additionalTooltipClassName, additionalNavLinkClass) {
		return this.renderWrapper(
			(
				<NavLink
					to={this.props.routeTo}
					exact={false}
					activeClassName={this.props.navLinkActiveClassName || "__Active"}
					className={classnames(
						this.props.navLinkClass,
						additionalNavLinkClass,
						{
							'__FadeIn': this.props.fadeIn,
							'__Active': this.props.navLinkActive,
						}
					)}
				>
					{this.props.children}
				</NavLink>
			),
			additionalTooltipClassName
		);
	}

	renderTypeFiller () {
		return <div className={styles.VerticalNavItem_DragRegion}/>;
	}

	renderTypeAddSite () {
		return this.renderTypeNavLink(styles.FlyTooltip__AddSite, [styles.VerticalNav_Add, 'TID_VerticalNav_NavLink_Add']);
	}

	render () {
		switch(this.props.type) {
			case 'navlink':
				return this.renderTypeNavLink();
			case 'filler':
				return this.renderTypeFiller();
			case 'addsite':
				return this.renderTypeAddSite();
			default:
				return null;
		}
	}

}
