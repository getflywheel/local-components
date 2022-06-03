import * as React from 'react';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import styles from './TitleBar.scss';
import classnames from 'classnames';
import { Container } from '../Container/Container';

interface IProps extends ILocalContainerProps {
	title?: string;
}

export const TitleBar = (props: IProps) => (
	<Container>
		<div
			className={classnames(
				styles.TitleBar,
				'TitleBar',
				props.className,
			)}
			id={props.id}
			style={props.style}
		>
			<div>
				{props.title}
			</div>
			{ props.children && (
				<div className={styles.TitleBar_Content}>
					{props.children}
				</div>
			)}
		</div>
	</Container>
);
