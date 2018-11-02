import React, { Component } from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import MarketplacePage from '../../components/MarketplacePage';
import styles from './MarketplacePageHome.sass';
import AddSVG from '../../../svg/add.svg';
import Header from '../../../components/Header/Header';
import TabNav from '../../../components/TabNav/TabNav';

class MarketplacePageHomeBase extends Component {

	render() {
		return (
			<MarketplacePage className={styles.MarketplacePageHome}>
				<div className={styles.MarketplacePageHome_HeaderContainer}>
					{/*todo - crum: make this into a component 'MarketplacePageHeader'*/}
					<Header
						tag="h1"
						size="xl"
						className="MarketplacePage_Header"
					>
						Add-ons
					</Header>
					<div className={styles.MarketplacePageHome_HeaderContainer_ButtonContainer}>
						{/*todo - crum: what does this do? link to?'*/}
						<button className="__Pill __Green"><AddSVG/>CREATE AN ADD-ON</button>
					</div>
				</div>
				<TabNav>
					<NavLink
						exact
						to={`${this.props.match.url}/`}
						activeClassName="active"
					>
						Community
					</NavLink>
					<NavLink
						to={`${this.props.match.url}/installed`}
						activeClassName="active"
					>
						Installed (6)
					</NavLink>
				</TabNav>
				{/*todo - crum: make this into a component 'MarketplacePageContent'*/}
				<div className="MarketplacePage_Content">
					<Switch>
						<Route
							exact
							path={`${this.props.match.url}/`}
							render={(props) => {const Component = require('./MarketplacePageHomeCommunity').default; return <Component />}}
						/>
						<Route
							path={`${this.props.match.url}/installed`}
							render={(props) => {const Component = require('./MarketplacePageHomeInstalled').default; return <Component />}}
						/>
					</Switch>
				</div>
			</MarketplacePage>
		);
	}

}

const MarketplacePageHome = withRouter(MarketplacePageHomeBase);
export default MarketplacePageHome;
