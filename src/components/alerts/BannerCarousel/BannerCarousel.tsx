import classnames from 'classnames';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import styles from './BannerCarousel.scss';

type Direction = 'up' | 'down';
interface IBanner {
	id: string;
	component: React.ReactNode | (() => JSX.Element);
}

export interface BannerCarouselProps extends IReactComponentProps {
	banners?: IBanner[];
}

const BannerCarousel = (props: BannerCarouselProps) => {
	const { banners = [], className, id, style } = props;
	const bannerIds = banners.map((banner) => banner.id);

	// Dummy banner ref used to set height
	const bannerRef = useRef<HTMLDivElement>(null);

	// Timeout ref to store any active timeout
	const activeTimeout = useRef(0 as unknown as NodeJS.Timeout);

	// State
	const [bannerArray, setBannerArray] = useState(banners);
	const [numBanners, setNumBanners] = useState(banners.length);
	const [currentIndex, setCurrentIndex] = useState(banners.length ? 0 : -1);
	const [currentBanner, setCurrentBanner] = useState<React.ReactNode>(null);
	const [nextBanner, setNextBanner] = useState<React.ReactNode>(null);
	const [switching, setSwitching] = useState(false);
	const [switchDirection, setSwitchDirection] = useState<Direction>('up');
	const [carouselHeight, setCarouselHeight] = useState(0);
	const [gettingHeight, setGettingHeight] = useState(false);

	// Need to safely set these banners in state with unique keys to prevent React errors
	// This also allows for functions or just raw JSX to be passed in the banners array prop
	const safeSetNextBanner = (banner: React.ReactNode) => {
		const bannerEl = typeof banner === 'function' ? banner() : banner;
		if (React.isValidElement(bannerEl)) {
			setNextBanner(React.cloneElement(bannerEl, { key: 'next-banner' }));
		} else {
			setNextBanner(null);
		}
	};

	const safeSetCurrentBanner = (banner: React.ReactNode) => {
		const bannerEl = typeof banner === 'function' ? banner() : banner;
		if (React.isValidElement(bannerEl)) {
			setCurrentBanner(React.cloneElement(bannerEl, { key: 'current-banner' }));
		} else {
			setCurrentBanner(null);
		}
	};

	// useLayoutEffect to grab height of dummy banner BEFORE the browser paints
	// allows us to set the height without visual glitches
	useLayoutEffect(() => {
		if (gettingHeight) {
			// Carousel button height will equal 13px per unselected banner, plus 20px for selected, plus 20px padding
			const buttonsHeight = numBanners > 1 ? (numBanners - 1) * 13 + 20 + 20 : 0;
			const bannerHeight =
				bannerRef.current!.scrollHeight + (bannerRef.current!.scrollHeight - bannerRef.current!.clientHeight);
			setCarouselHeight(Math.max(buttonsHeight, bannerHeight));
			setTimeout(() => setGettingHeight(false), 0);
		}
	}, [gettingHeight]);

	const resetHeight = () => {
		// Setting the state in a timeout ensures the updates are seen by the useEffect
		// We NEED to watch a state variable in order to leverage useLayoutEffect successfully
		setTimeout(() => setGettingHeight(false), 0);
		setTimeout(() => setGettingHeight(true), 0);
	};

	// Set up inital banners and height
	useEffect(() => {
		safeSetCurrentBanner(bannerArray[0]?.component);
		safeSetNextBanner(bannerArray[0]?.component);
		resetHeight();

		return () => clearTimeout(activeTimeout.current);
	}, []);

	// Functions for handling children changing/banner switching
	// Leaving these pretty verbose to add clarity to the code

	/**
	 * Function for setting and clearing the transition timeouts
	 * Making the decision to just skip to the next banner if another transition is still happening
	 */
	const updateCurrentBanner = (banner: React.ReactNode) => {
		clearTimeout(activeTimeout.current);
		activeTimeout.current = setTimeout(
			() => {
				safeSetCurrentBanner(banner);
				setSwitching(false);
				activeTimeout.current = 0 as unknown as NodeJS.Timeout;
			},
			activeTimeout.current ? 0 : 350
		);
	};

	const addFirstBanner = (newBanners: IBanner[]) => {
		clearTimeout(activeTimeout.current);

		safeSetCurrentBanner(newBanners[0].component);
		safeSetNextBanner(newBanners[0].component);
		setCurrentIndex(0);
		setNumBanners(1);
		setBannerArray(newBanners);
		resetHeight();
	};

	const addBanner = (newBanners: IBanner[], newNum: number) => {
		const newIndex = newNum - 1;
		const next = newBanners[newIndex].component;

		setSwitching(false);
		setCurrentIndex(newIndex);
		setNumBanners(newNum);
		setBannerArray(newBanners);
		safeSetNextBanner(next);
		setSwitchDirection('up');
		setSwitching(true);
		resetHeight();

		updateCurrentBanner(next);
	};

	const dismissBanner = (newBanners: IBanner[], newNum: number) => {
		const newIndex = (currentIndex + numBanners - 1) % numBanners;
		const next = newBanners[newIndex].component;

		setSwitching(false);
		setSwitchDirection('down');
		setCurrentIndex(newIndex);
		setNumBanners(newNum);
		setBannerArray(newBanners);
		safeSetNextBanner(next);
		setSwitching(true);
		resetHeight();

		updateCurrentBanner(next);
	};

	const dismissBannerFromFirst = (newBanners: IBanner[], newNum: number) => {
		const newIndex = 0;
		const next = newBanners[newIndex].component;

		setSwitching(false);
		setSwitchDirection('down');
		setCurrentIndex(newIndex);
		setNumBanners(newNum);
		setBannerArray(newBanners);
		safeSetNextBanner(next);
		setSwitching(true);
		resetHeight();

		updateCurrentBanner(next);
	};

	const dismissLastBanner = () => {
		const next = null;

		setSwitching(false);
		setBannerArray([]);
		safeSetNextBanner(next);
		setNumBanners(0);
		setCarouselHeight(0);

		updateCurrentBanner(next);
	};

	const updateBannerArray = (newBanners: IBanner[]) => {
		const next = newBanners[currentIndex]?.component;

		setBannerArray(newBanners);
		safeSetNextBanner(next);
		resetHeight();

		updateCurrentBanner(next);
	};

	const switchToIndex = (newIndex: number) => {
		setSwitching(false);

		const next = bannerArray[newIndex].component;

		setSwitchDirection(newIndex > currentIndex ? 'up' : 'down');
		setCurrentIndex(newIndex);
		safeSetNextBanner(next);
		setSwitching(true);
		resetHeight();

		updateCurrentBanner(next);
	};

	// Handle banners being added/removed, call above functions
	//
	// Possible future improvement for finer control: instead of "children", pass in banners as an array of
	// IBanner objects ({id: string, component: React.ReactNode}) and watch for added/removed ID's.
	// Then we could replace updateChildrenArray - good for when banners change but the number of banners doesn't
	useEffect(() => {
		const newNum = banners.length;

		const isAddingFirstBanner = newNum === 1 && numBanners === 0;
		const isAddingBanner = newNum > numBanners;
		const isDismissingBanner = newNum < numBanners && currentIndex !== 0;
		const isDismissingBannerFromFirst = newNum < numBanners && currentIndex === 0 && newNum !== 0;
		const isDismissingLastBanner = newNum === 0 && numBanners !== 0;

		if (isAddingFirstBanner) {
			addFirstBanner(banners);
		} else if (isAddingBanner) {
			addBanner(banners, newNum);
		} else if (isDismissingLastBanner) {
			dismissLastBanner();
		} else if (isDismissingBannerFromFirst) {
			dismissBannerFromFirst(banners, newNum);
		} else if (isDismissingBanner) {
			dismissBanner(banners, newNum);
		} else {
			// Banners have maybe changed, though number of banners hasn't
			updateBannerArray(banners);
		}
	}, [bannerIds.toString()]);

	// Strategy for setting height dynamically - this is spread on top level of component
	const expandedHeight = {
		'--expanded-height': `${carouselHeight}px`,
	} as React.CSSProperties;

	return (
		<div id={id} style={{ ...style, ...expandedHeight }} className={classnames(styles.Carousel_Wrapper, className)}>
			<div
				className={classnames(styles.Carousel, {
					[styles.Carousel_Hidden]: numBanners <= 1,
				})}
				{...(numBanners > 1 ? { role: 'group', 'aria-labelledby': 'carousel-label' } : {})}
			>
				{numBanners > 1 && (
					<>
						<span id="carousel-label" className={styles.SRO}>
							Banner carousel controls
						</span>
						{bannerArray.map((_b, i) => {
							const key = `bannerCarousel-${id}-${i}`;
							const checked = i === currentIndex;

							return (
								<React.Fragment key={key}>
									<input
										onChange={(e) => {
											switchToIndex(parseInt(e.target.value, 10));
										}}
										// onMouseDown
										checked={checked}
										type="radio"
										id={key}
										value={i}
										className={classnames(styles.SRO, styles.Carousel_Radio)}
									/>
									<label htmlFor={key}>
										<span className={styles.SRO}>Show banner ${i + 1}</span>
										{checked && i + 1}
									</label>
								</React.Fragment>
							);
						})}
					</>
				)}
			</div>

			<div className={classnames(styles.Banner_Wrapper)}>
				<div
					className={classnames(styles.Banner_Container, {
						[styles.Banner_Container_Down]: switchDirection === 'down',
						[styles.Banner_Container_Sliding]: switching,
						[styles.Banner_Container_SlidingDown]: switching && switchDirection === 'down',
						[styles.Banner_Container_SlidingUp]: switching && switchDirection === 'up',
					})}
				>
					{gettingHeight && (
						<div ref={bannerRef} className={styles.DummyBanner}>
							{nextBanner}
						</div>
					)}
					{switching && switchDirection === 'down' && (
						<div className={styles.Banner_Banner}>{nextBanner}</div>
					)}
					<div className={styles.Banner_Banner}>{currentBanner}</div>
					{switching && switchDirection === 'up' && <div className={styles.Banner_Banner}>{nextBanner}</div>}
				</div>
			</div>
		</div>
	);
};

export default BannerCarousel;
