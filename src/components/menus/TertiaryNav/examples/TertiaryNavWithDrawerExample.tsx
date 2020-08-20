/* @ts-nocheck */
import Drawer from '../../Drawer/Drawer';
import { PrimaryButton } from '../../../buttons/PrimaryButton/PrimaryButton';
import { TertiaryNav, TertiaryNavItem } from '../TertiaryNav';
import PropTypes from 'prop-types';
import React from 'react';

const Item2 = () => (<div>Item 2 Content</div>);
const Item3 = () => (<div>Item 3 Content</div>);

interface IProps {
	onChange: (target: any) => undefined;
}

class Item1 extends React.Component<IProps, { value: string }> {
	constructor (props: IProps) {
		super(props);

		this.state = {
			value: 'change this text',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (e: any) {
		this.setState({ value: e.target.value });
		this.props.onChange(e.target.value);
	}

	render () {
		return (
			<input type="text" value={this.state.value} onChange={this.handleChange} />
		);
	}
}

// @ts-ignore
Item1.propTypes = {
	onChange: PropTypes.func,
};

export default class TertiaryNavWithDrawerExample extends React.Component<{}, { showDrawer: boolean }> {
	constructor (props: any, context: any) {
		super(props, context);

		this.state = {
			showDrawer: false,
		};

		this.onChange = this.onChange.bind(this);
		this.onSave = this.onSave.bind(this);
	}

	onChange () {
		this.setState({
			showDrawer: true,
		});
	}

	onSave () {
		this.setState({
			showDrawer: false,
		});
	}

	render () {
		return (
			<div style={{ position: 'relative', display: 'flex', height: '100%' }}>
				<
					// @ts-ignore
					TertiaryNav
					>
					<
						// @ts-ignore
						TertiaryNavItem exact={true} path="/" render={(props) => <Item1 {...props} onChange={this.onChange} />}>Item 1</TertiaryNavItem>
					<
						// @ts-ignore
						TertiaryNavItem path="/item2" component={Item2}>Item 2</TertiaryNavItem>
					<
						// @ts-ignore
					    TertiaryNavItem path="/item3" component={Item3}>Item 3</TertiaryNavItem>
				</TertiaryNav>
				<Drawer show={this.state.showDrawer}>
					<PrimaryButton onClick={this.onSave}>Save</PrimaryButton>
				</Drawer>
			</div>
		);
	}
}
