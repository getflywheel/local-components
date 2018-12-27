import React from 'react';
import classnames from 'classnames';
import styles from './FlyModal.sass';
import Close from '../Close';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';

const ReactModal = require('react-modal');

/**
 * Try catch for Local vs. Styleguidist
 */
// todo - crum: fix and uncomment
// let ReactDOM;
//
// try {
// 	ReactDOM = __non_webpack_require__('react-dom');
// } catch (e) {
// 	ReactDOM = require('react-dom');
// }
//
// if(typeof document !== 'undefined' && document.getElementById('root')) {
// 	ReactModal.setAppElement('#root');
// }
// else {
// 	ReactModal.setAppElement('body');
// }

interface PropsI extends LocalComponentPropsI {

	ariaHideApp?: boolean;
	closeTimeoutMS?: number;
	hasIcon?: boolean;
	isOpen?: boolean;
	onRequestClose?: () => void;
	overlayClassName?: string;
	parentSelector?: () => {};
	portalClassName?: string;
	shouldCloseOnOverlayClick?: boolean;

}

export default class FlyModal extends React.Component<PropsI> {

	static defaultProps: Partial<PropsI> = {
		ariaHideApp: true,
		closeTimeoutMS: 0,
		hasIcon: false,
		isOpen: true,
		onRequestClose: FlyModal.onRequestClose,
		overlayClassName: styles.FlyModalOverlay,
		parentSelector: () => document.body,
		portalClassName: 'ReactModalPortal',
		shouldCloseOnOverlayClick: true,
	};

	static onRequestClose () {
		document.getElementsByClassName(styles.FlyModalOverlay)[0].classList.add('__FadeOut');

		// todo - crum: uncomment this line
		// ReactDOM.unmountComponentAtNode(document.getElementById('popup-container'))
		/* setTimeout used to wait for animation and to hack around "React DOM tree root should always have a node reference." warning */
		//setTimeout(() => ReactDOM.unmountComponentAtNode(document.getElementById('popup-container')), 210);
	}

	render () {
		return (
			<ReactModal
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
			</ReactModal>
		);
	}

}
