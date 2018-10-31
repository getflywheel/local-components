import React, {Component} from 'react';
import classnames from 'classnames';
import styles from './MarketplaceCardContainer.sass';
import PropTypes from 'prop-types';

export default class MarketplaceCardContainer extends Component {

	static propTypes = {
		direction: PropTypes.oneOf(['vertical', 'horizontal']),
	};

	static defaultProps = {
		direction: 'vertical',
	};

	render() {
		return (
			<div
				className={classnames(
					styles.MarketplaceCardContainer,
					this.props.className,
					{
						[styles.MarketplaceCardContainer__Horizontal]: this.props.direction === 'horizontal',
					}
				)}
			>
				{this.props.children}
			</div>
		);
	}

}
