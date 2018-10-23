import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import styles from './Marketplace.sass';

class MarketplaceBase extends Component {

	render() {
		return (
			<div className={styles.Marketplace}>
				<Switch>
					<Route
						exact
						path={`${this.props.match.path}/`} // existing path set through the flywheel-local app (e.g. main/flywheel/marketplace)
						render={(props) => <Redirect to={`${this.props.match.path}/home`}/>}
					/>
					<Route
						path={`${this.props.match.path}/home`} // not 'exact' because we want to render this even if partial match and delagate the rest to its decedents
						render={(props) => {const Component = require('./pages/home/MarketplacePageHome').default; return <Component />}}
					/>
				</Switch>
			</div>
		);
	}

}

const Marketplace = withRouter(MarketplaceBase);
export default Marketplace;
