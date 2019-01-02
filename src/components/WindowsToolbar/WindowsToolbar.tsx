import React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import styles from './WindowsToolbar.sass';
import WindowsHamburger from '../../svg/windows_hamburger.svg';
import WindowsMinimize from '../../svg/windows_minimize.svg';
import WindowsMaximize from '../../svg/windows_maximize.svg';
import WindowsClose from '../../svg/windows_close.svg';
import WindowsBack from '../../svg/windows_back.svg';

interface IProps extends IReactComponentProps {

	title: string;
	resizable?: boolean;
	onBack?: (...params: any[]) => any;
	onMinimize: (...params: any[]) => any;
	onMaximize?: (...params: any[]) => any;
	onQuit: (...params: any[]) => any;
	onShowMenu?: (...params: any[]) => any;

}

class WindowsToolbar extends React.Component<IProps> {

	render () {
		return (
			<header className={styles.WindowsToolbar}>
				{
					this.props.onBack && (
						<span
							className={styles.Back}
							onClick={this.props.onBack}
						>
							<svg>{WindowsBack}</svg>
						</span>
					)
				}
				{
					this.props.onShowMenu && (
						<span
							className={styles.Menu}
							onClick={this.props.onShowMenu}
						>
							<svg>{WindowsHamburger}</svg>
						</span>
					)
				}
				<div className={styles.DragRegion}>
					{this.props.title}
				</div>
				<div className={styles.RightButtons}>
					<span
						className={styles.Minimize}
						onClick={this.props.onMinimize}
					>
						<svg>{WindowsMinimize}</svg>
					</span>
					<span
						className={classnames(
							[styles.Maximize],
							{
								'__Disabled': !this.props.resizable,
							},
						)}
						onClick={this.props.onMaximize}
					>
						<svg>{WindowsMaximize}</svg>
					</span>
					<span
						className={styles.Quit}
						onClick={this.props.onQuit}
					>
						<svg>{WindowsClose}</svg>
					</span>
				</div>
			</header>
		);
	}

}

export default WindowsToolbar;
