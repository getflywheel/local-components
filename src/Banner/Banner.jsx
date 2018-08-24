import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WarningSVG from '../../svg/warning.svg';
import CloseSVG from '../../svg/close--small.svg';

export default class Banner extends Component {
	static propTypes = {
		variant: PropTypes.oneOf([
			'warning',
			'neutral',
			'success',
			'error',
		]),
		icon: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.bool,
		]),
		buttonText: PropTypes.string,
		buttonOnClick: PropTypes.func,
		onIndexChange: PropTypes.func,
		numBanners: PropTypes.number,
		currentIndex: PropTypes.number,
		onDismiss: PropTypes.func,
	};

	static defaultProps = {
		variant: 'neutral',
		icon: 'warning',
		numBanners: 1,
		currentIndex: 0,
		onDismiss: null,
	};

	constructor (props) {
		super(props);
	}

	renderIcon () {
		if (this.props.icon !== 'warning') {
			return null;
		}

		return <WarningSVG/>;
	}

	renderButton () {
		if (!this.props.buttonText || !this.props.buttonOnClick) {
			return null;
		}

		return <button onClick={this.props.buttonOnClick} className="CTA">{this.props.buttonText}</button>;
	}

	renderCarousel () {
		if (this.props.numBanners <= 1) {
			return null;
		}

		const items = [];

		for (let index = 0; index < this.props.numBanners; index++) {
			items.push(<span key={index} className={classnames('CarouselItem', { '--Active': index === this.props.currentIndex })}
			                 onClick={() => this.props.onIndexChange(index)}/>);
		}

		return <div className="Carousel">
			{items}
		</div>;

	}

	renderDismiss () {
		if (!this.props.onDismiss) {
			return null;
		}

		return <span className="Dismiss" onClick={this.props.onDismiss}>
			<CloseSVG />
		</span>;
	}

	render () {
		return <div className={classnames('Banner', {
			'--Neutral': this.props.variant === 'neutral',
			'--Error': this.props.variant === 'error',
			'--Warning': this.props.variant === 'warning',
			'--Success': this.props.variant === 'success',
		})}>
			{this.renderCarousel()}
			{this.renderIcon()}

			<span className="BannerContents">{this.props.children}</span>

			<div className="Banner__Right">
				{this.renderButton()}
				{this.renderDismiss()}
			</div>
		</div>;
	}
}
