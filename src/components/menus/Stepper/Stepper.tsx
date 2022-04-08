import * as React from 'react';
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import CompleteSVG from '../../../svg/complete.svg';
import * as styles from './Stepper.sass';

interface IProps extends IReactComponentProps {
	children: React.ReactNode;
}

export const Stepper: React.FC<IProps> = ({ children, className, ...otherProps }: IProps) => (
	<div className={classnames(styles.Stepper, className)} {...otherProps}>
		{children}
	</div>
);

interface IStepProps {
	children?: React.ReactNode;
	active?: boolean;
	disabled?: boolean;
	done?: boolean;
	number: number;
}

export const Step: React.FC<IStepProps> = ({ done, active, disabled, number, children }: IStepProps) => {
	return (
		<div
			className={classnames(styles.Step, {
				[styles.Step__Done]: done,
				[styles.Step__Active]: active,
				[styles.Step__Disabled]: disabled,
			})}
		>
			{!done ? <span>{number}</span> : <CompleteSVG />}
			{children}
		</div>
	);
};
