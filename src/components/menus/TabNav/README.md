Basic `TabNav` use without React Router.
```js
<TabNav>
	<a className="active">Nav Item 1</a>
	<a>Nav Item 2</a>
</TabNav>
```

React Router implementation.
```js
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';

class ExampleBase extends React.Component{
    render () {
        return (
        	<div>
				<TabNav>
					<NavLink
						exact
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
			   <div style={{padding: "30px"}}>
				   <Switch>
						<Route
							exact
							path={`${this.props.match.url}/`}
							render={(props) => <div>Content A</div>}
						/>
						<Route
							exact
							path={`${this.props.match.url}/page-b`}
							render={(props) => <div>Content B</div>}
						/>
					</Switch>
				</div>
		   </div>
        );
    };
}

// in our exporting of the component, we wrap it in withRouter(), giving it access to the props that we need for the Routes
const Example = withRouter(ExampleBase);

(<Example />)
```
