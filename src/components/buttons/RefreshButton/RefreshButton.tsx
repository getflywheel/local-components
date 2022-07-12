import * as React from 'react';
import classnames from 'classnames';
import styles from './RefreshButton.scss';
import RefreshIcon from '../../icons/svgs/RefreshIcon';
import { TextButton, ITextButtonProps } from '../TextButton/TextButton';

export const RefreshButton = (props: ITextButtonProps) => {
	const {
		className,
		onClick,
		disabled,
		...otherProps
	} = props;

	const [clicked, setClicked] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!clicked && !disabled) {
			setClicked(true);
			// Set a timeout equal to the length of the spin animation/transition
			setTimeout( () => setClicked(false), 550)
			onClick?.(e);
		}
	};

	return (
		<TextButton
			onClick={handleClick}
			className={classnames(
				styles.RefreshButton,
				className,
				{ [styles.spin]: clicked && !disabled }
			)}
			disabled={disabled}
			privateOptions={{ padding: 'none' }}
			rightIcon={RefreshIcon}
			{...otherProps}
		/>
	)
};
