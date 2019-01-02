import React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import styles from './LoadingIndicator.sass';

interface IProps extends IReactComponentProps {

	big?: boolean;
	color?: 'Green' | 'Gray';

}

export default class LoadingIndicator extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		big: false,
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
				)}
			>
				 <div />
				 <div />
				 {this.props.big && <div />}
			</div>
		);
	}

}
