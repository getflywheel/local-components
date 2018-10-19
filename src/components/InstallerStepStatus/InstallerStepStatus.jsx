import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircleSVG from '../../svg/circle.svg';
import ExclamationSVG from '../../svg/exclamation.svg';
import CompleteSVG from '../../svg/complete.svg';
import SpinnerSVG from '../../svg/spinner.svg';

export default class InstallerStepStatus extends Component {
	static propTypes = {
		ready: PropTypes.bool,
		inProgress: PropTypes.bool,
        requiresAttention: PropTypes.bool,
	};

	renderIcon () {
		if (!this.props.ready && !this.props.inProgress) {
			return <CircleSVG className="Circle" />;
		}

		if (this.props.ready) {
			return <CompleteSVG
				className="
					TID_InstallerStepStatus_Icon_Complete
					Complete
				"
			/>;
		}

		if (this.props.requiresAttention) {
			return <span className="SpinnerNotice">
				<ExclamationSVG className="Exclamation" />
				<SpinnerSVG className="Spinner" />
			</span>;
		}

		if (this.props.inProgress) {
			return <SpinnerSVG className="Spinner" />;
		}
	}

	render () {
		return (
			<span className="InstallerStepStatus">
				{this.renderIcon()}
			</span>
		);
	}
}
