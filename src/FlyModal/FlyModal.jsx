import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import CloseSVG from '../../svg/close--big.svg';

ReactModal.setAppElement('#root');

export default class FlyModal extends Component {

	static defaultProps = {
		isOpen: true,
		portalClassName: 'ReactModalPortal',
		className: 'FlyModal',
		overlayClassName: 'FlyModalOverlay',
		ariaHideApp: true,
		closeTimeoutMS: 0,
		shouldCloseOnOverlayClick: true,
		parentSelector: () => document.body,
		onRequestClose: FlyModal.onRequestClose,
	};

	static onRequestClose () {
		document.getElementsByClassName('FlyModalOverlay')[0].classList.add('--FadeOut');

		/* setTimeout used to wait for animation and to hack around "React DOM tree root should always have a node reference." warning */
		setTimeout(() => ReactDOM.unmountComponentAtNode(document.getElementById('popup-container')), 210);
	}

	render () {
		return <ReactModal {...this.props}>
			<span className="Close" onClick={FlyModal.onRequestClose}><CloseSVG /></span>
			{this.props.children}
		</ReactModal>;
	}

}
