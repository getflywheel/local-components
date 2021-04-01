import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Banner.sass';
import WarningSVG from '../../../svg/warning.svg';
import CloseSVG from '../../../svg/close--small.svg';
import { ButtonPropColor, ButtonPropForm } from '../../buttons/_private/ButtonBase/ButtonBase';
import { TextButton, TextButtonPropSize } from '../../buttons/TextButton/TextButton';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface BannerProps extends IReactComponentProps {
	buttonText?: string;
	currentIndex?: number;
	buttonOnClick?: FunctionGeneric;
	icon?: string | boolean;
	numBanners?: number;
	onDismiss?: FunctionGeneric;
	onIndexChange?: FunctionGeneric;
	variant?: 'warning' | 'neutral' | 'success' | 'error';
}

export default class Banner extends React.Component<BannerProps> {
	static defaultProps: Partial<BannerProps> = {
		currentIndex: 0,
		icon: 'warning',
		numBanners: 1,
		variant: 'neutral',
	};

	constructor (props: BannerProps) {
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

		let buttonColor: ButtonPropColor = ButtonPropColor.gray;

		switch (this.props.variant) {
			case 'error':
				buttonColor = ButtonPropColor.red;
				break;
			case 'neutral':
				buttonColor = ButtonPropColor.green;
				break;
			case 'success':
				buttonColor = ButtonPropColor.green;
				break;
			case 'warning':
				buttonColor = ButtonPropColor.orange;
				break;
		}

		return (
			// note: use `TextButton` and `tiny` size as this button type and style should always be the same as that preset
			<TextButton
				size={TextButtonPropSize.tiny}
				privateOptions={{
					color: buttonColor,
					form: this.props.variant === 'neutral' ? ButtonPropForm.fill : ButtonPropForm.reversed
				}}
				onClick={this.props.buttonOnClick}
				className={styles.CTA}
			>
				{this.props.buttonText}
			</TextButton>
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
					this.props.className,
				)}
				id={this.props.id}
				style={this.props.style}
			>
				{this.renderCarousel()}
				{this.renderIcon() &&
					<div className={styles.renderIcon}>
						{this.renderIcon()}
					</div>
				}
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
