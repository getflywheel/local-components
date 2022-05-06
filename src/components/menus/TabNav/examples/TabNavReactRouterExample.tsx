import React from 'react';
import { NavLink, Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import TabNav from '../TabNav';

class ExampleBase extends React.Component<RouteComponentProps> {
	render () {
		return (
			<div>
				<TabNav>
					<NavLink
						exact={true}
						to={`${this.props.match.url}/`}
						activeClassName="active"
					>
						NavLink A
					</NavLink>
					<NavLink
						to={`${this.props.match.url}/page-b`}
						activeClassName="active"
					>
						NavLink B
					</NavLink>
			   </TabNav>
			   <div style={{padding: '30px'}}>
				   <Switch>
						<Route
							exact={true}
							path={`${this.props.match.url}/`}
							render={(props) => <div>Content A</div>}
						/>
						<Route
							exact={true}
							path={`${this.props.match.url}/page-b`}
							render={(props) => <div>Content B</div>}
						/>
					</Switch>
				</div>
		   </div>
		);
	}
}

// in our exporting of the component, we wrap it in withRouter(), giving it access to the props that we need for the Routes
const TabNavReactRouterExample = withRouter(ExampleBase);

export default TabNavReactRouterExample;
