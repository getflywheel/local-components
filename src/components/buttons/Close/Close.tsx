import * as React from 'react';
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import CloseBigSVG from '../../../svg/close--big.svg';
import * as styles from './Close.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { CloseIcon } from '../../icons/Icons';
import { ButtonBase } from '../_private/ButtonBase/ButtonBase';

interface IProps extends IReactComponentProps {
	position?: 'absolute' | 'static';
	onClick?: FunctionGeneric;
}

const Close: React.FC<IProps> = (props: IProps) => {
	const { position = 'absolute', onClick, className, ...otherProps } = props;

	return (
		<ButtonBase
			tabIndex={0}
			form="text"
			color="green"
			padding="none"
			onClick={onClick}
			className={classnames(
				styles.Close,
				'Close', // this also needs to be globally accessible so other component styles can reference it
				{
					[styles.Close__PositionAbsolute]: position === 'absolute',
				},
				className
			)}
			{...otherProps}
		>
			<CloseIcon size="l" />
		</ButtonBase>
	);
};

export default Close;
