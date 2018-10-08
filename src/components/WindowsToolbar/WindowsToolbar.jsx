import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WindowsHamburger from '../../svg/windows_hamburger.svg';
import WindowsMinimize from '../../svg/windows_minimize.svg';
import WindowsMaximize from '../../svg/windows_maximize.svg';
import WindowsClose from '../../svg/windows_close.svg';
import WindowsBack from '../../svg/windows_back.svg';
import styles from './WindowsToolbar.sass';

class WindowsToolbar extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		resizable: PropTypes.bool,
		onBack: PropTypes.func,
		onMinimize: PropTypes.func.isRequired,
		onMaximize: PropTypes.func,
		onQuit: PropTypes.func.isRequired,
		onShowMenu: PropTypes.func,
	};

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<header className={styles.WindowsToolbar}>
				{
					this.props.onBack &&
					<span
						className={styles.Back}
						onClick={this.props.onBack}
					>
						<WindowsBack/>
					</span>
				}

				{
					this.props.onShowMenu &&
					<span
						className={styles.Menu}
						onClick={this.props.onShowMenu}
					>
						<WindowsHamburger/>
					</span>
				}

				<div className={styles.DragRegion}>
					{this.props.title}
				</div>

				<div className={styles.RightButtons}>
					<span
						className={styles.Minimize}
						onClick={this.props.onMinimize}
					>
						<WindowsMinimize/>
					</span>

					<span
						className={classnames(
							[styles.Maximize], {
								'__Disabled': !this.props.resizable
							}
						)}
						onClick={this.props.onMaximize}
					>
						<WindowsMaximize/>
					</span>

					<span
						className={styles.Quit}
						onClick={this.props.onQuit}
					>
						<WindowsClose/>
					</span>
				</div>
			</header>
		);
	}
}

export default WindowsToolbar;
