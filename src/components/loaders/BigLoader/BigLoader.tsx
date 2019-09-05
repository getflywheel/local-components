import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './BigLoader.sass';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

interface IProps extends IReactComponentProps {

	color?: 'Green' | 'Gray';
	message?: string;

}

export default class BigLoader extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
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
					dots={3}
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
