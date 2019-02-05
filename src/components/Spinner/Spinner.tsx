import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import SpinnerSVG from '../../svg/spinner';
import * as styles from './Spinner.sass';

interface IProps extends IReactComponentProps {
	className?: string
	color?: 'Gray25' | 'GrayDark50'
}

export default class Spinner extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		color: 'Gray25',
	};

	renderSVG () {
		return (
			<SpinnerSVG
				className={classnames(
					styles.Spinner,
					this.props.className,
					{
						[styles.Spinner__ColorGrayDark50]: this.props.color === 'GrayDark50',
					},
				)}
			/>
		);
	}

	render () {
		if (!this.props.children) {
			return this.renderSVG();
		}

		return (
			<div className={styles.SpinnerContainer}>
				{this.renderSVG()}
				{this.props.children}
			</div>
		);
	}

}
