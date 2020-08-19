import * as React from 'react';
import classnames from 'classnames';
import EyeSVG from '../../../svg/eye.svg';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';

interface IProps extends ILocalContainerProps {
	onChange?: any;
	value?: string;
}

interface IState {
	inputType: 'password' | 'text';
}

export default class InputPasswordToggle extends React.Component<IProps, IState> {

	constructor (props: IProps) {
		super(props);

		this.state = {
			inputType: 'password',
		};

		this.toggleType = this.toggleType.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	toggleType () {
		this.setState({
			inputType: this.state.inputType === 'password' ? 'text' : 'password',
		});
	}

	onKeyDown (e: any) {
		if (e.key === 'Enter'){
			this.toggleType();
		}
	}

	render () {
		const { className, ...props } = this.props;

		return (
			<div
				className={classnames(
					'PasswordToggle',
					`PasswordToggle__${this.state.inputType}`,
					this.props.className,
				)}
			>
				<input
					type={this.state.inputType}
					className={className ? `PasswordToggleInput ${className}` : 'PasswordToggleInput'}
					{...props}
				/>
				<span
					tabIndex={0}
					className="Eye"
					onClick={this.toggleType}
					onKeyDown={this.onKeyDown}
				>
					<EyeSVG />
				</span>
			</div>
		);
	}

}
