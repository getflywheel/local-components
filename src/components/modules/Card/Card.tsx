import * as React from 'react';
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import styles from './Card.sass';
import Truncate from '../../text/Truncate/Truncate';
import { Title } from '../../text/Title/Title';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface IProps extends IReactComponentProps {
	childrenClassName?: string;
	content?: React.ReactNode;
	contentClassName?: string;
	contentDescription?: React.ReactNode;
	contentDescriptionClassName?: string;
	contentDescriptionTruncate?: boolean;
	contentDescriptionTruncateEllipsis?: React.ReactNode;
	contentDescriptionTruncateLines?: number;
	contentSub?: React.ReactNode;
	contentSubClassName?: string;
	contentSubTruncate?: boolean;
	contentSubTruncateEllipsis?: React.ReactNode;
	contentSubTruncateLines?: number;
	contentTitle?: React.ReactNode;
	contentTitleClassName?: string;
	contentTitleOnClick?: FunctionGeneric;
	contentTitleTruncate?: boolean;
	contentTitleTruncateEllipsis?: React.ReactNode;
	contentTitleTruncateLines?: number;
	footer?: React.ReactNode;
	footerClassName?: string;
	header?: React.ReactNode;
	headerBackgroundColor?: string;
	headerClassName?: string;
	headerIconClassName?: string;
	headerIconContainerClassName?: string;
	headerIconMaxHeight?: string;
	headerIconPath?: string;
	headerOnClick?: FunctionGeneric;
	overflow?: string;
	tag?: string;
	truncateDefaultEllipsis?: string;
	truncateDefaultLines?: number;
}

const Card = ({
	children,
	childrenClassName,
	className,
	content,
	contentClassName,
	contentDescription,
	contentDescriptionClassName,
	contentDescriptionTruncate,
	contentDescriptionTruncateEllipsis,
	contentDescriptionTruncateLines,
	contentSub,
	contentSubClassName,
	contentSubTruncate,
	contentSubTruncateEllipsis,
	contentSubTruncateLines,
	contentTitle,
	contentTitleClassName,
	contentTitleOnClick,
	contentTitleTruncate,
	contentTitleTruncateEllipsis,
	contentTitleTruncateLines,
	footer,
	footerClassName,
	header,
	headerBackgroundColor,
	headerClassName,
	headerIconClassName,
	headerIconContainerClassName,
	headerIconMaxHeight,
	headerIconPath,
	headerOnClick,
	id,
	onClick,
	overflow = 'hidden',
	style,
	tag = 'article',
	truncateDefaultEllipsis = '...',
	truncateDefaultLines = 1,
}: IProps) => {
	const hasHeader = () => {
		return header || headerIconPath || headerBackgroundColor;
	};

	const renderHeader = () => {
		return (
			<div className={classnames(styles.Card_Header, headerClassName)} onClick={headerOnClick}>
				{(headerIconPath || headerBackgroundColor) && (
					<div
						className={classnames(styles.Card_HeaderIconContainer, headerIconContainerClassName)}
						style={{
							...(headerBackgroundColor && { backgroundColor: headerBackgroundColor }), // conditionally add style
						}}
					>
						{headerIconPath && (
							<img
								alt=""
								src={headerIconPath}
								className={headerIconClassName}
								style={{
									...(headerIconMaxHeight && { maxHeight: headerIconMaxHeight }),
								}}
							/>
						)}
					</div>
				)}

				{header}
			</div>
		);
	};

	const hasContent = () => {
		return content || children || contentTitle || contentSub || contentDescription;
	};

	const renderContent = () => {
		return (
			<div className={classnames(styles.Card_Content, contentClassName)}>
				{contentTitle && (
					<Title
						size="s"
						className={classnames(styles.Card_Content_Title, contentTitleClassName)}
						style={{
							...(contentTitleOnClick && { cursor: 'pointer' }), // conditionally add style
						}}
						onClick={contentTitleOnClick}
					>
						{contentTitleTruncate ? (
							// this adds a bunch of nested spans, so only use if this feature is enabled
							<Truncate
								lines={contentTitleTruncateLines || truncateDefaultLines}
								ellipsis={contentTitleTruncateEllipsis || truncateDefaultEllipsis}
							>
								{contentTitle}
							</Truncate>
						) : contentTitleOnClick ? (
							<a>{contentTitle}</a>
						) : (
							contentTitle
						)}
					</Title>
				)}
				{contentSub && (
					<div className={classnames(styles.Card_Content_Sub, contentSubClassName)}>
						{contentSubTruncate ? (
							// this adds a bunch of nested spans, so only use if this feature is enabled
							<Truncate
								lines={contentSubTruncateLines || truncateDefaultLines}
								ellipsis={contentSubTruncateEllipsis || truncateDefaultEllipsis}
							>
								{contentSub}
							</Truncate>
						) : (
							contentSub
						)}
					</div>
				)}
				{contentDescription && (
					<div className={classnames(styles.Card_Content_Description, contentDescriptionClassName)}>
						{contentDescriptionTruncate ? (
							// this adds a bunch of nested spans, so only use if this feature is enabled
							<Truncate
								lines={contentDescriptionTruncateLines || truncateDefaultLines}
								ellipsis={contentDescriptionTruncateEllipsis || truncateDefaultEllipsis}
							>
								{contentDescription}
							</Truncate>
						) : (
							contentDescription
						)}
					</div>
				)}
				{(content || children) && (
					// note this needs to be wrapped in a div for sibling :last-child styles to work
					<div className={childrenClassName}>
						{content}
						{children}
					</div>
				)}
			</div>
		);
	};

	const hasFooter = () => {
		return footer;
	};

	const renderFooter = () => {
		return <div className={classnames(styles.Card_Footer, footerClassName)}>{footer}</div>;
	};

	const Tag: any = tag;

	return (
		<Tag
			className={classnames(styles.Card, className)}
			id={id}
			onClick={onClick}
			style={{
				...(overflow !== 'hidden' && { overflow }), // conditionally add style
				...style,
			}}
		>
			{hasHeader() && renderHeader()}
			{hasContent() && renderContent()}
			{hasFooter() && renderFooter()}
		</Tag>
	);
};

export default Card;
