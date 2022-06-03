import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import styles from './LoadingIndicator.sass';

interface IProps extends IReactComponentProps {
	big?: boolean;
	dots?: 2|3;
	color?: 'Green' | 'Gray';
}

export default class LoadingIndicator extends React.Component<IProps> {
	static defaultProps: Partial<IProps> = {
		big: false,
		dots: 2,
		color: 'Green',
	};

	render () {
		return (
			<div
				className={classnames(
					styles.LoadingIndicator,
					{
						[styles.LoadingIndicator__Gray]: this.props.color === 'Gray',
						[styles.LoadingIndicator__Big]: this.props.big,
					},
					this.props.className
				)}
				id={this.props.id}
				style={this.props.style}
			>
				 <div />
				 <div />
				 {this.props.dots === 3 && <div />}
			</div>
		);
	}
}
