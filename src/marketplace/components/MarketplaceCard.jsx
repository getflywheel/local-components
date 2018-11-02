import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './MarketplaceCard.sass';
import Switch from '../../components/Switch/Switch';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import FlyDropdown from '../../components/FlyDropdown/FlyDropdown';
import HeartSVG from '../../svg/heart.svg';

export default class MarketplaceCard extends Component {

	static propTypes = {
		addonBackgroundColor: PropTypes.string,
		addonDescription: PropTypes.string.isRequired,
		addonDeveloper: PropTypes.string.isRequired,
		addonIconPath: PropTypes.string,
		addonType: PropTypes.oneOf(['extension']),
		addonName: PropTypes.string.isRequired,
		direction: PropTypes.oneOf(['vertical', 'horizontal']),
		installing: PropTypes.bool,
		onClick: PropTypes.func,
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
	};

	renderFooter() {
		return (
			<Fragment>
				{this.props.direction === 'vertical'
					?
					<Fragment>
						<span>{this.getTypeName(this.props.addonType)}</span>
						<span className={styles.MarketplaceCard_Footer_LikesContainer}>
							<span>
								15
							</span>
							<span>
								<HeartSVG className={styles.MarketplaceCard_Footer_LikesIcon} />
							</span>
						</span>
					</Fragment>
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
							{/* todo crum - what are its options */}
							<FlyDropdown
								className={styles.MarketplaceCard_Footer_Dropdown}
								position="top"
								caret={false}
								items={[
									{
										label: 'Option 1',
										onClick: () => console.log('onClick'),
									},
									{
										label: 'Option 2',
										onClick: () => console.log('onClick'),
									},
									{
										label: 'Option 3 (Red)',
										onClick: () => console.log('onClick'),
										color: 'red',
									},
								]}
							>
								•••
							</FlyDropdown>
						</Fragment>
				}
			</Fragment>
		)
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
				overflow={this.props.direction === 'horizontal' ? 'visible' : undefined} // if horizontal, allow dropdown contents to flow outside of the bounds
				headerIconPath={!this.props.installing && this.props.addonIconPath} // render if not installing
				headerIconMaxHeight="60px"
				headerBackgroundColor={this.props.addonBackgroundColor}
				headerClassName={styles.MarketplaceCard_Header}
				headerOnClick={this.props.onClick}
				contentClassName={styles.MarketplaceCard_Content}
				contentTitle={this.props.addonName}
				contentTitleOnClick={this.props.onClick}
				contentSub={!this.props.installing && `by ${this.props.addonDeveloper}`} // render if not installing
				contentSubClassName={styles.MarketplaceCard_Developer}
				contentDescription={this.props.direction === 'vertical' && !this.props.installing && this.props.addonDescription} // render if vertical and not installing
				contentDescriptionTruncate={true}
				contentDescriptionTruncateLines={4}
				footer={this.renderFooter()}
				footerClassName={styles.MarketplaceCard_Footer}
			/>
		);
	}

}
