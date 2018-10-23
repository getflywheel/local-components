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
						imgPath="zzz"
						name="X-Debug Control"
						developer="Developer Name"
						description="The add-on consists of a single page UI found under the More > XDebug Control menu."
						type="extension"
						installing={true}
					/>
					<MarketplaceCard
						direction={direction}
						imgPath="zzz"
						name="Chrome Dev Tools"
						developer="Developer Name"
						description="Access the Chrome Developer Tools while Local is open."
						type="extension"
					/>
					<MarketplaceCard
						direction={direction}
						imgPath="zzz"
						name="Logs"
						developer="Developer Name"
						description="Makes logs look nature’s logs, which you haven’t seen lately get off the computer."
						type="extension"
					/>
					<MarketplaceCard
						direction={direction}
						imgPath="zzz"
						name="TBot"
						developer="Developer Name"
						description="Automate your mundane Local tasks easily with your very own robot."
						type="extension"
					/>
					<MarketplaceCard
						direction={direction}
						imgPath="zzz"
						name="Quick Admin"
						developer="Developer Name"
						description="Simplify your admin controls with this add-on."
						type="extension"
					/>
					<MarketplaceCard
						direction={direction}
						imgPath="zzz"
						name="Statz"
						developer="Developer Name"
						description="Get a setailed look at how effective your development is."
						type="extension"
					/>
					<MarketplaceCard
						direction={direction}
						imgPath="zzz"
						name="Another"
						developer="Developer Name"
						description="Something fancy...trust me :)"
						type="extension"
					/>
				</MarketplaceCardContainer>
			</main>
		);
	}

}
