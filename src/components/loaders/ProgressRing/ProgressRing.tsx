import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import * as styles from './ProgressRing.scss';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {
	/** Progress as a decimal number (0 to 1.0) **/
	progress: number;
	progressColor?: 'auto' | 'light';
	size?: 'large' | 'small';
	textColor?: 'auto' | 'light' | 'dark';
}

const defaultProps: Partial<IProps> = {
	progressColor: 'auto',
	size: 'large',
	textColor: 'auto',
};

const ProgressRing = (props: IProps) => {
	const [offset, setOffset] = useState(0);
	const [isAfterInit, setIsAfterInit] = useState(false);
	const {
		children,
		className,
		id,
		progress,
		progressColor,
		size,
		style,
		textColor,
	} = props;
	const sizeNum = size === 'large' ? 28 : 18;
	const strokeWidth = size === 'large' ? 4 : 2;
	const center = sizeNum / 2;
	const radius = sizeNum / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	useEffect(() => {
		const interval = setTimeout(() => {
			setIsAfterInit(true);
		});

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		// clamp progress value to 0-100
		const progressNum = Math.max(0, Math.min(progress * 100, 100));
		// incrementally decrease the overall % by using a tail reduction value
		// this is necessary because rounded stroke cap will otherwise make 95% visually look like 100%
		// the divisor here is completely arbitrary and whatever makes the ring look "full" at 100%
		const gradualRadialTailReduction = progressNum / 25;
		// calculate the svg offset value based on progress and circumference
		const progressOffset = ((100 - progressNum + gradualRadialTailReduction) / 100) * circumference;
		setOffset(progressOffset);
	}, [setOffset, progress, circumference, offset]);

	return (
		<div
			className={classnames(
				styles.ProgressRing,
				'ProgressRing', // this needs to be globally accessible so other component styles can reference it
				className,
			)}
			id={id}
			style={style}
		>
			<svg
				className={classnames(
					styles.ProgressRing_Svg,
					styles.ProgressRing_SvgBackground,
					'ProgressRing_SvgBackground',
				)}
				width={sizeNum}
				height={sizeNum}
			>
				<circle
					className={classnames(
						styles.ProgressRing_SvgBackground_Circle,
						'ProgressRing_SvgBackground_Circle',
						{
							[styles.ProgressRing_SvgBackground_Circle__strokeLight]: progressColor === 'light',
						},
					)}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
				/>
			</svg>
			<svg
				className={classnames(
					styles.ProgressRing_Svg,
					styles.ProgressRing_SvgForeground,
					'ProgressRing_SvgForeground',
				)}
				width={sizeNum}
				height={sizeNum}
			>
				<circle
					className={classnames(
						styles.ProgressRing_SvgForeground_Circle,
						'ProgressRing_SvgForeground_Circle',
						{
							[styles.ProgressRing_SvgForeground_Circle__disabledTransition]: !isAfterInit,
							[styles.ProgressRing_SvgForeground_Circle__strokeLight]: progressColor === 'light',
						}
					)}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
			</svg>
			<span
				className={classnames(
					styles.ProgressRing_Text,
					'ProgressRing_Text',
					{
						[styles.ProgressRing_Text__Auto]: textColor === 'auto',
						[styles.ProgressRing_Text__Dark]: textColor === 'dark',
						[styles.ProgressRing_Text__Light]: textColor === 'light',
					},
				)}
			>
				{children}
			</span>
		</div>
	);
}

ProgressRing.defaultProps = defaultProps;

export default ProgressRing;
