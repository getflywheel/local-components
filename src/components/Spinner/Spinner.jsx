import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpinnerSVG from "../../svg/spinner.svg";
import styles from "./Spinner.sass";

export default class Spinner extends Component {
	static propTypes = {
		lines: PropTypes.number,
		ellipsis: PropTypes.node,
	};

	static defaultProps = {
		lines: 1,
		ellipsis: '...',
	};

	render () {
		return (
			<SpinnerSVG className={styles.Spinner} />
		);
	}
}
