import React from 'react';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './VerticalNav.sass';
import FlyTooltip from '../FlyTooltip/FlyTooltip';
import Popup from '../Popup/Popup';
import ImageCircle from '../ImageCircle/ImageCircle';
import Divider from '../Divider/Divider';
import Button from '../Button/Button';
import AddSVG from '../../svg/add.svg';

export class VerticalNav extends React.Component<ReactComponentPropsI> {

	render () {
		return (
			<div className={styles.VerticalNav}>
				{this.props.children}
			</div>
		);
	}

}

interface PropsI extends ReactComponentPropsI {

	className?: string;
	fadeIn?: boolean;
	navLinkActive?: boolean;
	navLinkActiveClassName?: string;
	navLinkClass?: string;
	routeTo?: string;
	tooltip?: string | null;
	type?: 'addsite' | 'filler' | 'navlink' | 'switcher';

}

export class VerticalNavItem extends React.Component<PropsI> {

	static defaultProps: Partial<PropsI> = {
		fadeIn: true,
		type: 'navlink',
	};

	renderWrapper (children: any, additionalTooltipClassName?: string | string[]) {
		return (
			this.props.tooltip
				?
				(
					<FlyTooltip
						className={classnames(
							styles.VerticalNavItem,
							additionalTooltipClassName,
							this.props.className,
						)}
						content={this.props.tooltip}
						position="right"
						hoverIntent={true}
					>
						{children}
					</FlyTooltip>
				)
				:
				(
					<div
						className={classnames(
							styles.VerticalNavItem,
							this.props.className,
						)}
					>
						{children}
					</div>
				)
		);
	}

	renderTypeNavLink (additionalTooltipClassName?: string | string[], additionalNavLinkClass?: string | string[]) {
		return this.renderWrapper(
			(
				<NavLink
					to={this.props.routeTo || ''}
					exact={false}
					activeClassName={this.props.navLinkActiveClassName || '__Active'}
					className={classnames(
						this.props.navLinkClass,
						additionalNavLinkClass,
						{
							'__Active': this.props.navLinkActive,
							'__FadeIn': this.props.fadeIn,
						},
					)}
				>
					{this.props.children}
				</NavLink>
			),
			additionalTooltipClassName,
		);
	}

	renderTypeFiller () {
		return <div className={styles.VerticalNavItem_DragRegion}/>;
	}

	renderTypeAddSite () {
		return this.renderTypeNavLink(styles.FlyTooltip__AddSite, [styles.VerticalNav_Add, 'TID_VerticalNav_NavLink_Add']);
	}

	renderTypeSwitcher () {
		return (
			<div
				className={classnames(
					styles.VerticalNav_NonNavLinkItemOuter,
					this.props.className,
				)}
			>
				{this.props.children}
			</div>
		);
	}

	render () {
		switch (this.props.type) {
			case 'addsite':
				return this.renderTypeAddSite();
			case 'filler':
				return this.renderTypeFiller();
			case 'navlink':
				return this.renderTypeNavLink();
			case 'switcher':
				return this.renderTypeSwitcher();
			default:
				console.error(`The VerticalNavItem type '${this.props.type}' is invalid and will not render.`);
				return null;
		}
	}

}

interface WorkspaceSwitcherPropsI extends ReactComponentPropsI {

	className?: string;
	onClickAccount: (...params: any[]) => any;
	onClickManageTeam: (...params: any[]) => any;
	onClickAddTeam: (...params: any[]) => any;
	onClickLogout: (...params: any[]) => any;
	onClickWorkspace: (...params: any[]) => any;
	routeTo: string;
	tooltip: string;
	workspaces: any[];

}

interface WorkspaceSwitcherStateI {

	activeWorkspaceItem: any;

}

export class WorkspaceSwitcher extends React.Component<WorkspaceSwitcherPropsI, WorkspaceSwitcherStateI> {

	constructor (props: WorkspaceSwitcherPropsI) {
		super(props);

		this.state = {
			activeWorkspaceItem: this.getInitialActiveWorkspaceItem(),
		};
	}

	getInitialActiveWorkspaceItem () {
		return this.props.workspaces
			&&
			(
				this.props.workspaces.find(element => element.isActive) || (this.props.workspaces.length && this.props.workspaces[0])
			)
		;
	}

	componentDidUpdate (prevProps: WorkspaceSwitcherPropsI, prevState: WorkspaceSwitcherStateI) {
		if (prevProps.workspaces.length !== this.props.workspaces.length) {
			this.setState({
				activeWorkspaceItem: this.getInitialActiveWorkspaceItem(),
			});
		}
	}

