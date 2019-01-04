import React from 'react';
import classnames from 'classnames';
import styles from './FlyLargeConfirm.sass';
import CheckSVG from '../../svg/checkmark--big';
import IReactComponentProps from '../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {

	bodyText?: any;
	buttonText?: string;
	onConfirm?: (...params: any[]) => any;

}

interface IState {

	confirmed: boolean;

}

export default class FlyLargeConfirm extends React.Component<IProps, IState> {

	constructor (props: IProps) {
		super(props);

		this.state = {
			confirmed: false,
		};

		this.onConfirm = this.onConfirm.bind(this);
	}

	onConfirm () {
		this.setState({ confirmed: true });

		if (this.props.onConfirm) {
			this.props.onConfirm();
		}
	}

	render () {
		return (
			<div
				className={classnames(
					styles.FlyLargeConfirm,
					{
						[styles.FlyLargeConfirm__Confirmed]: this.state.confirmed,
					},
				)}
			>
				<p>{this.props.bodyText}</p>

				<button
					className="__Pill"
					onClick={this.onConfirm}
					disabled={this.state.confirmed}
				>
					{this.state.confirmed && (
						<CheckSVG />
					)}
					{this.state.confirmed ? 'Confirmed' : this.props.buttonText}
				</button>
			</div>
		);
	}

}
