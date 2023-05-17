import * as React from 'react';
import classNames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import ProgressBar from '../ProgressBar/ProgressBar';
import { TextButton } from '../../buttons/TextButton/TextButton';
import { FunctionGeneric } from '../../../common/structures/Generics';
import styles from './Downloader.scss';

const { ipcRenderer } = require('electron');

export interface DownloaderItemProps extends IReactComponentProps {
	cancelText?: string;
	downloaded?: number;
	itemSize?: number;
	label?: string;
	onCancel?: FunctionGeneric;
	onCancelIPCEvent?: string;
	progress?: number;
	progressText?: string | number | boolean;
	queueIndex?: number;
	queueLength?: number;
	showCancel?: boolean;
	showEllipsis?: boolean;
	stripes?: boolean;
}

const DownloaderItem = (props: DownloaderItemProps) => {
	const {
		cancelText = 'Cancel download',
		showEllipsis = true,
		downloaded,
		itemSize,
		label,
		onCancel,
		onCancelIPCEvent,
		progress,
		progressText,
		queueIndex,
		queueLength,
		showCancel,
		stripes,
		className,
		style,
		id,
	} = props;

	const cancelOnClick = (...args: any[]) => {
		if (onCancelIPCEvent) {
			ipcRenderer.send(onCancelIPCEvent);
		}

		if (onCancel) {
			return onCancel(...args);
		}
	};

	return (
		<li className={classNames(styles.DownloaderItem, className)} id={id} style={style}>
			<div className={styles.DownloaderItem_Content_Top}>
				<span className={styles.DownloaderItemLabel}>
					{label}
					{queueLength && queueLength > 1 && ` (${(queueIndex || 0) + 1} of ${queueLength})`}
					{showEllipsis && '...'}
				</span>
			</div>
			<ProgressBar className={styles.DownloaderProgressBar} progress={progress} stripes={stripes} />
			<div className={styles.DownloaderItem_Content_Bottom}>
				{(progressText || typeof itemSize === 'number') && (
					<span className={styles.DownloadSizeProgress}>
						{progressText || `${downloaded || 0}/${itemSize} MB`}
					</span>
				)}
				{showCancel && (
					<TextButton
						className={styles.DownloaderItemCancelButton}
						privateOptions={{ padding: 'none' }}
						onClick={cancelOnClick}
					>
						{cancelText}
					</TextButton>
				)}
			</div>
		</li>
	);
};

export default DownloaderItem;

export interface DownloaderOverlayProps extends IReactComponentProps {
	downloaderItems: Array<React.ReactNode>;
}

export const DownloaderOverlay = (props: DownloaderOverlayProps) => {
	const { downloaderItems, ...restProps } = props;

	return (
		// Include global DownloaderOverlay classname for Playwright tests
		<div className={classNames('DownloaderOverlay', styles.DownloaderOverlay)} {...restProps}>
			<ul className={styles.Downloader}>
				{downloaderItems.filter(React.isValidElement).map((item, index) =>
					React.cloneElement(item, {
						key: (item as React.ReactElement<DownloaderItemProps>).props.label ?? index,
					})
				)}
			</ul>
		</div>
	);
};
