import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from  './Card.sass';
import Header from "../Header/Header";
import Truncate from "../Truncate/Truncate";

export default class Card extends Component {

	static propTypes = {
		content: PropTypes.node,
		contentClassName: PropTypes.string,
		contentDescription: PropTypes.node,
		contentDescriptionClassName: PropTypes.string,
		contentDescriptionTruncate: PropTypes.bool,
		contentDescriptionTruncateLines: PropTypes.number,
		contentDescriptionTruncateEllipsis: PropTypes.node,
		contentSub: PropTypes.node,
		contentSubClassName: PropTypes.string,
		contentSubTruncate: PropTypes.bool,
		contentSubTruncateLines: PropTypes.number,
		contentSubTruncateEllipsis: PropTypes.node,
		contentTitle: PropTypes.node,
		contentTitleClassName: PropTypes.string,
		contentTitleTruncate: PropTypes.bool,
		contentTitleTruncateLines: PropTypes.number,
		contentTitleTruncateEllipsis: PropTypes.node,
		footer: PropTypes.node,
		footerClassName: PropTypes.node,
		header: PropTypes.node,
		headerBackgroundColor: PropTypes.string,
		headerClassName: PropTypes.string,
		headerIconPath: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		headerIconMaxHeight: PropTypes.string,
		tag: PropTypes.string,
		truncateDefaultLines: PropTypes.number,
		truncateDefaultEllipsis: PropTypes.string,
	};

	static defaultProps = {
		tag: 'article',
		truncateDefaultLines: 1,
		truncateDefaultEllipsis: '...',
	};

	renderIfHeader () {
		if (!this.props.header && !this.props.headerIconPath) {
			return;
		}

		return (
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
						src={this.props.headerIconPath}
						style={{
							...(this.props.headerIconMaxHeight && {maxHeight: this.props.headerIconMaxHeight}),
						}}
					/>
				</div>
				}

				{this.props.header}
			</div>
		)
	}

	renderIfContent () {
		if (!this.props.content && !this.props.children && !this.props.contentTitle && !this.props.contentSub && !this.props.contentDescription) {
			return;
		}

		return (
			<div
				className={classnames(
					styles.Card_Content,
					this.props.contentClassName,
				)}
			>
				{this.props.contentTitle && (
					<Header
						tag="h1"
						size="s"
						className={classnames(
							styles.Card_Content_Title,
							this.props.contentTitleClassName,
						)}
					>
						{this.props.contentTitleTruncate
							?
							// this adds a bunch of nested spans, so only use if this feature is enabled
							<Truncate
								lines={this.props.contentTitleTruncateLines || this.props.truncateDefaultLines}
								ellipsis={this.props.contentTitleTruncateEllipsis || this.props.truncateDefaultEllipsis}
							>
								{this.props.contentTitle}
							</Truncate>
							:
							this.props.contentTitle
						}
					</Header>
				)}
				{this.props.contentSub && (
					<div
						className={classnames(
							styles.Card_Content_Sub,
							this.props.contentSubClassName,
						)}
					>
						{this.props.contentSubTruncate
							?
							// this adds a bunch of nested spans, so only use if this feature is enabled
							<Truncate
								lines={this.props.contentSubTruncateLines || this.props.truncateDefaultLines}
								ellipsis={this.props.contentSubTruncateEllipsis || this.props.truncateDefaultEllipsis}
							>
								{this.props.contentSub}
							</Truncate>
							:
							this.props.contentSub
						}
					</div>
				)}
				{this.props.contentDescription && (
					<div
						className={classnames(
							styles.Card_Content_Description,
							this.props.contentDescriptionClassName,
						)}
					>
						{this.props.contentDescriptionTruncate
							?
							// this adds a bunch of nested spans, so only use if this feature is enabled
							<Truncate
								lines={this.props.contentDescriptionTruncateLines || this.props.truncateDefaultLines}
								ellipsis={this.props.contentDescriptionTruncateEllipsis || this.props.truncateDefaultEllipsis}
							>
								{this.props.contentDescription}
							</Truncate>
							:
							this.props.contentDescription
						}
					</div>
				)}
				{(this.props.content || this.props.children) && (
					// note this needs to be wrapped in a div for sibling :last-child styles to work
					<div>
						{this.props.content}
						{this.props.children}
					</div>
				)}
			</div>
		)
	}

	renderIfFooter () {
		if (!this.props.footer) {
			return;
		}

		return (
			<div
				className={classnames(
					styles.Card_Footer,
					this.props.footerClassName,
				)}
			>
				{this.props.footer}
			</div>
		);
	}

	render () {
		const Tag = this.props.tag;

		return (
			<Tag
				className={classnames(
					styles.Card,
					this.props.className
				)}
			>
				{this.renderIfHeader()}
				{this.renderIfContent()}
				{this.renderIfFooter()}
			</Tag>
		);
	}

}
