import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Switch.sass';
import Handler from '../../common/structures/Handler';

interface IProps extends IReactComponentProps {

	checked?: boolean;
	disabled?: boolean;
	flat?: boolean;
	label?: string;
	name?: string;
	noValue?: boolean;
	onChange?: Handler;
	tiny?: boolean;

}

interface IState {

	checked: boolean;

}

export default class Switch extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		checked: false,
	};

	constructor (props: IProps) {
		super(props);

		this.state = {
			checked: !!this.props.checked,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps (nextProps: IProps) {
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
