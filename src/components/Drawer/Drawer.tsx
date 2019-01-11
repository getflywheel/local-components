import * as React from 'react';
import classnames from 'classnames';
import * as styles from './Drawer.sass';
import IReactComponentProps from '../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {

	align?: 'left' | 'center' | 'right';
	children: React.ReactNode;
	show?: boolean;

}

interface IState {

	disableAnimation: boolean;

}

export default class Drawer extends React.Component<IProps, IState> {

	constructor (props: IProps) {
		super(props);

		this.state = {
			disableAnimation: true,
		};
	}

	componentWillReceiveProps (nextProps: IProps) {
		if (nextProps.show) {
			this.setState({
				disableAnimation: false,
			});
		}
	}

	render () {
		return (
			<div className={classnames(styles.DrawerContainer)}>
				<div
					className={classnames(
						styles.Drawer,
						this.props.className,
						{
							[styles.Drawer__Show]: this.props.show,
							[styles.Drawer__DisableAnimation]:  this.state.disableAnimation,
							[styles.Drawer__AlignLeft]: this.props.align === 'left',
							[styles.Drawer__AlignCenter]: this.props.align === 'center' || !this.props.align,
							[styles.Drawer__AlignRight]: this.props.align === 'right',
						},
					)}
				>
					{this.props.children}
				</div>
			</div>
		);
	}

}
