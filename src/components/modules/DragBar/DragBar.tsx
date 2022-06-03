import * as React from 'react';
import styles from './DragBar.sass';
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

export default class Toolbar extends React.Component<IReactComponentProps> {
	render () {
		return (
			<header
				className={classnames(
					styles.DragBar,
					this.props.className,
				)}
				id={this.props.id}
				style={this.props.style}
			/>
		);
	}
}
