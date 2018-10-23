import React, {Component} from 'react';
import classnames from 'classnames';
import styles from './MarketplacePage.sass';

export default class MarketplacePage extends Component {

	render() {
		return (
			<div
				className={classnames(
					styles.MarketplacePage,
					this.props.className,
				)}
			>
				{this.props.children}
			</div>
		);
	}

}
