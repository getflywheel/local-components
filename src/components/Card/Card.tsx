import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Card.sass';
import Header from '../Header/Header';
import Truncate from '../Truncate/Truncate';

interface IProps extends IReactComponentProps {

	content?: React.ReactNode;
	contentClassName?: string;
	contentDescription?: React.ReactNode;
	contentDescriptionClassName?: string;
	contentDescriptionTruncate?: boolean;
	contentDescriptionTruncateLines?: number;
	contentDescriptionTruncateEllipsis?: React.ReactNode;
	contentSub?: React.ReactNode;
	contentSubClassName?: string;
	contentSubTruncate?: boolean;
	contentSubTruncateLines?: number;
	contentSubTruncateEllipsis?: React.ReactNode;
	contentTitle?: React.ReactNode;
	contentTitleClassName?: string;
	contentTitleOnClick?: FunctionGeneric;
	contentTitleTruncate?: boolean;
	contentTitleTruncateLines?: number;
	contentTitleTruncateEllipsis?: React.ReactNode;
	footer?: React.ReactNode;
	footerClassName?: React.ReactNode;
	header?: React.ReactNode;
	headerBackgroundColor?: string;
	headerClassName?: string;
	headerIconClassName?: string;
	headerIconContainerClassName?: string;
	headerIconPath?: string;
	headerIconMaxHeight?: string;
	headerOnClick?: FunctionGeneric;
	overflow?: string;
	tag?: string;
	truncateDefaultLines?: number;
	truncateDefaultEllipsis?: string;

}

export default class Card extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		overflow: 'hidden',
		tag: 'article',
		truncateDefaultEllipsis: '...',
		truncateDefaultLines: 1,
	};

	hasHeader () {
		return this.props.header || this.props.headerIconPath || this.props.headerBackgroundColor;
	}

	renderHeader () {
		return (
			<div
				className={classnames(
					styles.Card_Header,
					this.props.headerClassName,
				)}
				onClick={this.props.headerOnClick}
			>
				{(this.props.headerIconPath || this.props.headerBackgroundColor) && (
					<div
						className={classnames(
							styles.Card_HeaderIconContainer,
							this.props.headerIconContainerClassName,
						)}
						style={{
							...(this.props.headerBackgroundColor && {backgroundColor: this.props.headerBackgroundColor}), // conditionally add style
						}}
					>
						{this.props.headerIconPath && (
							<img
								src={this.props.headerIconPath}
								className={this.props.headerIconClassName}
								style={{
									...(this.props.headerIconMaxHeight && {maxHeight: this.props.headerIconMaxHeight}),
								}}
							/>
						)}
					</div>
				)}

				{this.props.header}
			</div>
		);
	}

	hasContent () {
		return this.props.content || this.props.children || this.props.contentTitle || this.props.contentSub || this.props.contentDescription;
	}

	renderContent () {
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
						fontSize="s"
						className={classnames(
							styles.Card_Content_Title,
							this.props.contentTitleClassName,
						)}
						style={{
							...(this.props.contentTitleOnClick && {cursor: 'pointer'}), // conditionally add style
						}}
						onClick={this.props.contentTitleOnClick}
					>
						{
							this.props.contentTitleTruncate
								?
								// this adds a bunch of nested spans, so only use if this feature is enabled
								<Truncate
									lines={this.props.contentTitleTruncateLines || this.props.truncateDefaultLines}
									ellipsis={this.props.contentTitleTruncateEllipsis || this.props.truncateDefaultEllipsis}
								>
									{this.props.contentTitle}
								</Truncate>
								:
								this.props.contentTitleOnClick
									?
									<a>{this.props.contentTitle}</a>
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
						{
							this.props.contentSubTruncate
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
						{
							this.props.contentDescriptionTruncate
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
		);
	}

	hasFooter () {
		return this.props.footer;
	}

	renderFooter () {
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
		const Tag: any = this.props.tag;

		return (
			<Tag
				className={classnames(
					styles.Card,
					this.props.className,
				)}
				style={{
					...(this.props.overflow !== 'hidden' && {overflow: this.props.overflow}), // conditionally add style
				}}
			>
				{this.hasHeader() && this.renderHeader()}
				{this.hasContent() && this.renderContent()}
				{this.hasFooter() && this.renderFooter()}
			</Tag>
		);
	}

}
