import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom';
import styles from './Marketplace.sass';

class MarketplaceBase extends Component {

	render() {
		return (
			<div className={styles.Marketplace}>
				<Switch>
					<Route
						exact
						path={`${this.props.match.url}/`} // existing path set through the flywheel-local app (e.g. main/flywheel/marketplace)
						render={(props) => <Redirect to={`${this.props.match.url}/home`}/>}
					/>
					<Route
						path={`${this.props.match.url}/home`} // not 'exact' because we want to render this even if partial match and delagate the rest to its decedents
						render={(props) => {const Component = require('./pages/home/MarketplacePageHome').default; return <Component />}}
					/>
					<Route
						path={`${this.props.match.url}/addon/:id`} // not 'exact' because we want to render this even if partial match and delagate the rest to its decedents
						render={(props) => {const Component = require('./pages/addon/MarketplacePageAddon').default; return <Component />}}
					/>
				</Switch>
				<NavLink
					to={`${this.props.match.url}/addon/fake123`}
					activeClassName="active"
				>
					fake123
				</NavLink>
			</div>
		);
	}

}

const Marketplace = withRouter(MarketplaceBase);
export default Marketplace;
