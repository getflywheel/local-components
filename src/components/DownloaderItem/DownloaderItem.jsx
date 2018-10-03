import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';
import PropTypes from 'prop-types';
import { ipcRenderer } from 'electron';

export default class DownloaderItem extends Component {

	static propTypes = {
		label: PropTypes.string,
		showEllipsis: PropTypes.bool,
		showCancel: PropTypes.bool,
		onCancel: PropTypes.func,
		queueLength: PropTypes.number,
		queueIndex: PropTypes.number,
		progress: PropTypes.number,
		progressText: PropTypes.any,
		itemSize: PropTypes.number,
		downloaded: PropTypes.number,
		stripes: PropTypes.bool,
		cancelText: PropTypes.string,
		onCancelIPCEvent: PropTypes.string,
	};

	static defaultProps = {
		showEllipsis: true,
		cancelText: 'Cancel Download',
	};

	constructor (props) {
		super(props);

		this.cancelOnClick = this.cancelOnClick.bind(this);
	}

	cancelOnClick (...args) {
		if (this.props.onCancel) {
			return this.props.onCancel(...args);
		}

		if (this.props.onCancelIPCEvent) {
			return ipcRenderer.send(this.props.onCancelIPCEvent);
		}
	}

	render () {
		return (
			<li className="DownloaderItem">
				<span>
					{this.props.label}
					{this.props.queueLength > 1 && ` (${this.props.queueIndex + 1} of ${this.props.queueLength})`}
					{this.props.showEllipsis && '...'}
				</span>

				<ProgressBar progress={this.props.progress} stripes={this.props.stripes} />

				<span className="DownloadSizeProgress">
					{
						this.props.progressText ?
							this.props.progressText
							:
							!isNaN(this.props.itemSize)
								?
								`${!isNaN(this.props.downloaded) ? this.props.downloaded : 0}/${this.props.itemSize} MB`
								:
								<span>&nbsp;</span>
					}
				</span>

				{
					this.props.showCancel && <button className="--Green" onClick={this.cancelOnClick}>{this.props.cancelText}</button>
				}
			</li>
		);
	}
}
