import React from 'react';
import Drawer from '../Drawer';
import { Button } from '../../../buttons/Button/Button';
import { PrimaryButton } from '../../../buttons/PrimaryButton/PrimaryButton';
import { TextButton } from '../../../buttons/TextButton/TextButton';

interface IState {
	showDrawer: boolean;
}

export class DrawerExample extends React.Component<{}, IState>{
	constructor (props: {}, context: any) {
		super(props, context);

		this.state = {
			showDrawer: false,
		};
	}

	render () {
		return (
			<>
				<Button onClick={() => this.setState({showDrawer: !this.state.showDrawer})}>{this.state.showDrawer ? 'Hide Drawer' : 'Show Drawer'}</Button>

				<Drawer show={this.state.showDrawer}>
					<PrimaryButton onClick={() => console.log('onClick')}>Save</PrimaryButton>
				</Drawer>
			</>
		);
	}
}

export class DrawerExample2 extends React.Component<{}, IState>{
	constructor (props: {}, context: any) {
		super(props, context);

		this.state = {
			showDrawer: false,
		};
	}

	render () {
		return (
			<>
				<Button onClick={() => this.setState({showDrawer: !this.state.showDrawer})}>{this.state.showDrawer ? 'Hide Drawer' : 'Show Drawer'}</Button>

				<Drawer show={this.state.showDrawer} noStripes shadow>
					<PrimaryButton onClick={() => console.log('onClick')}  privateOptions={{padding: 'm'}}>Save changes</PrimaryButton>
					<TextButton onClick={() => console.log('onClick')}>Cancel</TextButton>
				</Drawer>
			</>
		);
	}
}
