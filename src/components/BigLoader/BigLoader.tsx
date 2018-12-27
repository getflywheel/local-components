import React from 'react';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';
import classnames from 'classnames';
import styles from './BigLoader.sass';
import LoadingIndicator from '../LoadingIndicator';

interface PropsI extends ReactComponentPropsI {

	color?: 'Green' | 'Gray';
	message?: string;

}

export default class BigLoader extends React.Component<PropsI> {

	static defaultProps: Partial<PropsI> = {
		color: 'Green',
	};

	render () {
		return (
			<div
				className={classnames(styles.BigLoader, 'MainPanel', this.props.className)}
				style={this.props.style}
			>
				<LoadingIndicator
					big={true}
					color={this.props.color}
				/>
				{
					this.props.message
					&&
					<h3>{this.props.message}</h3>
				}
			</div>
		);
	}

}
