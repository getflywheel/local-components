import * as React from 'react';
import classnames from 'classnames';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import * as styles from './Checkbox.sass';
import Handler from '../../common/structures/Handler';
import CheckmarkSVG from '../../svg/checkmark--sm';

interface IProps extends IReactComponentProps {
	checked?: boolean;
	disabled?: boolean;
	label?: string;
	onChange: Handler;
}

interface IState {
	checked: boolean;
	disabled: boolean;
}

export default class Checkbox extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		checked: false,
		disabled: false,
	};

	constructor(props: IProps) {
		super(props);

		this.state = {
			checked: !!props.checked,
			disabled: !!props.disabled,
		};
	};

	componentWillReceiveProps (nextProps: IProps) {
		if (nextProps.checked) {
			this.setState({
				checked: nextProps.checked,
			});
		}
	}

	protected _handleChange = () => {
		const checked: boolean = !this.state.checked;

		this.setState({
			checked,
		});

		if (this.props.onChange) {
			this.props.onChange(checked);
		}
	};

	render() {
		return (
			<div
				className={classnames(
					styles.Checkbox,
					{
						[styles.Checkbox__Checked]: this.state.checked,
						[styles.Checkbox__Disabled]: this.state.disabled,
					},
				)}
			>
				<label className={styles.Checkbox_Label}>
					<input
						type="checkbox"
						className={styles.Checkbox_InputHidden}
						checked={this.state.checked}
						disabled={this.props.disabled}
						onChange={this._handleChange}
					/>
					<div
						className={styles.Checkbox_GraphicsCont}
					>
						<CheckmarkSVG className={styles.Checkbox_Checkmark} />
					</div>
					{this.props.label !== undefined && (
						<div className={styles.Checkbox_LabelContents}>
							{this.props.label}
						</div>
					)}
				</label>
			</div>
		);
	}

}
