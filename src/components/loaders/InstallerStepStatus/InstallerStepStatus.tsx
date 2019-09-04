import * as React from 'react';
import CircleSVG from '../../../svg/circle';
import ExclamationSVG from '../../../svg/exclamation';
import CompleteSVG from '../../../svg/complete';
import SpinnerSVG from '../../../svg/spinner';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {

	inProgress?: boolean;
	ready?: boolean;
	requiresAttention?: boolean;

}

export default class InstallerStepStatus extends React.Component<IProps> {

	renderIcon () {
		if (!this.props.ready && !this.props.inProgress) {
			return (
				<CircleSVG className="Circle" />
			);
		}

		if (this.props.ready) {
			return (
				<CompleteSVG
					className="
						TID_InstallerStepStatus_Icon_Complete
						Complete
					"
				/>
			);
		}

		if (this.props.requiresAttention) {
			return (
				<span className="SpinnerNotice">
					<ExclamationSVG className="Exclamation" />
					<SpinnerSVG className="Spinner" />
				</span>
			);
		}

		if (this.props.inProgress) {
			return (
				<SpinnerSVG className="Spinner" />
			);
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
