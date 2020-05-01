import * as React from 'react';
import classnames from 'classnames';
import * as styles from './WorkspaceSwitcher.scss';
import * as stylesVerticalNav from '../VerticalNav.scss';
import Popup from '../../../overlays/Popup/Popup';
import Divider from '../../../layout/Divider/Divider';
import AddSVG from '../../../../svg/add';
import Avatar from '../../../media/Avatar/Avatar';
import IReactComponentProps from '../../../../common/structures/IReactComponentProps';
import { VerticalNavItem } from '../VerticalNav';
import CloseSmallSVG from '../../../../svg/close--small';
import WarningSVG from '../../../../svg/warning';
import { TextButton } from '../../../buttons/TextButton/TextButton';
import { FunctionGeneric } from '../../../../common/structures/Generics';

interface IWorkspaceSwitcherProps extends IReactComponentProps {
	className?: string;
	infoBannerUrl?: string;
	onClickAccount: FunctionGeneric;
	onClickAddTeam: FunctionGeneric;
	onCloseInfoBanner?: FunctionGeneric;
	onClickLogout: FunctionGeneric;
	onClickLogin: FunctionGeneric;
	onClickUpgradeToPro: FunctionGeneric;
	onClickWorkspace: FunctionGeneric;
	onClickWorkspaceNav: FunctionGeneric;
	showInfoBanner?: boolean;
	showUpgradeButton?: boolean;
	showLoginButton?: boolean;
	tooltip: string;
	workspaces: any[];
	avatarUrl: string | null | undefined;
}

interface IWorkspaceSwitcherState {
	activeWorkspaceItem: any;
	isInfoBannerClosed: boolean;
}


export class WorkspaceSwitcher extends React.Component<IWorkspaceSwitcherProps, IWorkspaceSwitcherState> {
	constructor (props: IWorkspaceSwitcherProps) {
		super(props);

		this.state = {
			activeWorkspaceItem: this.getInitialActiveWorkspaceItem(),
			isInfoBannerClosed: false,
		};
	}

	componentDidUpdate (prevProps: IWorkspaceSwitcherProps, prevState: IWorkspaceSwitcherState) {
		if (prevProps.workspaces.length !== this.props.workspaces.length) {
			this.setState({
				activeWorkspaceItem: this.getInitialActiveWorkspaceItem(),
			});
		}
	}

	getInitialActiveWorkspaceItem = () => {
		const { workspaces } = this.props;
		return workspaces
			&&
			(
				workspaces.find(element => element.isActive) || (workspaces.length && workspaces[0])
			);
	}

