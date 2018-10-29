import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './MarketplaceCard.sass';
import Switch from '../../components/Switch/Switch';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import FlyDropdown from '../../components/FlyDropdown/FlyDropdown';

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
	};

	renderFooter() {
		return (
			<Fragment>
				{this.props.direction === 'vertical'
					?
					<div>
						<span>{this.getTypeName(this.props.addonType)}</span>
					</div>
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
				contentClassName={styles.MarketplaceCard_Content}
				contentTitle={this.props.addonName}
				contentTitleClassName={styles.MarketplaceCard_Name}
				contentTitleTruncate={true}
				contentSub={!this.props.installing && `by ${this.props.addonDeveloper}`} // render if not installing
				contentSubClassName={styles.MarketplaceCard_Developer}
				contentSubTruncate={true}
				contentDescription={this.props.direction === 'vertical' && !this.props.installing && this.props.addonDescription} // render if vertical and not installing
				contentDescriptionTruncate={true}
				contentDescriptionTruncateLines={3}
				footer={this.renderFooter()}
				footerClassName={styles.MarketplaceCard_Footer}
			/>
		);
	}

}
