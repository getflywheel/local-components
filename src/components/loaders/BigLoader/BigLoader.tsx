import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import styles from './BigLoader.scss';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { Title } from '../../text/Title/Title';

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
				className={classnames(
					styles.BigLoader,
					'MainPanel',
					this.props.className,
				)}
				id={this.props.id}
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
					<Title
						className={styles.BigLoader__Text}
						size="m"
					>
						{this.props.message}
					</Title>
				}
			</div>
		);
	}
}
