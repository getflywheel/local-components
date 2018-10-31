import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './MarketplacePage.sass';
import PropTypes from 'prop-types';

export default class MarketplacePage extends Component {

	static propTypes = {
		containerClassName: PropTypes.string,
		onScroll: PropTypes.func,
		scrollerClassName: PropTypes.string,
	};

	static defaultProps = {};

	render() {
		return (
			<div
				className={classnames(
					styles.MarketplacePage_Container,
					this.props.containerClassName,
				)}
			>
				<div
					className={classnames(
						styles.MarketplacePage_Scroller,
						this.props.scrollerClassName,
					)}
					onScroll={this.props.onScroll}
				>
					<div
						className={classnames(
							styles.MarketplacePage,
							this.props.className,
						)}
					>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}

}
