import React, { useState } from 'react';
import { Button } from '../../buttons/Button/Button';
import TextButtonExternal from '../../buttons/TextButtonExternal/TextButtonExternal';
import Banner from '../Banner/Banner';
import BannerCarousel from './BannerCarousel';

interface IBanner {
	id: string;
	component: any;
}

const bannerFactory = (id: string, onDismiss: () => void) => {
	const variant =
		Math.floor(Math.random() * 100) > 33
			? Math.floor(Math.random() * 100) > 66
				? 'success'
				: 'neutral'
			: 'warning';

	return {
		id,
		component: () => (
			<Banner
				variant={variant}
				buttonText="Celebrate good times"
				onDismiss={onDismiss}
				buttonOnClick={() => console.log('buttonOnClick')}
			>
				<strong>Typewriter!</strong> Poke selvage fam retro pug, offal butcher occupy or{' '}
				<TextButtonExternal>learn more</TextButtonExternal>.
			</Banner>
		),
	};
};

const BannerCarouselExample = () => {
	const [numBanners, setNumBanners] = useState(0);
	const [banners, setBanners] = useState<IBanner[]>([]);

	const dismissBanner = (id: string) => {
		setBanners((oldBanners) => {
			const newBanners = oldBanners.filter((banner) => banner.id !== id);
			setNumBanners(newBanners.length);
			return newBanners;
		});
	};

	const addBanner = () => {
		setBanners((prev) => {
			const id = `banner-${numBanners + 1}`;
			prev.push(bannerFactory(id, () => dismissBanner(id)));
			setNumBanners((old) => old + 1);
			return prev;
		});
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<BannerCarousel>
				{banners.map((banner) => {
					const BannerComponent = banner.component;
					return <BannerComponent key={banner.id} id={banner.id} />;
				})}
			</BannerCarousel>
			<Button style={{ marginTop: '20px' }} onClick={addBanner}>
				Click to add Banner.
			</Button>
		</div>
	);
};

export default BannerCarouselExample;
