import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import CloseBigSVG from '../../../svg/close--big';
import * as styles from './Close.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface IProps extends IReactComponentProps {
	position?: 'absolute' | 'static';
	onClick: FunctionGeneric;
}

export default class Close extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		position: 'absolute',
	};

	onKeyDown = (event: any) => {
		if (event.key === 'Enter'){
			event.target.click();
		}
	}

	render () {
		return (
			<span
				tabIndex={0}
				className={classnames(
					styles.Close,
					'Close', // this also needs to be globally accessible so other component styles can reference it
					{
						[styles.Close__PositionAbsolute]: this.props.position === 'absolute',
					},
					this.props.className,
				)}
				onClick={this.props.onClick}
				onKeyDown={this.onKeyDown}
				style={this.props.style}
			>
				<CloseBigSVG />
			</span>
		);
	}

}
