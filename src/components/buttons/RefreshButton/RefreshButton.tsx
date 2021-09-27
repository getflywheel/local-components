import * as React from 'react';
import classnames from 'classnames';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import { Container } from '../../modules/Container/Container';
import * as styles from './RefreshButton.scss';
import { RefreshIcon } from '../../icons/svgs/RefreshIcon';

export interface IRefreshButtonProps extends ILocalContainerProps {
	disabled?: boolean;
}

export const RefreshButton = (props: IRefreshButtonProps) => {
	const {
		id,
		className,
		onClick,
		style,
		disabled,
	} = props;

	const [clicked, setClicked] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!clicked && !disabled) {
			setClicked(true);
			setTimeout( () => setClicked(false), 550)
			onClick(e);
		}
	};

	return (
		<Container>
			<button
				onClick={handleClick}
				className={classnames(
					styles.RefreshButton,
					className,
					{
						[styles.spin]: clicked && !disabled,
						[styles.disabled]: disabled,
					}
				)}
				id={id}
				style={style}
			>
				<RefreshIcon />
			</button>
		</Container>
	)
};
