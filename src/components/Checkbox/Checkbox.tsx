import * as React from 'react';
import classnames from 'classnames';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import * as styles from './Checkbox.sass';
import Handler from '../../common/structures/Handler';
import CheckmarkSVG from '../../svg/checkmark--sm';
import CheckMixedSVG from '../../svg/checkmark--mixed';

interface IProps extends IReactComponentProps {
	checked?: boolean | 'mixed';
	disabled?: boolean;
	label?: string;
	onChange: Handler;
}

interface IState {
	checked: boolean | 'mixed';
}

export default class Checkbox extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		checked: false,
		disabled: false,
	};

	constructor(props: IProps) {
		super(props);

		this.state = {
			checked: props.checked === undefined ? false : props.checked,
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
		const checked: boolean = this.state.checked === 'mixed' ? true : !this.state.checked;

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
						[styles.Checkbox__Checked]: this.state.checked === true,
						[styles.Checkbox__CheckMixed]: this.state.checked === 'mixed',
						[styles.Checkbox__Disabled]: this.props.disabled,
					},
				)}
			>
				<label className={styles.Checkbox_Label}>
					<input
						type="checkbox"
						className={styles.Checkbox_InputHidden}
						checked={this.state.checked === true}
						disabled={this.props.disabled}
						onChange={this._handleChange}
					/>
					<div
						className={styles.Checkbox_GraphicsCont}
					>
						{this.state.checked === true && (
							<CheckmarkSVG className={styles.Checkbox_Checkmark} />
						)}
						{this.state.checked === 'mixed' && (
							<CheckMixedSVG className={styles.Checkbox_CheckmarkMixed} />
						)}
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
