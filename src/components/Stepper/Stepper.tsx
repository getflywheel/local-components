import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import classnames from 'classnames';
import CompleteSVG from '../../svg/complete.svg';
import styles from './Stepper.sass';

export class Stepper extends React.Component<LocalComponentPropsI> {

	render () {
		return (
			<div
				className={classnames(
					styles.Stepper,
					{
						[styles.__Steps__2]: (this.props.children as React.ReactNode[]).length === 2,
						[styles.__Steps__3]: (this.props.children as React.ReactNode[]).length === 3,
					}
				)}>
				{this.props.children}
			</div>
		);
	}

}

interface StepPropsI extends LocalComponentPropsI {

	active: boolean;
	disabled: boolean;
	done: boolean;
	number: number;

}

export class Step extends React.Component<StepPropsI> {

	render () {
		return (
			<div
				className={classnames(
					styles.Step,
					{
						[styles.Step__Done]: this.props.done,
						[styles.Step__Active]: this.props.active,
						[styles.Step__Disabled]: this.props.disabled,
					}
				)}
			>
				{
					!this.props.done
						?
						<span>{this.props.number}</span>
						:
						<svg>{CompleteSVG}</svg>
				}
				{this.props.children}
			</div>
		);
	}
}
