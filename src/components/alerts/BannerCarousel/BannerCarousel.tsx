import classnames from 'classnames';
import React, { Children, useEffect, useLayoutEffect, useRef, useState } from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import styles from './BannerCarousel.scss';

type Direction = 'up' | 'down';
type ChildrenArray = ReturnType<typeof Children['toArray']>;

const BannerCarousel = (props: IReactComponentProps) => {
	const { children, className, id, style } = props;

	// Dummy banner ref used to set height
	const bannerRef = useRef<HTMLDivElement>(null);

	// State
	const [childrenArray, setChildrenArray] = useState(Children.toArray(children));
	const [numBanners, setNumBanners] = useState(childrenArray.length);
	const [currentIndex, setCurrentIndex] = useState(childrenArray.length ? 0 : -1);
	const [currentBanner, setCurrentBanner] = useState<React.ReactNode>(null);
	const [nextBanner, setNextBanner] = useState<React.ReactNode>(null);
	const [switching, setSwitching] = useState(false);
	const [switchDirection, setSwitchDirection] = useState<Direction>('up');
	const [carouselHeight, setCarouselHeight] = useState(0);
	const [gettingHeight, setGettingHeight] = useState(false);
	const [, setActiveTimeout] = useState<NodeJS.Timeout>(0 as unknown as NodeJS.Timeout);

	// Need to safely set these banners in state with unique keys to prevent React errors
	const safeSetNextBanner = (banner: React.ReactNode) => {
		if (React.isValidElement(banner)) {
			setNextBanner(React.cloneElement(banner, { key: 'next-banner' }));
		} else {
			setNextBanner(null);
		}
	};

	const safeSetCurrentBanner = (banner: React.ReactNode) => {
		if (React.isValidElement(banner)) {
			setCurrentBanner(React.cloneElement(banner, { key: 'current-banner' }));
		} else {
			setCurrentBanner(null);
		}
	};

	// Set up inital banners and height
	useEffect(() => {
		safeSetCurrentBanner(childrenArray[0]);
		safeSetNextBanner(childrenArray[0]);
		setGettingHeight(true);
	}, []);

	// useLayoutEffect to grab height of dummy banner BEFORE the browser paints
	// allows us to set the height without visual glitches
	useLayoutEffect(() => {
		if (gettingHeight) {
			// Carousel button height will equal 13px per unselected banner, plus 20px for selected, plus 20px padding
			const buttonsHeight = numBanners > 1 ? (numBanners - 1) * 13 + 20 + 20 : 0;
			const bannerHeight =
				bannerRef.current!.scrollHeight + (bannerRef.current!.scrollHeight - bannerRef.current!.clientHeight);
			setCarouselHeight(Math.max(buttonsHeight, bannerHeight));
			setGettingHeight(false);
		}
	}, [gettingHeight]);

	// Functions for handling children changing/banner switching
	// Leaving this pretty verbose to add clarity to the code

	/**
	 * Function for setting and clearing the transition timeouts
	 * Making the decision to just skip to the next banner if another transition is still happening
	 */
	const updateCurrentBanner = (banner: React.ReactNode) => {
		setActiveTimeout((prev) => {
			clearTimeout(prev);

			return setTimeout(
				() => {
					safeSetCurrentBanner(banner);
					setSwitching(false);
					setActiveTimeout(0 as unknown as NodeJS.Timeout);
				},
				prev ? 0 : 350
			);
		});
	};

	const addFirstBanner = (newChildrenArray: ChildrenArray) => {
		safeSetCurrentBanner(newChildrenArray[0]);
		safeSetNextBanner(newChildrenArray[0]);
		setCurrentIndex(0);
		setNumBanners(1);
		setChildrenArray(newChildrenArray);
		setGettingHeight(true);
	};

	const addBanner = (newChildrenArray: ChildrenArray, newNum: number) => {
		const newIndex = newNum - 1;
		const next = newChildrenArray[newIndex];

		setSwitching(false);
		setCurrentIndex(newIndex);
		setNumBanners(newNum);
		setChildrenArray(newChildrenArray);
		safeSetNextBanner(next);
		setSwitchDirection('up');
		setSwitching(true);
		setGettingHeight(true);

		updateCurrentBanner(next);
	};

	const dismissBanner = (newChildrenArray: ChildrenArray, newNum: number) => {
		const newIndex = (currentIndex + numBanners - 1) % numBanners;
		const next = newChildrenArray[newIndex];

		setSwitching(false);
		setSwitchDirection('down');
		setCurrentIndex(newIndex);
		setNumBanners(newNum);
		setChildrenArray(newChildrenArray);
		safeSetNextBanner(next);
		setSwitching(true);
		setGettingHeight(true);

		updateCurrentBanner(next);
	};

	const dismissBannerFromFirst = (newChildrenArray: ChildrenArray, newNum: number) => {
		const newIndex = 0;
		const next = newChildrenArray[newIndex];

		setSwitching(false);
		setSwitchDirection('down');
		setCurrentIndex(newIndex);
		setNumBanners(newNum);
		setChildrenArray(newChildrenArray);
		safeSetNextBanner(next);
		setSwitching(true);
		setGettingHeight(true);

		updateCurrentBanner(next);
	};

	const dismissLastBanner = () => {
		const next = null;

		setSwitching(false);
		setChildrenArray([]);
		setGettingHeight(true);
		safeSetNextBanner(next);
		setNumBanners(0);
		setGettingHeight(true);

		updateCurrentBanner(next);
	};

	const switchToIndex = (newIndex: number) => {
		setSwitching(false);

		const next = childrenArray[newIndex];

		setSwitchDirection(newIndex > currentIndex ? 'up' : 'down');
		setCurrentIndex(newIndex);
		safeSetNextBanner(next);
		setSwitching(true);
		setGettingHeight(true);

		updateCurrentBanner(next);
	};

	// Handle banners being added/removed, call above functions
	useEffect(() => {
		const newChildrenArray = Children.toArray(children);
		const newNum = newChildrenArray.length;

		const isAddingFirstBanner = newNum === 1 && numBanners === 0;
		const isAddingBanner = newNum > numBanners;
		const isDismissingBanner = newNum < numBanners && currentIndex !== 0;
		const isDismissingBannerFromFirst = newNum < numBanners && currentIndex === 0 && newNum !== 0;
		const isDismissingLastBanner = newNum === 0 && numBanners === 1;

		// First banner skip slide in
		if (isAddingFirstBanner) {
			addFirstBanner(newChildrenArray);
		} else if (isAddingBanner) {
			addBanner(newChildrenArray, newNum);
		} else if (isDismissingBanner) {
			dismissBanner(newChildrenArray, newNum);
		} else if (isDismissingBannerFromFirst) {
			dismissBannerFromFirst(newChildrenArray, newNum);
		} else if (isDismissingLastBanner) {
			dismissLastBanner();
		}
	}, [children]);

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
						{childrenArray.map((_child, i) => {
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
