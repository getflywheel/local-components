/* eslint-disable max-classes-per-file */
import * as React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import styles from './VerticalNav.scss';
import FlyTooltip from '../../overlays/FlyTooltip/FlyTooltip';

export const VerticalNav = (props: IReactComponentProps) => {
	const { className, id, children, style } = props;
	return (
		<div className={classnames(styles.VerticalNav, className)} id={id} style={style}>
			{children}
		</div>
	);
};

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

export const VerticalNavItem = (props: IProps) => {
	const { className, fadeIn, navLinkActive, navLinkActiveClassName, navLinkClass, routeTo, tooltip, type, children } =
		props;

	const renderWrapper = (child: any, additionalTooltipClassName?: string | string[]) => {
		return tooltip ? (
			<FlyTooltip
				className={classnames(styles.VerticalNavItem, additionalTooltipClassName, className)}
				content={tooltip}
				position="right"
				hoverIntent
			>
				{child}
			</FlyTooltip>
		) : (
			<div className={classnames(styles.VerticalNavItem, className)}>{child}</div>
		);
	};

	const renderTypeNavLink = (
		additionalTooltipClassName?: string | string[],
		additionalNavLinkClass?: string | string[]
	) => {
		return renderWrapper(
			<NavLink
				to={routeTo || ''}
				exact={false}
				activeClassName={navLinkActiveClassName || '__Active'}
				className={classnames(navLinkClass, additionalNavLinkClass, {
					__Active: navLinkActive,
					__FadeIn: fadeIn,
				})}
			>
				{children}
			</NavLink>,
			additionalTooltipClassName
		);
	};

	const renderTypeFiller = () => {
		return <div className={styles.VerticalNavItem_DragRegion} />;
	};

	const renderTypeAddSite = () => {
		return renderTypeNavLink(styles.FlyTooltip__AddSite, [styles.VerticalNav_Add, 'TID_VerticalNav_NavLink_Add']);
	};

	const renderTypeSwitcher = () => {
		return <div className={classnames(styles.VerticalNav_NonNavLinkItemOuter, className)}>{children}</div>;
	};

	switch (type) {
		case 'addsite':
			return renderTypeAddSite();
		case 'filler':
			return renderTypeFiller();
		case 'navlink':
			return renderTypeNavLink();
		case 'switcher':
			return renderTypeSwitcher();
		default:
			console.error(`The VerticalNavItem type '${type}' is invalid and will not render.`);
			return null;
	}
};

VerticalNavItem.defaultProps = {
	fadeIn: true,
	type: 'navlink',
};
