/* eslint-disable max-classes-per-file */
import * as React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import styles from './VerticalNav.scss';
import FlyTooltip from '../../overlays/FlyTooltip/FlyTooltip';

interface INavProps extends IReactComponentProps {
	title?: string | undefined;
}

export const VerticalNav = (props: INavProps) => {
	const { className, id, children, style, title } = props;

	return (
		<nav aria-label={title} className={classnames(styles.VerticalNav, className)} id={id} style={style}>
			{children}
		</nav>
	);
};

interface IProps extends IReactComponentProps {
	className?: string;
	ariaLabel?: string;
	ariaExpanded?: boolean;
	ariaControls?: string;
	action?: () => void;
	fadeIn?: boolean;
	navLinkActive?: boolean;
	navLinkActiveClassName?: string;
	navLinkClass?: string;
	routeTo?: string;
	tooltip?: string | null;
	type?: 'addsite' | 'button' | 'filler' | 'navlink' | 'switcher';
}

export const VerticalNavItem = (props: IProps) => {
	const {
		ariaLabel,
		ariaControls,
		ariaExpanded,
		className,
		fadeIn,
		navLinkActive,
		navLinkActiveClassName,
		navLinkClass,
		routeTo,
		tooltip,
		type,
		children,
		action,
	} = props;

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
				aria-label={tooltip || undefined}
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

	const renderTypeButton = (additionalTooltipClassName?: string | string[]) => {
		return renderWrapper(
			<button
				className={styles.VerticalNavButton}
				type="button"
				aria-label={ariaLabel || tooltip || undefined}
				aria-expanded={ariaExpanded || undefined}
				aria-controls={ariaControls || undefined}
				onClick={() => {
					if (action) {
						action();
					}
				}}
			>
				{children}
			</button>,
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
		case 'button':
			return renderTypeButton();
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
