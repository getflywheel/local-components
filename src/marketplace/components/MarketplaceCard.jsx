import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './MarketplaceCard.sass';
import Header from '../../components/Header/Header';
import Switch from "../../components/Switch/Switch";
import Card from "../../components/Card/Card";
import {Spinner} from "../../index";

export default class MarketplaceCard extends Component {

	static propTypes = {
		addonDescription: PropTypes.string.isRequired,
		addonDeveloper: PropTypes.string.isRequired,
		direction: PropTypes.oneOf(['vertical', 'horizontal']),
		addonBackgroundColor: PropTypes.string,
		addonIconPath: PropTypes.string,
		installing: PropTypes.bool,
		addonName: PropTypes.string.isRequired,
		addonType: PropTypes.oneOf(['extension']),
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
			<Card
				className={classnames(
					styles.MarketplaceCard,
					{
						[styles.MarketplaceCard__Horizontal]: this.props.direction === 'horizontal',
						[styles.MarketplaceCard__IsInstalling]: this.props.installing === true,
					}
				)}
				headerIconPath={!this.props.installing && this.props.addonIconPath} // render if not installing
				headerIconMaxHeight="60px"
				headerBackgroundColor={this.props.addonBackgroundColor}
				headerClassName={styles.MarketplaceCard_Header}
				contentClassName={styles.MarketplaceCard_Content}
				contentTitle={this.props.addonName}
				contentTitleClassName={styles.MarketplaceCard_Name}
				contentTitleTruncate={true}
				contentSub={!this.props.installing && `by ${this.props.addonDeveloper}`} // render if not installing
				contentSubClassName={styles.MarketplaceCard_Developer}
				contentSubTruncate={true}
				contentDescription={this.props.direction === 'vertical' && !this.props.installing && this.props.addonDescription} // render if vertical and not installing
				contentDescriptionTruncate={true}
				contentDescriptionTruncateLines={2}
				footer={
					<Fragment>
						{this.props.direction === 'vertical'
							?
							<span>{this.getTypeName(this.props.addonType)}</span>
							:
							this.props.installing
								?
								<span className={styles.MarketplaceCard_Footer_Installing}>
									Installing...
									<Spinner/>
								</span>
								:
								<Fragment>
									<Switch onChange={() => console.log('onChange')}/>
									{/* todo crum - make into component & figure out what all it does and consists of */}
									<div>•••</div>
								</Fragment>
						}
					</Fragment>
				}
				footerClassName={styles.MarketplaceCard_Footer}
			/>
		);
	}

}
