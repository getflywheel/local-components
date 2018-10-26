import React, {Component} from 'react';
import MarketplaceCardContainer from "../../components/MarketplaceCardContainer";
import MarketplaceCard from "../../components/MarketplaceCard";

export default class MarketplacePageHomeInstalled extends Component {

	render() {
		const direction = 'horizontal';

		return (
			<main>
				<MarketplaceCardContainer direction={direction}>
					{/* todo crum - need to create the 'installing' add-on card ... with outline styles */}
					<MarketplaceCard
						direction={direction}
						installing={true}
						addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
						addonBackgroundColor="#50c6db"
						addonName="X-Debug Control"
						addonDeveloper="Developer Name"
						addonDescription="The add-on consists of a single page UI found under the More > XDebug Control menu."
						addonType="extension"
					/>
					<MarketplaceCard
						direction={direction}
						addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
						addonBackgroundColor="#50c6db"
						addonName="X-Debug Control"
						addonDeveloper="Developer Name"
						addonDescription="The add-on consists of a single page UI found under the More > XDebug Control menu."
						addonType="extension"
					/>
					<MarketplaceCard
						direction={direction}
						addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
						addonBackgroundColor="#50c6db"
						addonName="Chrome Dev Tools"
						addonDeveloper="Developer Name"
						addonDescription="Access the Chrome Developer Tools while Local is open."
						addonType="extension"
					/>
					<MarketplaceCard
						direction={direction}
						addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
						addonBackgroundColor="#50c6db"
						addonName="Logs"
						addonDeveloper="Developer Name"
						addonDescription="Makes logs look nature’s logs, which you haven’t seen lately get off the computer."
						addonType="extension"
					/>
					<MarketplaceCard
						direction={direction}
						addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
						addonBackgroundColor="#50c6db"
						addonName="TBot"
						addonDeveloper="Developer Name"
						addonDescription="Automate your mundane Local tasks easily with your very own robot."
						addonType="extension"
					/>
					<MarketplaceCard
						direction={direction}
						addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
						addonBackgroundColor="#50c6db"
						addonName="Quick Admin"
						addonDeveloper="Developer Name"
						addonDescription="Simplify your admin controls with this add-on."
						addonType="extension"
					/>
					<MarketplaceCard
						direction={direction}
						addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
						addonBackgroundColor="#50c6db"
						addonName="Statz"
						addonDeveloper="Developer Name"
						addonDescription="Get a setailed look at how effective your development is."
						addonType="extension"
					/>
					<MarketplaceCard
						direction={direction}
						addonIconPath="https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png"
						addonBackgroundColor="#50c6db"
						addonName="Another"
						addonDeveloper="Developer Name"
						addonDescription="Something fancy...trust me :)"
						addonType="extension"
					/>
				</MarketplaceCardContainer>
			</main>
		);
	}

}
