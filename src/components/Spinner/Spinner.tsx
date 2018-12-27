import React from 'react';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';
import classnames from 'classnames';
import SpinnerSVG from '../../svg/spinner.svg';
import styles from './Spinner.sass';

interface PropsI extends ReactComponentPropsI {

	className?: string;
	color?: 'Gray25' | 'GrayDark50';
	ellipsis?: React.ReactNode;
	lines?: number;

}

export default class Spinner extends React.Component<PropsI> {

	static defaultProps: Partial<PropsI> = {
		color: 'Gray25',
		ellipsis: '...',
		lines: 1,
	};

	render () {
		return (
			<svg
				className={classnames(
					styles.Spinner,
					this.props.className,
					{
						[styles.Spinner__ColorGrayDark50]: this.props.color === 'GrayDark50',
					},
				)}
			>
				{SpinnerSVG}
			</svg>
		);
	}

}
