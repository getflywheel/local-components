import * as React from 'react';
import classnames from 'classnames';
import * as styles from './BasicInput.scss';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';

export interface IBasicInputProps extends ILocalContainerProps {
	name?: string;
	onChange?: any;
	value?: string;
	minlength?: number;
	maxlength?: number;
	list?: string;
	pattern?: string;
	placeholder?: string;
	readonly?: boolean;
	size?: number;
	spellcheck?: boolean;
}

export default class BasicInput extends React.Component<IBasicInputProps> {
	constructor (props: IBasicInputProps) {
		super(props);
	}

	render () {
		const {
			className,
			id,
			name,
			style,
			...props
		} = this.props;

		return (
			<div
				className={classnames(
					'BasicInput',
					styles.BasicInput,
					this.props.className,
				)}
				id={id}
				style={style}
			>
				<input
					name={name}
					type='text'
					{...props}
				/>
			</div>
		);
	}
}
