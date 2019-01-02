import React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import styles from './EmptyArea.sass';

interface IProps extends IReactComponentProps {

	border?: boolean;
	FadeIn?: boolean;

}

export class EmptyArea extends React.Component<IProps> {

	render () {
		return (
			<div
				className={classnames(
					styles.EmptyArea,
					'EmptyArea', // this also needs to be globally accessible so other component styles can reference it
					{
						'__FadeIn': this.props.FadeIn,
						'__NoBorder': this.props.border === false,
					},
				)}
			>
				{this.props.children}
			</div>
		);
	}

}
