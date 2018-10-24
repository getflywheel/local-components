import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from  './Card.sass';

export default class Card extends Component {

	static propTypes = {
		content: PropTypes.node,
		contentClassName: PropTypes.string,
		header: PropTypes.node,
		headerBackgroundColor: PropTypes.string,
		headerClassName: PropTypes.string,
		headerIconPath: PropTypes.string,
		headerIconMaxHeight: PropTypes.string,
		tag: PropTypes.string,
	};

	static defaultProps = {
		tag: 'article',
	};

	render () {
		const Tag = this.props.tag;

		return (
			<Tag
				className={classnames(
					styles.Card,
					this.props.className
				)}
			>
				{(this.props.header || this.props.headerIconPath) &&
					<div
						className={classnames(
							styles.Card_Header,
							this.props.headerClassName,
						)}
					>
						{this.props.headerIconPath &&
							<div
								className={classnames(styles.Card_HeaderIconContainer)}
								style={{
									...(this.props.headerBackgroundColor && {backgroundColor: this.props.headerBackgroundColor}), // conditionally add style
								}}
							>
								<img
									className={classnames(styles.Card_HeaderIcon)}
									src={this.props.headerIconPath}
									style={{
										...(this.props.headerIconMaxHeight && {maxHeight: this.props.headerIconMaxHeight}),
									}}
								/>
							</div>
						}

						{this.props.header}
					</div>
				}
				<div
					className={classnames(
						styles.Card_Content,
						this.props.contentClassName,
					)}
				>
					{this.props.content}
					{this.props.children}
				</div>
			</Tag>
		);
	}

}
