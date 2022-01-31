import * as React from 'react';
import classnames from 'classnames';
import { Container } from '../../modules/Container/Container';
import * as styles from './RefreshButton.scss';
import { RefreshIcon } from '../../icons/svgs/RefreshIcon';
import { TextButton, ITextButtonProps } from '../TextButton/TextButton';

export const RefreshButton = (props: ITextButtonProps) => {
	const {
		className,
		onClick,
		disabled,
		container,
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
		<Container {...container}>
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
		</Container>
	)
};
