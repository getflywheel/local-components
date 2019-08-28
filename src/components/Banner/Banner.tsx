import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Banner.sass';
import WarningSVG from '../../svg/warning';
import CloseSVG from '../../svg/close--small';
import Handler from '../../common/structures/Handler';
import Button from '../Button';

interface IProps extends IReactComponentProps {

	buttonText?: string;
	currentIndex?: number;
	buttonOnClick?: Handler;
	icon?: string | boolean;
	numBanners?: number;
	onDismiss?: Handler;
	onIndexChange?: Handler;
	variant?: 'warning' | 'neutral' | 'success' | 'error';

}

export default class Banner extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		currentIndex: 0,
		icon: 'warning',
		numBanners: 1,
		variant: 'neutral',
	};

	constructor (props: IProps) {
		super(props);
	}

	renderIcon () {
		if (this.props.icon !== 'warning') {
			return null;
		}

		return (
			<WarningSVG />
		);
	}

	renderButton () {
		if (!this.props.buttonText || !this.props.buttonOnClick) {
			return null;
		}

		return (
			<Button
				onClick={this.props.buttonOnClick}
				className={styles.CTA}
			>
				{this.props.buttonText}
			</Button>
		);
	}

	renderCarousel () {
		if (!this.props.numBanners || this.props.numBanners <= 1) {
			return null;
		}

		const items = [];

		for (let index = 0; index < this.props.numBanners; index++) {
			items.push(
				<span
					key={index}
					className={classnames(
						styles.Carousel_Item,
						{
							[styles.Carousel_Item__Active]: index === this.props.currentIndex,
						},
					)}
					onClick={() => this.props.onIndexChange && this.props.onIndexChange(index)}
				/>,
			);
		}

		return (
			<div className={styles.Carousel}>
				{items}
			</div>
		);
	}

	renderDismiss () {
		if (!this.props.onDismiss) {
			return null;
		}

		return (
			<span
				className={styles.Dismiss}
				onClick={this.props.onDismiss}
			>
				<CloseSVG />
			</span>
		);
	}

	render () {
		return (
			<div
				className={classnames(
					styles.Banner,
					{
						[styles.Banner__Neutral]: this.props.variant === 'neutral',
						[styles.Banner__Error]: this.props.variant === 'error',
						[styles.Banner__Success]: this.props.variant === 'success',
					},
				)}
			>
				{this.renderCarousel()}
				{this.renderIcon()}

				<span className={styles.Content}>
					{this.props.children}
				</span>

				<div className={styles.CTA_Container}>
					{this.renderButton()}
					{this.renderDismiss()}
				</div>
			</div>
		);
	}
}
