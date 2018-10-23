import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './MarketplaceCard.sass';
import Header from '../../components/Header/Header';
import Switch from "../../components/Switch/Switch";

export default class MarketplaceCard extends Component {

	static propTypes = {
		description: PropTypes.string.isRequired,
		developer: PropTypes.string.isRequired,
		direction: PropTypes.oneOf(['vertical', 'horizontal']),
		imgPath: PropTypes.string.isRequired,
		installing: PropTypes.bool,
		name: PropTypes.string.isRequired,
		type: PropTypes.oneOf(['extension']),
	};

	static defaultProps = {
		direction: 'vertical',
		installing: false,
	};

	getTypeName = (param) => {
		switch (param) {
			case 'extension':
				return 'EXTENSION';
			default:
				return 'ADD-ON';
		}
	}

	render() {
		return (
			<article
				className={classnames(
					styles.MarketplaceCard,
					this.props.className,
					{
						[styles.MarketplaceCard__Horizontal]: this.props.direction === 'horizontal',
						[styles.MarketplaceCard__IsInstalling]: this.props.installing === true,
					}
				)}
			>
				{/* todo crum - determine whether it's a full image to cover or a centered icon */}
				<div className={styles.MarketplaceCard_Image} />
				<div className={styles.MarketplaceCard_Content}>
					<Header
						tag="h1"
						size="s"
						className={styles.MarketplaceCard_Name}
					>
						{/*todo - crum: truncate */}
						{this.props.name}
					</Header>
					<div className={styles.MarketplaceCard_Developer}>
						{/*todo - crum: truncate */}
						by {this.props.developer}
					</div>
					<div className={styles.MarketplaceCard_Description}>
						{/*todo - crum: truncate */}
						{this.props.description}
					</div>
					<div className={styles.MarketplaceCard_Footer}>
						<span>{this.getTypeName(this.props.type)}</span>
					</div>
				</div>
				<div className={styles.MarketplaceCard_CTA}>
					<Switch onChange={() => console.log('onChange')}/>
					{/* todo crum - make into component & figure out what all it does and consists of */}
					<div>•••</div>
				</div>
			</article>
		);
	}

}
