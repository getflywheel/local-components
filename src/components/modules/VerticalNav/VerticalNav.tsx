import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import * as styles from './VerticalNav.scss';
import FlyTooltip from '../../overlays/FlyTooltip/FlyTooltip';

export class VerticalNav extends React.Component<IReactComponentProps> {

	render () {
		return (
			<div className={styles.VerticalNav}>
				{this.props.children}
			</div>
		);
	}

}

interface IProps extends IReactComponentProps {
	className?: string;
	fadeIn?: boolean;
	navLinkActive?: boolean;
	navLinkActiveClassName?: string;
	navLinkClass?: string;
	routeTo?: string;
	tooltip?: string | null;
	type?: 'addsite' | 'filler' | 'navlink' | 'switcher';
}

export class VerticalNavItem extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
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
