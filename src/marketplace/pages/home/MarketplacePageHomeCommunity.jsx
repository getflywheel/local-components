import React, {Component} from 'react';
import { Header } from '../../../index';
import MarketplaceCard from '../../components/MarketplaceCard';
import MarketplaceCardContainer from '../../components/MarketplaceCardContainer';
import styles from './MarketplacePageHomeCommunity.sass';
import FlyDropdown from '../../../components/FlyDropdown/FlyDropdown';
import Button from '../../../components/Button/Button';

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
							imgPath="zzz"
							name="X-Debug Control"
							developer="Developer Name"
							description="The add-on consists of a single page UI found under the More > XDebug Control menu."
							type="extension"
						/>
						<MarketplaceCard
							imgPath="zzz"
							name="Chrome Dev Tools"
							developer="Developer Name"
							description="Access the Chrome Developer Tools while Local is open."
							type="extension"
						/>
						<MarketplaceCard
							imgPath="zzz"
							name="Logs"
							developer="Developer Name"
							description="Makes logs look nature’s logs, which you haven’t seen lately get off the computer."
							type="extension"
						/>
						<MarketplaceCard
							imgPath="zzz"
							name="TBot"
							developer="Developer Name"
							description="Automate your mundane Local tasks easily with your very own robot."
							type="extension"
						/>
						<MarketplaceCard
							imgPath="zzz"
							name="Quick Admin"
							developer="Developer Name"
							description="Simplify your admin controls with this add-on."
							type="extension"
						/>
						<MarketplaceCard
							imgPath="zzz"
							name="Statz"
							developer="Developer Name"
							description="Get a setailed look at how effective your development is."
							type="extension"
						/>
						<MarketplaceCard
							imgPath="zzz"
							name="Another"
							developer="Developer Name"
							description="Something fancy...trust me :)"
							type="extension"
						/>
					</MarketplaceCardContainer>
				</main>
			</div>
		);
	}

}
