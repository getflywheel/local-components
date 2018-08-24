import React, { Component } from 'react';
import { Link } from 'react-router';
import LocalSitesSVG from '../../svg/sites_local.svg';
import ConnectNavSVG from '../../svg/connect-nav.svg';
import AddSVG from '../../svg/add.svg';
import classnames from 'classnames';
import FlyTooltip from '../FlyTooltip';

export default class VerticalNav extends Component {
	static defaultProps = {
		selectedSites: [],
	};

	renderLocalSitesLink () {

		const linkLocation = this.props.selectedSites.length ? `/main/site-info/${this.props.selectedSites[0]}` : '/main';
		const localSitesActive = this.props.location.pathname.indexOf('/main') === 0 && this.props.location.pathname.indexOf('/main/flywheel') !== 0;

		return <FlyTooltip content="Local Sites" position="right" hoverIntent={true}>
			<Link to={linkLocation} className={classnames('VerticalNav_Local', {
				'--FadeIn': this.props.fadeIn,
				'--Active': localSitesActive,
			})}>
				<LocalSitesSVG/>
			</Link>
		</FlyTooltip>;

	}

	renderFlywheelSitesLink () {

		return <FlyTooltip content="Connect to Flywheel" position="right" hoverIntent={true}>
			<Link to="/main/flywheel"
			      className={classnames('VerticalNav_Flywheel', { '--FadeIn': this.props.fadeIn })}
			      activeClassName="--Active">
				<ConnectNavSVG/>
			</Link>
		</FlyTooltip>;

	}

	render () {

		return (
			<div className="VerticalNav">
				{this.renderLocalSitesLink()}
				{this.renderFlywheelSitesLink()}

				<div className="DragRegion"/>

				<FlyTooltip content="Add Local Site" position="right" hoverIntent={true} className="--AddSite">
					<Link to="/main/add-site" className={classnames('VerticalNav_Add', { '--FadeIn': this.props.fadeIn })}>
						<AddSVG />
					</Link>
				</FlyTooltip>
			</div>
		);
	}

}
