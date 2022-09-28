import React, { useState } from 'react';
import { Button } from '../../buttons/Button/Button';
import TextButtonExternal from '../../buttons/TextButtonExternal/TextButtonExternal';
import Banner from '../Banner/Banner';
import BannerCarousel from './BannerCarousel';

interface IBanner {
	id: string;
	component: any;
}

const loremIpsum =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'.split(
		' '
	);

const bannerFactory = (id: string, onDismiss: () => void, numBanners: number) => {
	const variant = ['success', 'neutral', 'warning'][numBanners % 3] as 'success' | 'neutral' | 'warning';
	const text = loremIpsum.slice(0, Math.floor(Math.random() * loremIpsum.length) + 1).join(' ');

	return {
		id,
		component: () => (
			<Banner
				variant={variant}
				buttonText="Celebrate good times"
				onDismiss={onDismiss}
				buttonOnClick={() => console.log('buttonOnClick')}
			>
				<strong>Banner!</strong> {text} <TextButtonExternal>learn more</TextButtonExternal>.
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
			prev.push(bannerFactory(id, () => dismissBanner(id), numBanners));
			setNumBanners((old) => old + 1);
			return prev;
		});
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<BannerCarousel id="interactive">
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
