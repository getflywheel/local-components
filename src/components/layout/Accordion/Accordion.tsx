import * as React from 'react';
import classnames from 'classnames';
import * as styles from './Accordion.scss';
import { Container } from '../../modules/Container/Container';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';

export interface Props extends ILocalContainerProps {

}

const Accordion: React.FC<Props> = ({
	children,
	className,
	container,
	id,
	style,
}) => (
	<Container {...container}>
		<div
			className={classnames(
				styles.Accordion,
				'Accordion',
				className,
			)}
			id={id}
			style={style}
		>
			{ children && (
				<div>
					{children}
				</div>
			)}
		</div>
	</Container>
);

export default Accordion;
