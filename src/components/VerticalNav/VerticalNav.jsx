import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import LocalSitesSVG from '../../svg/sites_local.svg';
import ConnectNavSVG from '../../svg/connect-nav.svg';
import AddSVG from '../../svg/add.svg';
import FlyTooltip from '../FlyTooltip';
import styles from './VerticalNav.sass';

export default class VerticalNav extends Component {
	static defaultProps = {
		selectedSites: [],
	};

	renderLocalSitesLink () {
		const linkLocation = this.props.selectedSites.length ? `/main/site-info/${this.props.selectedSites[0]}` : '/main';
		const localSitesActive = this.props.location.pathname.indexOf('/main') === 0 && this.props.location.pathname.indexOf('/main/flywheel') !== 0;

		return <FlyTooltip
			content="Local Sites"
			position="right"
			hoverIntent={true}
		>
			<NavLink
				to={linkLocation}
				className={classnames(
					'VerticalNav_Local',
					{
						'__FadeIn': this.props.fadeIn,
						'__Active': localSitesActive,
					}
				)}
			>
				<LocalSitesSVG/>
			</NavLink>
		</FlyTooltip>;
	}

	renderFlywheelSitesLink () {
		return <FlyTooltip
			content="Connect to Flywheel"
			position="right"
			hoverIntent={true}
		>
			<NavLink
				to="/main/flywheel"
				 className={classnames(
				 	'VerticalNav_Flywheel',
					 {
				 		'__FadeIn': this.props.fadeIn,
				 	}
				)}
				activeClassName="__Active"
			>
				<ConnectNavSVG/>
			</NavLink>
		</FlyTooltip>;
	}

	render () {
		return (
			<div className={styles.VerticalNav}>
				{this.renderLocalSitesLink()}
				{this.renderFlywheelSitesLink()}

				<div className={styles.DragRegion}/>

				<FlyTooltip
					content="Add Local Site"
					position="right"
					hoverIntent={true}
					className="FlyTooltip__AddSite"
				>
					<NavLink
						to="/main/add-site"
						className={classnames(
							styles.VerticalNav_Add,
							'TID_VerticalNav_NavLink_Add',
							{
								'__FadeIn': this.props.fadeIn,
							}
						)}
					>
						<AddSVG />
					</NavLink>
				</FlyTooltip>
			</div>
		);
	}

}
