import * as React from 'react';
import classnames from 'classnames';
import { Switch, Route, NavLink, RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import * as styles from './TertiaryNav.sass';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { FunctionGeneric } from '../../../common/structures/Generics';

interface ITertiaryNavProps extends IReactComponentProps {

	children?: Array<React.ReactElement<TertiaryNavItem>> | React.ReactElement<TertiaryNavItem>;

}

// There is a known issue in TypeScript, which doesn't allow decorators to change the signature of the classes
// they are decorating. Due to this, if you are using @withRouter decorator in your code,
// you will see a bunch of errors from TypeScript.
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/24077#issuecomment-455487092
@(withRouter as any)
export class TertiaryNav extends React.Component<ITertiaryNavProps & IReactComponentProps & RouteComponentProps> {

	render () {
		let firstNavItem: any;
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
						{React.Children.map(this.props.children, (child: any, index: number) => {
							const propsWithoutChildren = { ...child.props };
							delete propsWithoutChildren.children;
							if (index === 0) {
								firstNavItem = child;
							}
							return (
								<Route
									{...propsWithoutChildren}
									path={`${this.props.match.url}${propsWithoutChildren.path}`}
								/>
							);
						})}
						{firstNavItem &&
							(
								<Redirect
									from={`${this.props.match.url}`}
									to={`${this.props.match.url}${firstNavItem.props.path}`}
								/>
							)

						}
					</Switch>
				</div>
			</div>
		);
	}

}

interface ITertiaryNavItemProps extends IReactComponentProps {

	path: string;
	render?: FunctionGeneric;
	variant?: 'error';

}

// There is a known issue in TypeScript, which doesn't allow decorators to change the signature of the classes
// they are decorating. Due to this, if you are using @withRouter decorator in your code,
// you will see a bunch of errors from TypeScript.
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/24077#issuecomment-455487092
@(withRouter as any)
export class TertiaryNavItem extends React.Component<ITertiaryNavItemProps & RouteComponentProps> {

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
