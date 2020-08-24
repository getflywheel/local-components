import * as React from 'react';
import classnames from 'classnames';
import * as styles from './BasicInput.scss';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';

interface IProps extends ILocalContainerProps {
	onChange?: any;
	value?: string;
}

export default class BasicInput extends React.Component<IProps> {
	constructor (props: IProps) {
		super(props);
	}

	render () {
		const {
			className,
			id,
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
					type='text'
					{...props}
				/>
			</div>
		);
	}
}
