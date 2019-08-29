import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import CloseBigSVG from '../../svg/close--big';
import * as styles from './Close.scss';

interface IProps extends IReactComponentProps {
	position?: 'absolute' | 'static',
	onClick: FunctionGeneric;
}

export default class Close extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		position: 'absolute',
	};

	render () {
		return (
			<span
				className={classnames(
					styles.Close,
					'Close', // this also needs to be globally accessible so other component styles can reference it
					{
						[styles.Close__PositionAbsolute]: this.props.position === 'absolute',
					},
					this.props.className
				)}
				onClick={this.props.onClick}
				style={this.props.style}
			>
				<CloseBigSVG />
			</span>
		);
	}

}
