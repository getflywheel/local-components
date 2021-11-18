import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import { Container } from '../../modules/Container/Container';
import CircleWarnIcon from '../../icons/svgs/CircleWarnIcon';
import { CloseSmallIcon } from '../../icons/svgs/CloseSmallIcon';
import ILocalContainerProps from '../../../common/structures/ILocalContainerProps';
import * as styles from './Alert.scss';

export interface IAlertProps extends ILocalContainerProps {
	/** If true, close icon will be present, component will return null on click*/
	dismissable?: boolean;
	/** Function called when dismissing alert. If alert will need to be shown again, use this to update the "show" prop accordingly*/
	onDismiss?: Function;
	/** 'success' = green (default), 'warning' = red*/
	type?: 'success' | 'warning';
	/** Used to show alert, defaults to true. Dismissed alerts can be redisplayed by updating this prop from false to true*/
	show?: boolean;
}

const Alert = (props: IAlertProps) => {
	const {
		dismissable,
		onDismiss,
		type = 'success',
		show = true,
		id,
		style,
		className,
		container,
		children,
		...otherProps
	} = props;

	const [showAlert, setShowAlert] = useState(show);

	const handleDismiss = () => {
		setShowAlert(false);
		if (onDismiss) onDismiss();
	}

	useEffect(() => {
		setShowAlert(show);
	}, [show])


	if (showAlert) {
		return (
			<Container {...container}>
				<div
					id={id}
					style={style}
					className={classnames(styles.Alert, className, {
						[styles.__warn]: type === 'warning',
					})}
					{...otherProps}
				>
					<div className={styles.Alert_wrapper}>
						<div className={styles.Alert_icon}>
							<CircleWarnIcon />
						</div>
						<div style={{ padding: '20px' }}>
							{children}
						</div>
					</div>
					{dismissable && (
						<div className={styles.Alert_close} onClick={handleDismiss}>
							<CloseSmallIcon />
						</div>
					)}
				</div>
			</Container>
		);
	} else return null;
};

export default Alert;
