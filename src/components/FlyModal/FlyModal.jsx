import React, { Component } from 'react';
import classnames from 'classnames';
import ReactModal from 'react-modal';
import CloseSVG from '../../svg/close--big.svg';
import Close from '../Close';
import styles from './FlyModal.sass';

/**
 * Try catch for Local vs. Styleguidist
 */
let ReactDOM;

try {
	ReactDOM = __non_webpack_require__('react-dom');
} catch (e) {
	ReactDOM = require('react-dom');
}

if(typeof document !== 'undefined' && document.getElementById('root')) {
	ReactModal.setAppElement('#root');
}
else {
	ReactModal.setAppElement('body');
}

export default class FlyModal extends Component {

	static defaultProps = {
		hasIcon: false,
		isOpen: true,
		portalClassName: 'ReactModalPortal',
		overlayClassName: styles.FlyModalOverlay,
		ariaHideApp: true,
		closeTimeoutMS: 0,
		shouldCloseOnOverlayClick: true,
		parentSelector: () => document.body,
		onRequestClose: FlyModal.onRequestClose,
	};

	static onRequestClose () {
		document.getElementsByClassName(styles.FlyModalOverlay)[0].classList.add('__FadeOut');

		ReactDOM.unmountComponentAtNode(document.getElementById('popup-container'))
		/* setTimeout used to wait for animation and to hack around "React DOM tree root should always have a node reference." warning */
		//setTimeout(() => ReactDOM.unmountComponentAtNode(document.getElementById('popup-container')), 210);
	}

	render () {
		return <ReactModal
			{...this.props}
			className={classnames(
				styles.FlyModal,
				'FlyModal', // in here for tests
			)} // warning: this must be set after {...this.props} to work
		>
			<Close
				className={classnames({
					[styles.FlyModal__HasIcon]: this.props.hasIcon,
				})}
				onClick={FlyModal.onRequestClose}
			/>
			{this.props.children}
		</ReactModal>;
	}

}
