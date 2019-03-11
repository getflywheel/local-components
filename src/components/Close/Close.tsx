import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import CloseBigSVG from '../../svg/close--big';
import * as styles from './Close.sass';
import Handler from '../../common/structures/Handler';

interface IProps extends IReactComponentProps {

	onClick: Handler;

}

export default class Close extends React.Component<IProps> {

	render () {
		return (
			<span
				className={classnames(
					styles.Close,
					'Close', // this also needs to be globally accessible so other component styles can reference it
				)}
				onClick={this.props.onClick}
			>
				<CloseBigSVG />
			</span>
		);
	}

}