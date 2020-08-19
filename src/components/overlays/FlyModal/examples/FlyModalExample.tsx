import { Button } from '../../../buttons/Button/Button';
import { Title } from '../../../text/Title/Title';
import React from 'react';
import FlyModal from '../FlyModal';

const ReactDOM = require('react-dom');
const classnames = require('classnames');

export default class FlyModalExample extends React.Component{
    constructor (props, context) { 
       super(props, context);
       
       if(!document.getElementById('popup-container')) {
		   const container = document.createElement('div');
		   container.id = 'popup-container'; // match id expected in the component
		   document.body.appendChild(container);
	   }
    
       this.onClick = this.onClick.bind(this);
    }
    
    onClick () {
    	function confirm (args) {
        	return new Promise((resolve) => {
        		const onSubmit = (checked) => {
        			FlyModal.onRequestClose();
        			resolve(checked);
        		};
        		
        		ReactDOM.render(<FlyModal 
        			contentLabel={args.title.toString()}
        			hasIcon={true}
				>
        			<Title>Does your lorem ipsum text long for something a little meatier?</Title>
        			<p>Bacon ipsum dolor amet kevin meatloaf chicken pork shoulder alcatra filet mignon kielbasa tri-tip beef ribs.</p>
        		</FlyModal>, document.getElementById('popup-container'));
        	});
        }
        
        confirm({
			title: <span>Are you sure you want to update WordPress for <span className="__Color__Green">Cool Ass Site</span>?</span>,
			//buttonText: `Update to WordPress 9999`,
		}).then(() => {});
    }

    render () {
        return (
			<Button onClick={this.onClick}>Show Modal</Button>
        );
    }
}