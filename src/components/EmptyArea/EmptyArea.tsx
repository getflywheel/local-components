import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import classnames from 'classnames';
import styles from './EmptyArea.sass';

interface PropsI extends LocalComponentPropsI {

	border?: boolean;
	FadeIn?: boolean;

}

export default class EmptyArea extends React.Component<PropsI> {

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
