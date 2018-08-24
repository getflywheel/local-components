import React, { Component } from 'react';
import CloseBigSVG from '../../svg/close--big.svg';
import PropTypes from 'prop-types';

export default class Close extends Component {

	static propTypes = {
		onClick: PropTypes.func.isRequired,
	};

	render () {
		return (
			<span className="Close" onClick={this.props.onClick}><CloseBigSVG /></span>
		);
	}

}
