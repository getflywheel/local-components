import React from 'react';
import Drawer from '../Drawer';
import { Button } from '../../../buttons/Button/Button';
import { PrimaryButton } from '../../../buttons/PrimaryButton/PrimaryButton';

export default class DrawerExample extends React.Component{
    constructor (props, context) { 
       super(props, context);
    
       this.state = {
          showDrawer: false
       };
    };

    render () {
        return (
            <>
                <Button onClick={() => this.setState({showDrawer: !this.state.showDrawer})}>{this.state.showDrawer ? 'Hide Drawer' : 'Show Drawer'}</Button>
                
                <Drawer show={this.state.showDrawer}>
                    <PrimaryButton onClick={() => console.log('onClick')}>Save</PrimaryButton>
                </Drawer>
            </>
        );
    };
}