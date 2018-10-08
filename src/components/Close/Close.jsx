import React, { Component } from 'react';
import CloseBigSVG from '../../svg/close--big.svg';
import PropTypes from 'prop-types';
import styles from './Close.sass';

export default class Close extends Component {

	static propTypes = {
		onClick: PropTypes.func.isRequired,
	};

	render () {
		return (
			<span
				className={styles.Close}
				onClick={this.props.onClick}
			>
				<CloseBigSVG />
			</span>
		);
	}

}
