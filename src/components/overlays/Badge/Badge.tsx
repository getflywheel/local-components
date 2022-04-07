import * as React from 'react';
import classnames from 'classnames';
import styles from './Badge.scss';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

interface IBadgeProps extends IReactComponentProps {
	className?: string;
	label?: string;
	style?: object;
	tag?: string;
	variant?: 'gray' | 'yellow';
	wiggle?: boolean;
	breathe?: boolean;
}

const Badge: React.FC<IBadgeProps> = ({
	className,
	label,
	style,
	tag = 'div',
	variant = 'gray',
	wiggle = false,
	breathe = false,
	...otherProps
}: IBadgeProps) => {
	const Tag: any = tag ?? 'div';

	return (
		<Tag
			className={classnames(
				styles.Badge,
				{
					[styles.Badge__Yellow]: variant === 'yellow',
					[styles.Badge__Wiggle]: wiggle,
					[styles.Badge__Breathe]: breathe,
				},
				className
			)}
			style={style}
			{...otherProps}
		>
			{label}
		</Tag>
	);
};

export default Badge;
