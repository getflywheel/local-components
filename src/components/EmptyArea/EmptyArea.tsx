import React from 'react';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';
import classnames from 'classnames';
import styles from './EmptyArea.sass';

interface PropsI extends ReactComponentPropsI {

	border?: boolean;
	FadeIn?: boolean;

}

export class EmptyArea extends React.Component<PropsI> {

	render () {
		return (
			<div
				className={classnames(
					styles.EmptyArea,
					'EmptyArea', // this also needs to be globally accessible so other component styles can reference it
					{
						'__NoBorder': this.props.border === false,
						'__FadeIn': this.props.FadeIn,
					}
				)}
			>
				{this.props.children}
			</div>
		);
	}

}
