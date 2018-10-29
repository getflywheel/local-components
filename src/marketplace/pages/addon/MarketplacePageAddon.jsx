import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import MarketplacePage from '../../components/MarketplacePage';
import styles from './MarketplacePageAddon.sass';
import Header from '../../../components/Header/Header';

class MarketplacePageAddonBase extends Component {

	removeEndingDirectories = (the_url, removeDirectoriesCount = 1) => {
		var the_arr = the_url.split('/');

		for (let i = 0; i < removeDirectoriesCount; i++) {
			the_arr.pop();
		}

		return( the_arr.join('/') );
	};

	render() {
		return (
			<MarketplacePage className={styles.MarketplacePageAddon}>
				<nav className={styles.MarketplacePageAddon_Nav}>
					<NavLink
						to={`${this.removeEndingDirectories(this.props.match.url, 2)}/home`}
						activeClassName="active"
					>
						ADD-ONS
					</NavLink>
					{/*todo - crum: make dynamic*/}
					Xdebug Control
				</nav>
				<div className={styles.MarketplacePageAddon_Body}>
					<aside className={styles.MarketplacePageAddon_Aside}>
						abc
					</aside>
					<main className={styles.MarketplacePageAddon_Content}>
						<div className={styles.MarketplacePageAddon_AddonType}>
							{/*todo - crum: make dynamic*/}
							EXTENSION
						</div>
						{/*todo - crum: make dynamic*/}
						<Header
							tag="h1"
							size="xl"
							className={styles.MarketplacePageAddon_AddonName}
						>
							XDebug Control
						</Header>
						<div className={styles.MarketplacePageAddon_AddonDeveloper}>
							by Luke Korth
						</div>
						<nav
							className={classnames(
								styles.MarketplacePageAddon_AddonNav,
								"TabNav SiteInfo_Nav",
							)}
						>
							<div className="TabNav_Items SiteInfo_Nav_Items">
								<NavLink
									exact
									to={`${this.props.match.url}`}
									activeClassName="active"
								>
									OVERVIEW
								</NavLink>
								<NavLink
									to={`${this.props.match.url}/dependencies`}
									activeClassName="active"
								>
									DEPENDENCIES
								</NavLink>
								<NavLink
									to={`${this.props.match.url}/release-notes`}
									activeClassName="active"
								>
									RELEASE NOTES
								</NavLink>
								<NavLink
									to={`${this.props.match.url}/screenshots`}
									activeClassName="active"
								>
									SCREENSHOTS
								</NavLink>
							</div>
						</nav>
					</main>
				</div>
			</MarketplacePage>
		);
	}

}

const MarketplacePageAddon = withRouter(MarketplacePageAddonBase);
export default MarketplacePageAddon;
