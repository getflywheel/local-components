import classnames from 'classnames';
import React, { Children, useEffect, useRef, useState } from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import styles from './BannerCarousel.scss';

const BannerCarousel = (props: IReactComponentProps) => {
	const { children, className, id, style } = props;

	// State - store children in state to smoothly transition when banners are dismissed/added
	const [childrenArray, setChildrenArray] = useState(Children.toArray(children));
	const [currentIndex, setCurrentIndex] = useState(childrenArray.length ? 0 : -1);
	const [numBanners, setNumBanners] = useState(childrenArray.length);

	// Expansion state
	const containerEl = useRef<HTMLDivElement>(null);
	const getExpandedHeight = () =>
		!containerEl.current
			? 0
			: containerEl.current.scrollHeight + (containerEl.current.scrollHeight - containerEl.current.clientHeight);
	const [carouselHeight, setCarouselHeight] = useState<number | undefined>(getExpandedHeight());

	const incrementCurrentIndex = () => setCurrentIndex((currentIndex + 1) % numBanners);

	const decrementCurrentIndex = () => setCurrentIndex((currentIndex + numBanners - 1) % numBanners);

	// Handle banners being added/removed
	useEffect(() => {
		const newChildrenArray = Children.toArray(children);

		setNumBanners((prev) => {
			const newNum = newChildrenArray.length;
			if (newNum < prev && currentIndex !== 0) {
				// Show banner before dismissed banner
				decrementCurrentIndex();
			} else if (newNum > prev) {
				// Show last banner when a new one is added
				setCurrentIndex(newNum - 1);
			}
			return newNum;
		});

		if (newChildrenArray.length === 0 && childrenArray.length) {
			setCarouselHeight(0);
			setTimeout(() => {
				setChildrenArray(newChildrenArray);
				setCurrentIndex(-1);
			}, 350);
		} else {
			setChildrenArray(newChildrenArray);
		}
	}, [children]);

	// Reset max height when banner switches
	useEffect(() => {
		setCarouselHeight(getExpandedHeight());
	}, [currentIndex]);

	const expandedHeight = {
		'--expanded-height': `${carouselHeight || 0}px`,
	} as React.CSSProperties;

	return (
		<div id={id} style={{ ...style, ...expandedHeight }} className={classnames(styles.Banner_Wrapper, className)}>
			<div ref={containerEl} className={styles.Banner_Container}>
				{numBanners > 1 && (
					<div role="group" aria-labelledby="carousel-label" className={styles.Carousel}>
						<span id="carousel-label" className={styles.SRO}>
							Banner carousel controls
						</span>
						{childrenArray.map((_child, i) => {
							const key = `bannerCarousel-${id}-${i}`;
							const checked = i === currentIndex;

							return (
								<React.Fragment key={key}>
									<input
										onChange={(e) => setCurrentIndex(parseInt(e.target.value, 10))}
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
					</div>
				)}
				{Children.map(childrenArray, (banner, index) => {
					return currentIndex === index ? banner : null;
				})}
			</div>
		</div>
	);
};

export default BannerCarousel;
