import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const remote = require('electron').remote;
const dialog = remote.dialog;
const formatHomePath = remote.require('./helpers/format-home-path').default;

export default class BrowseInput extends Component {
	static propTypes = {
		dialogTitle: PropTypes.string,
		dialogProperties: PropTypes.array,
		defaultPath: PropTypes.string,
		onChange: PropTypes.func,
		value: PropTypes.string,
		placeholder: PropTypes.string,
	};

	constructor (props) {
		super(props);

		this.state = {
			value: this.props.value || '',
		};

		this.browseFolder = this.browseFolder.bind(this);
	}

	componentWillReceiveProps (nextProps) {
		if ('value' in nextProps) {
			this.setState({ value: nextProps.value });
		}
	}

	browseFolder () {

		dialog.showOpenDialog(remote.getCurrentWindow(), {
			'title': this.props.dialogTitle,
			'defaultPath': formatHomePath(this.state.value || this.props.defaultPath),
			'properties': this.props.dialogProperties,
		}, (paths) => {
			if (!paths) {
				return;
			}

			const value = paths[0];

			if (this.props.onChange && this.props.onChange.call(this, value) === false) {
				return false;
			}

			this.setState({ value });
		});

	}

	render () {
		return (
			<div className="BrowseInput">
				<span
					className={classnames({ '--Placeholder': this.props.placeholder && !this.state.value })}>{this.state.value || this.props.placeholder}</span>

				<button className="--Inline --Green --MarginLeft_5" onClick={this.browseFolder}>Browse</button>
			</div>
		);
	}
}
