import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import MarketplacePage from '../../components/MarketplacePage';
import styles from './MarketplacePageAddon.sass';
import Header from '../../../components/Header/Header';
import Card from '../../../components/Card/Card';

class MarketplacePageAddonBase extends Component {

	removeEndingDirectories = (the_url, removeDirectoriesCount = 1) => {
		let the_arr = the_url.split('/');

		for (let i = 0; i < removeDirectoriesCount; i++) {
			the_arr.pop();
		}

		return( the_arr.join('/') );
	};

	render() {
		return (
			<MarketplacePage
				className={styles.MarketplacePageAddon}
				containerClassName={styles.MarketplacePageAddon_PageContainer}
				scrollerClassName={styles.MarketplacePageAddon_PageScroller}
			>
				<nav className={styles.MarketplacePageAddon_Nav}>
					<NavLink
						to={`${this.removeEndingDirectories(this.props.match.url, 2)}/home`}
						activeClassName="active"
						className={styles.MarketplacePageAddon_Nav_Link}
					>
						ADD-ONS
					</NavLink>
					<span className={styles.MarketplacePageAddon_Nav_AddonName}>
						{/*todo - crum: make dynamic*/}
						XDebug Control
					</span>
				</nav>
				<div className={styles.MarketplacePageAddon_Body}>
					<aside className={styles.MarketplacePageAddon_Aside}>
						<div
							className={classnames(
								styles.square,
								styles.MarketplacePageAddon_Aside_ImageContainer,
							)}
						>
							<div className={styles.content}>
								<Card
									className={styles.MarketplacePageAddon_Aside_Image__Square}
									headerBackgroundColor="#50c6db"
									headerClassName={styles.MarketplacePageAddon_Aside_Image__Square}
									headerIconContainerClassName={styles.MarketplacePageAddon_Aside_Image__Square}
									headerIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
									headerIconMaxHeight="120px"
								/>
							</div>
						</div>
						{/* todo - crum: wire up */}
						<button
							className={classnames(
								styles.MarketplacePageAddon_Aside_InstallButton,
								"__Pill",
								"__Green",
							)}
						>
							INSTALL ADD-ON
						</button>
						<Header
							tag="h2"
							size="s"
							className={styles.MarketplacePageAddon_Aside_DetailsHeader}
						>
							Details
						</Header>
						<ul className={styles.MarketplacePageAddon_Aside_DetailsInfo}>
							<li>Version <span>1.1.1</span></li>
							<li>Active Installs <span>1,394</span></li>
							<li>Tested Up To <span>2.1.2</span></li>
							<li>License <span>MIT</span></li>
						</ul>
						<ul className={styles.MarketplacePageAddon_Aside_DetailsLinks}>
							<li><a>Visit Website</a></li>
							<li><a>Repository</a></li>
							<li><a>Add-On Help</a></li>
						</ul>
						<div className={styles.MarketplacePageAddon_Aside_DevelopersContainer}>
							<Header
								tag="h3"
								size="xs"
								className={styles.MarketplacePageAddon_Aside_DevelopersTitle}
							>
								DEVELOPED BY
							</Header>
							<div className={styles.MarketplacePageAddon_Aside_AvatarRow}>
								<div className={styles.MarketplacePageAddon_Aside_AvatarImageContainer}>
									<img
										className={styles.MarketplacePageAddon_Aside_AvatarImage}
										src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"
									/>
								</div>
								<div className={styles.MarketplacePageAddon_Aside_AvatarDetails}>
									<div>
										Luke Korth
									</div>
									<div>
										12 Add-Ons
									</div>
								</div>
							</div>
						</div>
						<div className={styles.MarketplacePageAddon_Aside_DevelopersContainer}>
							<Header
								tag="h3"
								size="xs"
								className={styles.MarketplacePageAddon_Aside_DevelopersTitle}
							>
								COLLABORATORS
							</Header>
							<div className={styles.MarketplacePageAddon_Aside_AvatarRow}>
								<div
									className={classnames(
										styles.MarketplacePageAddon_Aside_AvatarImageContainer,
										styles.MarketplacePageAddon_Aside_AvatarImageContainer__Small,
									)}
								>
									<img
										className={styles.MarketplacePageAddon_Aside_AvatarImage}
										src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"
									/>
								</div>
								<div className={styles.MarketplacePageAddon_Aside_AvatarDetails}>
									<div>
										Kaitlynn Guzman
									</div>
								</div>
							</div>
							<div className={styles.MarketplacePageAddon_Aside_AvatarRow}>
								<div
									className={classnames(
										styles.MarketplacePageAddon_Aside_AvatarImageContainer,
										styles.MarketplacePageAddon_Aside_AvatarImageContainer__Small,
									)}
								>
									<img
										className={styles.MarketplacePageAddon_Aside_AvatarImage}
										src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"
									/>
								</div>
								<div className={styles.MarketplacePageAddon_Aside_AvatarDetails}>
									<div>
										Kaitlin Grohmann
									</div>
								</div>
							</div>
							<div className={styles.MarketplacePageAddon_Aside_AvatarRow}>
								<div
									className={classnames(
										styles.MarketplacePageAddon_Aside_AvatarImageContainer,
										styles.MarketplacePageAddon_Aside_AvatarImageContainer__Small,
									)}
								>
									<img
										className={styles.MarketplacePageAddon_Aside_AvatarImage}
										src="https://getflywheel.com/wp-content/uploads/2017/06/php-7-small.png"
									/>
								</div>
								<div className={styles.MarketplacePageAddon_Aside_AvatarDetails}>
									<div>
										Trivago Guy
									</div>
								</div>
							</div>
						</div>
						<div className={styles.MarketplacePageAddon_Aside_CategoriesContainer}>
							<Header
								tag="h2"
								size="s"
								className={styles.MarketplacePageAddon_Aside_CategoriesHeader}
							>
								Categories
							</Header>
							<div className={styles.MarketplacePageAddon_Aside_CategoriesChipContainer}>
								<span className={styles.MarketplacePageAddon_Aside_CategoriesChip}>
									CATEGORY
								</span>
								<span className={styles.MarketplacePageAddon_Aside_CategoriesChip}>
									ANOTHER-CAT
								</span>
								<span className={styles.MarketplacePageAddon_Aside_CategoriesChip}>
									CAT-3
								</span>
							</div>
						</div>
						<div className={styles.MarketplacePageAddon_Aside_ReportBug}>
							<span>See a bug? No you don’t. But you should <a>report it here, anyways</a>.</span>
						</div>
					</aside>
					<main className={styles.MarketplacePageAddon_Content}>
						<div className={styles.MarketplacePageAddon_Content_Type}>
							{/*todo - crum: make dynamic*/}
							EXTENSION
						</div>
						{/*todo - crum: make dynamic*/}
						<Header
							tag="h1"
							size="xl"
							className={styles.MarketplacePageAddon_Content_Name}
						>
							XDebug Control
						</Header>
						<div className={styles.MarketplacePageAddon_Content_Developer}>
							by Luke Korth
						</div>
						<nav
							className={classnames(
								styles.MarketplacePageAddon_Content_Nav,
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
