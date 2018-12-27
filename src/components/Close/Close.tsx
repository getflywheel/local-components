import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import classnames from 'classnames';
import CloseBigSVG from '../../svg/close--big.svg';
import styles from './Close.sass';

interface PropsI extends LocalComponentPropsI {

	onClick: (...params: any[]) => any;

}

export default class Close extends React.Component<PropsI> {

	render () {
		return (
			<span
				className={classnames(
					styles.Close,
					'Close', // this also needs to be globally accessible so other component styles can reference it
				)}
				onClick={this.props.onClick}
			>
				<svg>{CloseBigSVG}</svg>
			</span>
		);
	}

}
