import React, { Component } from 'react';

export default class SiteInfoInnerPane extends Component {
	render () {
		const propsWithoutChildren = { ...this.props };
		delete propsWithoutChildren.children;

		return (
			<div className="SiteInfoInnerPane" {...propsWithoutChildren}>
				{this.props.children}
			</div>
		);
	}
}