	onSelect (workspaceItem: any) {
		this.setState({
			activeWorkspaceItem: workspaceItem,
		});

		if (this.props.onClickWorkspace) {
			this.props.onClickWorkspace.call(this, workspaceItem);
		}
	}

	render () {
		const hasTeams = this.props.workspaces && !!this.props.workspaces.filter(workspaceItem => workspaceItem.isTeam).length;

		return (
			<VerticalNavItem
				className={classnames(
					styles.WorkspaceSwitcher,
					this.props.className,
				)}
				tooltip={this.props.workspaces.length ? null : this.props.tooltip}
				routeTo={this.props.routeTo}
				type={this.props.workspaces.length ? 'switcher' : 'navlink'}
			>
				{
					this.props.workspaces.length
						?
						<Popup
							className={styles.WorkspaceSwitcher_Popup__Width100}
							offsetX="-19px"
							padding={false}
							position="right"
							triggerContent={(
								<div className={styles.VerticalNav_NonNavLinkItem}>
									<ImageCircle
										size="s"
										square={this.state.activeWorkspaceItem.isTeam}
										src={this.state.activeWorkspaceItem.src}
									/>
								</div>
							)}
						>
							{ hasTeams &&
								<React.Fragment>
									<div className={styles.WorkspaceSwitcher_PopupGrid}>
										{this.props.workspaces.map((workspaceItem) => {
											return (
												<div key={workspaceItem.id} onClick={() => this.onSelect(workspaceItem)}>
													<ImageCircle
														className={classnames(
															styles.WorkspaceSwitcher_PopupGridItem,
															{
																[styles.WorkspaceSwitcher_PopupGridItem__Active]: workspaceItem.id === this.state.activeWorkspaceItem.id,
															},
														)}
														size="s"
														square={workspaceItem.isTeam}
														src={workspaceItem.src}
													/>
												</div>
											);
										})}
										<div className={styles.WorkspaceSwitcher_PopupGridItemAdd} onClick={this.props.onClickAddTeam}>
											<svg>{AddSVG}</svg>
										</div>
									</div>
									<Divider />
								</React.Fragment>
							}
							<div className={styles.WorkspaceSwitcher_PopupFooter}>
								<Button
									className="__Green"
									onClick={() => (
										this.state.activeWorkspaceItem.isOwner
											?
											this.props.onClickManageTeam(this.state.activeWorkspaceItem)
											:
											this.props.onClickAccount()
									)}
								>
									{this.state.activeWorkspaceItem.isOwner ? 'Manage Team' : 'My Account'}
								</Button>
								{ !hasTeams &&
									<Button
										className="__Green"
										onClick={this.props.onClickAddTeam}
									>
										Add a Team
									</Button>
								}
								<Button
									className="__Green"
									onClick={this.props.onClickLogout}
								>
									Logout
								</Button>
							</div>
						</Popup>
						:
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0a16 16 0 1 0 16 16A16.047 16.047 0 0 0 16 0zM7 26.7c0-1.4 1.9-3.9 3.3-4.7a7.1 7.1 0 0 1 2.1-.8c.3-.1.5-.1.7-.4a4.009 4.009 0 0 0 .3-3.2 1.6 1.6 0 0 0-.7-.9c-.6-.5-1.6-1.3-1.6-3.9 0-3.4 2-5.7 4.9-5.7s4.9 2.3 4.9 5.7c0 2.6-.9 3.4-1.6 3.9a1.6 1.6 0 0 0-.7.9 3.677 3.677 0 0 0 .4 3.2 1.612 1.612 0 0 0 .7.4 6.758 6.758 0 0 1 2 .8c1.4.8 3.3 3.4 3.3 4.7a13.657 13.657 0 0 1-9 3.3 13.657 13.657 0 0 1-9-3.3zm19.7-1.6a11.18 11.18 0 0 0-3.9-4.8 13.325 13.325 0 0 0-2.3-1 3.352 3.352 0 0 1 0-1 .349.349 0 0 1 .2-.1c.7-.6 2.3-1.9 2.3-5.4-.1-4.6-2.9-7.8-7-7.8-4 0-6.9 3.2-6.9 7.7 0 3.5 1.5 4.8 2.3 5.4.1.1.1.1.2.1a1.7 1.7 0 0 1 0 1 8.789 8.789 0 0 0-2.4 1A11.941 11.941 0 0 0 5.3 25 13.992 13.992 0 1 1 30 16a14.473 14.473 0 0 1-3.3 9.1z" /></svg>
				}
			</VerticalNavItem>
		);
	}

}