	onCloseInfoBannerContainer = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
	};

	onCloseInfoBanner = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();

		this.setState({
			isInfoBannerClosed: true,
		});

		if (this.props.onCloseInfoBanner) {
			this.props.onCloseInfoBanner(event);
		}
	};

	onSelect (workspaceItem: any) {
		this.setState({
			activeWorkspaceItem: workspaceItem,
		});

		if (this.props.onClickWorkspace) {
			this.props.onClickWorkspace.call(this, workspaceItem);
		}
	}

	render () {
		const {
			workspaces,
			className,
			showInfoBanner,
			showUpgradeButton,
			showLoginButton,
			avatarUrl,
			onClickAddTeam,
			onClickWorkspaceNav,
			onClickUpgradeToPro,
			onClickAccount,
			onClickLogin,
			onClickLogout,
		} = this.props;

		const hasHubSeat = workspaces
			&& workspaces.some(workspaceItem => workspaceItem.isPro || workspaceItem.isTeam);

		return (
			<VerticalNavItem
				className={classnames(
					styles.WorkspaceSwitcher,
					className,
				)}
				tooltip={showUpgradeButton ? 'Login' : 'My Account'}
				type="switcher"
			>
				<Popup
					className={styles.WorkspaceSwitcher_Popup__Width100}
					offsetX="-19px"
					padding={false}
					position="right"
					triggerContent={(() => (
						<div
							className={stylesVerticalNav.VerticalNav_NonNavLinkItem}
							onClick={onClickWorkspaceNav}
						>
							{avatarUrl
								? (
									<Avatar
										className={styles.WorkspaceSwitcher_Avatar}
										color={this.state.activeWorkspaceItem.color}
										initials={this.state.activeWorkspaceItem.initials}
										placeholderSrc={this.state.activeWorkspaceItem.srcCache}
										size="s"
										src={avatarUrl}
										type={this.state.activeWorkspaceItem.isTeam ? 'team' : 'user'}
									/>
								) : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0a16 16 0 1 0 16 16A16.047 16.047 0 0 0 16 0zM7 26.7c0-1.4 1.9-3.9 3.3-4.7a7.1 7.1 0 0 1 2.1-.8c.3-.1.5-.1.7-.4a4.009 4.009 0 0 0 .3-3.2 1.6 1.6 0 0 0-.7-.9c-.6-.5-1.6-1.3-1.6-3.9 0-3.4 2-5.7 4.9-5.7s4.9 2.3 4.9 5.7c0 2.6-.9 3.4-1.6 3.9a1.6 1.6 0 0 0-.7.9 3.677 3.677 0 0 0 .4 3.2 1.612 1.612 0 0 0 .7.4 6.758 6.758 0 0 1 2 .8c1.4.8 3.3 3.4 3.3 4.7a13.657 13.657 0 0 1-9 3.3 13.657 13.657 0 0 1-9-3.3zm19.7-1.6a11.18 11.18 0 0 0-3.9-4.8 13.325 13.325 0 0 0-2.3-1 3.352 3.352 0 0 1 0-1 .349.349 0 0 1 .2-.1c.7-.6 2.3-1.9 2.3-5.4-.1-4.6-2.9-7.8-7-7.8-4 0-6.9 3.2-6.9 7.7 0 3.5 1.5 4.8 2.3 5.4.1.1.1.1.2.1a1.7 1.7 0 0 1 0 1 8.789 8.789 0 0 0-2.4 1A11.941 11.941 0 0 0 5.3 25 13.992 13.992 0 1 1 30 16a14.473 14.473 0 0 1-3.3 9.1z" /></svg>
							}
						</div>
					))()
				}
				>
					{showInfoBanner && !this.state.isInfoBannerClosed &&
						<div
							className={styles.WorkspaceSwitcher_Popup_InfoContainer}
							onClick={this.onCloseInfoBannerContainer}
						>
							<WarningSVG className={styles.WorkspaceSwitcher_Popup_WarningSvg}/>
							<a href={this.props.infoBannerUrl} className={styles.WorkspaceSwitcher_Popup_Text}>What’s this?</a>
							<span onClick={this.onCloseInfoBanner}>
								<CloseSmallSVG className={styles.WorkspaceSwitcher_Popup_CloseSvg} />
							</span>
						</div>
					}

					{(workspaces.length > 0 && hasHubSeat) &&
						<>
							<div
								className={classnames(
									styles.WorkspaceSwitcher_PopupGrid,
									{
										[styles.WorkspaceSwitcher_PopupGrid__WithTopPadding]: !showInfoBanner || this.state.isInfoBannerClosed,
									},
								)}
							>
								{workspaces.map((workspaceItem) => {
									return (
										<div
											key={workspaceItem.id}
											onClick={() => this.onSelect(workspaceItem)}
											style={{width: '32px'}}
										>
											<Avatar
												className={classnames(
													styles.WorkspaceSwitcher_PopupGridItem,
													styles.WorkspaceSwitcher_Avatar,
													{
														[styles.WorkspaceSwitcher_PopupGridItem__Active]: workspaceItem.id === this.state.activeWorkspaceItem.id,
														[styles.WorkspaceSwitcher_PopupGridItem__Team]: !workspaceItem.isTeam,
													},
												)}
												color={workspaceItem.color}
												initials={workspaceItem.initials}
												placeholderSrc={workspaceItem.srcCache}
												size="s"
												type={workspaceItem.isTeam ? 'team' : 'user'}
												src={workspaceItem.src}
											/>
										</div>
									);
								})}
								<div
									className={styles.WorkspaceSwitcher_PopupGridItemAdd}
									onClick={onClickAddTeam}
								>
									<AddSVG />
								</div>
							</div>
							<Divider />
						</>
					}
					{showUpgradeButton &&
						<div className={styles.WorkspaceSwitcher_Section}>
							<TextButton onClick={onClickUpgradeToPro}>
								UPGRADE TO PRO
							</TextButton>
						</div>
					}

					{!showLoginButton &&
						<div className={styles.WorkspaceSwitcher_Section}>
							<TextButton onClick={onClickAccount}>
								MY ACCOUNT
							</TextButton>
						</div>
					}

					<div
						className={classnames(
							styles.WorkspaceSwitcher_PopupFooter,
							styles.WorkspaceSwitcher_Section,
						)}
					>

						{showLoginButton
							? <TextButton onClick={onClickLogin}>
								LOGIN
							</TextButton>
							: <TextButton onClick={onClickLogout}>
								LOGOUT
							</TextButton>
						}
					</div>
				</Popup>
			</VerticalNavItem>
		);
	}
}
