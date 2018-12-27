import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import classnames from 'classnames';
import styles from './BigLoader.sass';
import LoadingIndicator from '../LoadingIndicator';

interface PropsI extends LocalComponentPropsI {

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
