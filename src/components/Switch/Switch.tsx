import React from 'react';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';
import classnames from 'classnames';
import styles from './Switch.sass';

interface PropsI extends ReactComponentPropsI {

	checked?: boolean;
	disabled?: boolean;
	flat?: boolean;
	label?: string;
	name?: string;
	noValue?: boolean;
	onChange?: (...params: any[]) => any;
	tiny?: boolean;

}

interface StateI {

	checked: boolean;

}

export default class Switch extends React.Component<PropsI, StateI> {

	static defaultProps: Partial<PropsI> = {
		checked: false,
	};

	constructor (props: PropsI) {
		super(props);

		this.state = {
			checked: !!this.props.checked,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps (nextProps: PropsI) {
		if ('checked' in nextProps) {
			this.setState({ checked: !!nextProps.checked });
		}
	}

	handleChange () {
		const checked = !this.state.checked;

		this.setState({ checked });

		if (this.props.onChange) {
			this.props.onChange(this.props.name, checked);
		}
	}

	render () {
		return (
			<div
				className={classnames(
					styles.Switch,
					{
						[styles.Switch__Tiny]: this.props.tiny,
						[styles.Switch__Flat]: this.props.flat,
					},
				)}
			>
				{
					this.props.label && (
						<label>{this.props.label}</label>
					)
				}
				<input
					type="checkbox"
					defaultChecked={this.state.checked}
					disabled={this.props.disabled || this.props.noValue}
					onChange={this.handleChange}
					data-no-value={this.props.noValue}
				/>
			</div>
		);
	}

}
