import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './BrowseInput.sass';

// const remote = require('electron').remote;
// const dialog = remote.dialog;
// const formatHomePath = remote.require('./helpers/format-home-path').default;

export default class BrowseInput extends React.Component {
	static propTypes = {
		dialogTitle: PropTypes.string,
		dialogProperties: PropTypes.array,
		defaultPath: PropTypes.string,
		onChange: PropTypes.func,
		value: PropTypes.string,
		placeholder: PropTypes.string,
		isInline: PropTypes.bool,
		isFormInput: PropTypes.bool,
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
		// dialog.showOpenDialog(remote.getCurrentWindow(), {
		// 	'title': this.props.dialogTitle,
		// 	'defaultPath': formatHomePath(this.state.value || this.props.defaultPath),
		// 	'properties': this.props.dialogProperties,
		// }, (paths) => {
		// 	if (!paths) {
		// 		return;
		// 	}
		//
		// 	const value = paths[0];
		//
		// 	if (this.props.onChange && this.props.onChange.call(this, value) === false) {
		// 		return false;
		// 	}
		//
		// 	this.setState({ value });
		// });
	}

	render () {
		return (
			<div className={classnames(
				styles.BrowseInput,
				{
					[styles.BrowseInput__Inline]: this.props.isInline,
					[styles.BrowseInput__FormInput]: this.props.isFormInput,
				}
			)}>
				<span className={classnames({
					[styles.BrowseInput_Placeholder]: this.props.placeholder && !this.state.value
				})}>
					{this.state.value || this.props.placeholder}
				</span>
				<button className="__Inline __Green __MarginLeft_5" onClick={this.browseFolder}>Browse</button>
			</div>
		);
	}
}
