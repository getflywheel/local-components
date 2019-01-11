import * as React from 'react';
import classnames from 'classnames';
import { Switch, Route, NavLink, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as styles from './TertiaryNav.sass';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import Handler from '../../common/structures/Handler';

interface IProps extends IReactComponentProps {

	children?: Array<React.ReactElement<TertiaryNavItemBase>> | React.ReactElement<TertiaryNavItemBase>;

}

class TertiaryNavBase extends React.Component<IProps & IReactComponentProps & RouteComponentProps<{}>> {

	render () {
		return (
			<div
				className={classnames(
					styles.TertiaryNavContainer,
					this.props.className,
				)}
			>
				<ul className={classnames(styles.TertiaryNav)}>
					{this.props.children}
				</ul>
				<div className={classnames(styles.TertiaryContent)}>
					<Switch>
						{React.Children.map(this.props.children, (child: any) => {
							const propsWithoutChildren = { ...child.props };
							delete propsWithoutChildren.children;

							return (
								<Route
									{...propsWithoutChildren}
									path={`${this.props.match.url}${propsWithoutChildren.path}`}
								/>
							);
						})}
					</Switch>
				</div>
			</div>
		);
	}

}

interface ITertiaryNavItemBaseProps extends IReactComponentProps {

	path: string;
	// component: (props, propName, componentName) => {
	// 	if(!props.component && !props.render) {
	// 		return new Error(`Each TertiaryNavItem renders a 'Route' element and requires a 'component' or 'render' prop.`);
	// 	}
	// },
	// render: (props, propName, componentName) => {
	// 	if(!props.component && !props.render) {
	// 		return new Error(`Each TertiaryNavItem renders a 'Route' element and requires a 'component' or 'render' prop.`);
	// 	}
	// },
	render?: Handler;
	variant?: 'error';

}

class TertiaryNavItemBase extends React.Component<ITertiaryNavItemBaseProps & RouteComponentProps<{}>> {

	render () {
		return (
			<li
				className={classnames(
					styles.TertiaryNavItem,
					this.props.className,
					{
						[styles.TertiaryNavItem__Error]: this.props.variant === 'error',
					},
				)}
			>
				<NavLink
					exact={true}
					to={`${this.props.match.url}${this.props.path}`}
					activeClassName={styles.TertiaryNavItem__Active}
				>
				  {this.props.children}
				</NavLink>
			</li>
		);
	}

}

export const TertiaryNav = withRouter(TertiaryNavBase);
export const TertiaryNavItem = withRouter(TertiaryNavItemBase);
