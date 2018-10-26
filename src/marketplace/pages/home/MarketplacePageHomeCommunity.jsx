import React, {Component} from 'react';
import { Header } from '../../../index';
import MarketplaceCard from '../../components/MarketplaceCard';
import MarketplaceCardContainer from '../../components/MarketplaceCardContainer';
import styles from './MarketplacePageHomeCommunity.sass';
import FlyDropdown from '../../../components/FlyDropdown/FlyDropdown';
import Button from '../../../components/Button/Button';
import Card from "../../../components/Card/Card";

export default class MarketplacePageHomeCommunity extends Component {

	render() {
		return (
			<div className={styles.MarketplacePageHomeCommunity}>
				<aside className={styles.MarketplacePageHomeCommunity_Aside}>
					<div className={styles.MarketplacePageHomeCommunity_Aside_Group}>
						{/*todo - crum: make this into a component*/}
						<Header
							tag="h2"
							size="s"
							className={styles.MarketplacePageHomeCommunity_Aside_Header}
						>
							Explore
						</Header>
						<ul>
							<li><a>All</a></li>
							<li><a>Featured</a></li>
							<li><a>New</a></li>
							<li><a>Popular</a></li>
							<li><a>made by Flywheel</a></li>
						</ul>
					</div>
					<div className={styles.MarketplacePageHomeCommunity_Aside_Group}>
						{/*todo - crum: make this into a component*/}
						<Header
							tag="h2"
							size="s"
							className={styles.MarketplacePageHomeCommunity_Aside_Header}
						>
							Categories
						</Header>
						<ul>
							<li><a>WordPress</a></li>
							<li><a>Development Tools</a></li>
							<li><a>React/Vue</a></li>
							<li><a>Live Reload</a></li>
							<li><a>Docker</a></li>
							<li><a>Stats</a></li>
							<li><a>Log Viewing</a></li>
						</ul>
					</div>
					<div className={styles.MarketplacePageHomeCommunity_Aside_Group}>
						{/*todo - crum: make this into a component*/}
						<Header
							tag="h2"
							size="s"
							className={styles.MarketplacePageHomeCommunity_Aside_Header}
						>
							Featured Developers
						</Header>
						<ul>
							{/*todo - crum: create avatar component */}
							{/*todo - crum: truncate */}
							<li><a>🙂 Kaitlynn Guzman</a></li>
							<li><a>🙂 Kaitlin Grohmann</a></li>
							<li><a>🙂 Trivago Guy</a></li>
							<li><a>🙂 Luke Korth</a></li>
						</ul>
					</div>
				</aside>
				<main className={styles.MarketplacePageHomeCommunity_Content}>
					<div className={styles.MarketplacePageHomeCommunity_Toolbar}>
						{/*todo - crum: create search input component w/ icon */}
						<span>input</span>
						<div>
							{/*todo - crum: what options are in here? */}
							<FlyDropdown
								position="bottom"
								items={[
									{
										label: 'Option 1',
										onClick: () => console.log('onClick'),
									},
									{
										label: 'Option 2',
										onClick: () => console.log('onClick'),
									},
									{
										label: 'Option 3 (Red)',
										onClick: () => console.log('onClick'),
										color: 'red',
									},
								]}
							>
								<Button>ALL TYPES</Button>
							</FlyDropdown>
							{/*todo - crum: what options are in here?*/}
							<FlyDropdown
								position="bottom"
								className="__MarginLeft_10"
								items={[
									{
										label: 'Option 1',
										onClick: () => console.log('onClick'),
									},
									{
										label: 'Option 2',
										onClick: () => console.log('onClick'),
									},
									{
										label: 'Option 3 (Red)',
										onClick: () => console.log('onClick'),
										color: 'red',
									},
								]}
							>
								<Button>DEFAULT</Button>
							</FlyDropdown>
						</div>
					</div>
					<MarketplaceCardContainer>
						<MarketplaceCard
							addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
							addonBackgroundColor="#50c6db"
							addonName="X-Debug Control"
							addonDeveloper="Developer Name"
							addonDescription="The add-on consists of a single page UI found under the More > XDebug Control menu."
							addonType="extension"
						/>
						<MarketplaceCard
							addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
							addonBackgroundColor="#50c6db"
							addonName="Chrome Dev Tools"
							addonDeveloper="Developer Name"
							addonDescription="Access the Chrome Developer Tools while Local is open."
							addonType="extension"
						/>
						<MarketplaceCard
							addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
							addonBackgroundColor="#50c6db"
							addonName="Logs"
							addonDeveloper="Developer Name"
							addonDescription="Makes logs look nature’s logs, which you haven’t seen lately get off the computer."
							addonType="extension"
						/>
						<MarketplaceCard
							addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
							addonBackgroundColor="#50c6db"
							addonName="TBot"
							addonDeveloper="Developer Name"
							addonDescription="Automate your mundane Local tasks easily with your very own robot."
							addonType="extension"
						/>
						<MarketplaceCard
							addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
							addonBackgroundColor="#50c6db"
							addonName="Quick Admin"
							addonDeveloper="Developer Name"
							addonDescription="Simplify your admin controls with this add-on."
							addonType="extension"
						/>
						<MarketplaceCard
							addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
							addonBackgroundColor="#50c6db"
							addonName="Statz"
							addonDeveloper="Developer Name"
							addonDescription="Get a setailed look at how effective your development is."
							addonType="extension"
						/>
						<MarketplaceCard
							addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
							addonBackgroundColor="#50c6db"
							addonName="Another"
							addonDeveloper="Developer Name"
							addonDescription="Something fancy...trust me :)"
							addonType="extension"
						/>
					</MarketplaceCardContainer>
				</main>
			</div>
		);
	}

}
