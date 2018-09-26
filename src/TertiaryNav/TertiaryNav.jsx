import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Switch, Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class TertiaryNavBase extends Component {
    static propTypes = {
        children: (props, propName, componentName) => {
            const prop = props[propName];
            let error = null;

            React.Children.forEach(prop, (child) => {
                if (child.type !== TertiaryNavItem) {
                    error = new Error(`${componentName} children need to be of type 'TertiaryNavItem'.`);
                }
            });

            return error;
        }
    };

    render () {
        return (
            <div className={classnames({ 'TertiaryNavContainer': true }, this.props.className)}>
                <ul className={classnames({ 'TertiaryNav': true })}>
                    {this.props.children}
                </ul>
                <div className={classnames({ 'TertiaryContent': true })}>
                    <Switch>
                        {React.Children.map(this.props.children, (child) => {
                            const propsWithoutChildren = { ...child.props };
                            delete propsWithoutChildren.children;

                            return (
                                <Route {...propsWithoutChildren} path={`${this.props.match.url}${propsWithoutChildren.path}`}/>
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
    };

    render () {
        return (
            <li className={classnames({ 'TertiaryNavItem': true }, this.props.className)}>
                <NavLink to={`${this.props.match.url}${this.props.path}`} exact activeClassName="active">
                    {this.props.children}
                </NavLink>
            </li>
        );
    }

}


export const TertiaryNav = withRouter(TertiaryNavBase);
export const TertiaryNavItem = withRouter(TertiaryNavItemBase);
