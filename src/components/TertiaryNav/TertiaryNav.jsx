import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Switch, Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import styles from './TertiaryNav.sass';

class TertiaryNavBase extends Component {
    static propTypes = {
        children: (props, propName, componentName) => {
            const prop = props[propName];
            let error = null;

            React.Children.forEach(prop, (child) => {
                if (child.type.WrappedComponent && child.type.WrappedComponent.name !== 'TertiaryNavItemBase') {
                    error = new Error(`${componentName} children need to be of type 'TertiaryNavItem' but instead received type '${child.type}'.`);
                }
            });

            return error;
        }
    };

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
                        {React.Children.map(this.props.children, (child) => {
                            const propsWithoutChildren = { ...child.props };
                            delete propsWithoutChildren.children;

                            return (
                                <Route
									{...propsWithoutChildren}
									path={`${this.props.match.url}${propsWithoutChildren.path}`}
								/>
                            )
                        })}
                    </Switch>
                </div>
            </div>
        );
    }
}

class TertiaryNavItemBase extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        component: (props, propName, componentName) => {
            if(!props.component && !props.render) {
                return new Error(`Each TertiaryNavItem renders a 'Route' element and requires a 'component' or 'render' prop.`);
            }
        },
        render: (props, propName, componentName) => {
            if(!props.component && !props.render) {
                return new Error(`Each TertiaryNavItem renders a 'Route' element and requires a 'component' or 'render' prop.`);
            }
        },
		variant: PropTypes.oneOf([
			// 'warning',
			// 'neutral',
			// 'success',
			'error',
		]),
    };

    render () {
        return (
            <li
				className={classnames(
					styles.TertiaryNavItem,
					this.props.className,
					{
						[styles.TertiaryNavItem__Error]: this.props.variant === 'error',
					}
				)}
			>
                <NavLink
					exact
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
