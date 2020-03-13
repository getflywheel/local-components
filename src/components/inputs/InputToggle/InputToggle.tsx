import * as React from 'react';
import classnames from 'classnames';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';

interface IProps extends ILocalContainerProps {
	onChange?: any;
	value?: string;
}

export default class InputToggle extends React.Component<IProps> {

	constructor (props: IProps) {
		super(props);
	}


	render () {
		const { className, ...props } = this.props;

		return (
			<div
				className={classnames(
					'PasswordToggle',
					this.props.className,
				)}
			>
				<input
					type='text'
					className={className ? `PasswordToggleInput ${className}` : 'PasswordToggleInput'}
					{...props}
				/>
			</div>
		);
	}

}
