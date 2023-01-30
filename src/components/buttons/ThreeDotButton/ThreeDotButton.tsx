import * as React from 'react';
import classnames from 'classnames';
import { IButtonBaseProps, IButtonCommonProps } from '../_private/ButtonBase/ButtonBase';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import styles from './ThreeDotButton.scss';
import { DotsIcon } from '../../icons/Icons';

interface IThreeDotButtonProps extends IButtonCommonProps {
	noBG?: boolean;
	privateOptions?: IButtonBaseProps;
	bgOnHover?: boolean;
}

export const ThreeDotButton = (props: IThreeDotButtonProps) => {
	const { noBG, privateOptions, bgOnHover, className, ...restProps } = props;

	return (
		<PrimaryButton
			aria-label="Open context menu"
			className={classnames(className, {
				[styles.ThreeDot]: !noBG,
				[styles.ThreeDot_NoBG]: noBG && !bgOnHover,
				[styles.ThreeDot_BgOnHover]: bgOnHover,
			})}
			privateOptions={{ style: { padding: '6px' }, form: noBG ? 'text' : 'fill', ...privateOptions }}
			{...restProps}
		>
			<DotsIcon />
		</PrimaryButton>
	);
};
