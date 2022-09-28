import * as React from 'react';
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import styles from './Banner.scss';
import Close from '../../buttons/Close/Close';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { Button } from '../../buttons/Button/Button';
import { CircleInfoIcon, SuccessIcon, YieldIcon } from '../../icons/Icons';

export interface BannerProps extends IReactComponentProps {
	buttonText?: string;
	buttonOnClick?: FunctionGeneric;
	onDismiss?: FunctionGeneric;
	variant?: 'warning' | 'neutral' | 'success' | 'error';
	closeSize?: 's' | 'm' | 'l';
}

const Banner = (props: BannerProps) => {
	const {
		variant = 'neutral',
		closeSize = 'm',
		className,
		id,
		style,
		children,
		buttonText,
		buttonOnClick,
		onDismiss,
	} = props;

	const renderIcon = () => {
		switch (variant) {
			case 'error':
			case 'warning':
				return <YieldIcon width={18} />;
			case 'success':
				return <SuccessIcon />;
			case 'neutral':
			default:
				return <CircleInfoIcon />;
		}
	};

	const renderButton = () => {
		return !buttonText || !buttonOnClick ? null : (
			<Button inline onClick={buttonOnClick} className={styles.CTA} style={{ padding: '7px 15px' }}>
				{buttonText}
			</Button>
		);
	};

	const renderDismiss = () => {
		return onDismiss ? (
			<Close position="static" size={closeSize} className={classnames(styles.Dismiss)} onClick={onDismiss} />
		) : null;
	};

	return (
		<div
			className={classnames(
				styles.Banner,
				{
					[styles.Banner__Neutral]: variant === 'neutral',
					[styles.Banner__Error]: variant === 'error' || variant === 'warning',
					[styles.Banner__Success]: variant === 'success',
				},
				className
			)}
			id={id}
			style={style}
		>
			<div className={styles.Left_Wrapper}>
				<div className={styles.Icon_Wrapper}>{renderIcon()}</div>
				<span className={styles.Content}>{children}</span>
			</div>
			<div className={styles.Buttons_Container}>
				{renderButton()}
				{renderDismiss()}
			</div>
		</div>
	);
};

export default Banner;
