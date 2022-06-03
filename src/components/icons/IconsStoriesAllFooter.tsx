import * as React from 'react';
import styles from './IconsStoriesAllFooter.scss';
import { Text } from '../text/Text/Text';
import FlySelect from '../inputs/FlySelect/FlySelect';
import { IconStoriesAllContext } from './IconsStoriesAll';
import { useContext, useEffect, useState } from 'react';
import CheckmarkIcon from './svgs/CheckmarkIcon';
import FileFolderClosedIcon from './svgs/FileFolderClosedIcon';
import FileFolderOpenedIcon from './svgs/FileFolderOpenedIcon';
import { Tooltip } from '../overlays/Tooltip/Tooltip';

export const IconsStoriesAllFooter = () => {
	const {
		additionalPropChanges,
		changedAdditionalProps,
		doShowAdditionalProps,
		selectedIconData,
		setAdditionalPropChanges,
		setDoShowAdditionalProps,
	} = useContext(IconStoriesAllContext);
	const [snippet, setSnippet] = useState('');
	const [useIndividualImportOption, setUseIndividualImportOption] = useState(true);
	const [doShowCopiedTimeoutRef, setDoShowCopiedTimeoutRef] = useState<NodeJS.Timeout | number | undefined>();

	const clearCopyTimeout = () => {
		if (doShowCopiedTimeoutRef) {
			clearTimeout(doShowCopiedTimeoutRef as number);
			setDoShowCopiedTimeoutRef(undefined);
		}
	}

	useEffect(() => {
		let snippetText = useIndividualImportOption
			? `<${selectedIconData?.exportIconName}`
			: `<Icons.${selectedIconData?.exportNamespaceIconName}`;

		Object.entries(changedAdditionalProps).map(([propName, propValue]) => {
			snippetText += ` ${propName}="${propValue}"`;
		});

		snippetText += ' />';
		setSnippet(snippetText);

		// if changing settings or the icon selected, make sure this hides
		clearCopyTimeout();

		return () => {
			clearCopyTimeout();
		}
	}, [changedAdditionalProps, selectedIconData, useIndividualImportOption]);

	const onClickCopyToClipboard = async() => {
		await navigator.clipboard.writeText(snippet);
		clearCopyTimeout();

		const timeout = setTimeout(() => {
			setDoShowCopiedTimeoutRef(undefined);
		}, 1500);

		setDoShowCopiedTimeoutRef(timeout);
	};

	return (
		<div className={styles.IconsStoriesAll_Footer}>
			{!!selectedIconData
				? (
					<>
						{selectedIconData.meta.additionalProps && doShowAdditionalProps && (
							<div className={styles.IconsStoriesAll_AdditionalProps}>
								{selectedIconData.meta.additionalProps.map((propData) => {
									return (
										<span
											key={propData.propName}
											className={styles.IconsStoriesAll_AdditionalProps_Container}
										>
											<Text className={styles.IconsStoriesAll_AdditionalProps_Label}>
												{propData.propName}:
											</Text>
											<FlySelect
												options={propData.options}
												onChange={(value) => setAdditionalPropChanges({
													...additionalPropChanges,
													...{
														[propData.propName]: value,
													}
												})}
												value={propData.default}
											/>
										</span>
									)
								})}
							</div>
						)}
						<div className={styles.IconsStoriesAll_Details}>
							<div className={styles.IconsStoriesAll_Details_Col1}>
								{selectedIconData.meta.additionalProps && (
									<div
										className={styles.IconsStoriesAll_Details_PropsBtn}
										onClick={() => setDoShowAdditionalProps(!doShowAdditionalProps)}
									>
										additional props
										{' '}
										{doShowAdditionalProps ? '(-)' : '(+)'}
									</div>
								)}
								<Text
									className={styles.IconsStoriesAll_Details_Snippet}
									onClick={onClickCopyToClipboard}
								>
									{snippet}
									{doShowCopiedTimeoutRef && (
										<div className={styles.IconsStoriesAll_Details_Snippet_CopyToast}>
											<CheckmarkIcon size={'s'} />
											Copied to clipboard
										</div>
									)}
								</Text>
							</div>
							<div className={styles.IconsStoriesAll_Details_VerticalDivider}/>
							<div className={styles.IconsStoriesAll_Details_Col2}>
								<Tooltip
									content={<div>Import by namespace</div>}
									position="top"
								>
									<div onClick={() => setUseIndividualImportOption(!useIndividualImportOption)}>
										{useIndividualImportOption
											? (
												<FileFolderOpenedIcon />
											)
											: (
												<FileFolderClosedIcon />
											)
										}
									</div>
								</Tooltip>
							</div>
							<div className={styles.IconsStoriesAll_Details_VerticalDivider}/>
							<div className={styles.IconsStoriesAll_Details_Col3}>
								<Text
									className={styles.IconsStoriesAll_Details_PreviewText}
									size="caption"
									tag="div"
								>
									preview
								</Text>
								<div className={styles.IconsStoriesAll_Details_Preview}>
									<selectedIconData.Icon {...changedAdditionalProps} />
								</div>
							</div>
						</div>
					</>
				)
				: (
					<Text>Select an Icon to see how to use it</Text>
				)}
		</div>
	);
};
