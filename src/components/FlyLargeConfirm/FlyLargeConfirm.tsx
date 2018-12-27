import React from 'react';
import classnames from 'classnames';
import styles from './FlyLargeConfirm.sass';
import CheckSVG from '../../svg/checkmark--big.svg';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';

interface PropsI extends LocalComponentPropsI {

	bodyText?: any;
	buttonText?: string;
	onConfirm?: (...params: any[]) => any;

}

interface StateI {

	confirmed: boolean;

}

export default class FlyLargeConfirm extends React.Component<PropsI, StateI> {

	constructor (props: PropsI) {
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
					}
				)}
			>
				<p>{this.props.bodyText}</p>

				<button
					className="__Pill"
					onClick={this.onConfirm}
					disabled={this.state.confirmed}
				>
					{this.state.confirmed && (
						<svg>{CheckSVG}</svg>
					)}
					{this.state.confirmed ? 'Confirmed' : this.props.buttonText}
				</button>
			</div>
		);
	}

}
