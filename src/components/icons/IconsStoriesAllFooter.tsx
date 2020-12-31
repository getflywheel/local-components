import * as React from 'react';
import * as styles from './IconsStoriesAllFooter.scss';
import { Text } from '../text/Text/Text';
import FlySelect from '../inputs/FlySelect/FlySelect';
import { IconStoriesAllContext } from './IconsStoriesAll';

export const IconsStoriesAllFooter = () => {
	return (
		<IconStoriesAllContext.Consumer>
			{({
				additionalPropChanges,
				changedAdditionalProps,
				selectedIconData,
				set_additionalPropChanges,
				set_doShowAdditionalProps,
				doShowAdditionalProps,
			}) => (
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
												onChange={(value) => set_additionalPropChanges({
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
												onClick={() => set_doShowAdditionalProps(!doShowAdditionalProps)}
											>
												additional props
												{' '}
												{doShowAdditionalProps ? '(-)' : '(+)'}
											</div>
										)}
										<Text className={styles.IconsStoriesAll_Details_Snippet}>
											{'<Icons.'}
											{selectedIconData.exportNamespaceIconName}
											{Object.entries(changedAdditionalProps).map(([propName, propValue]) => {
												return (
													<span key={propName}>
												{' '}
														{propName}
														{'="'}
														{propValue}
														{'"'}
											</span>
												)
											})}
											{' />'}
										</Text>
									</div>
									<div className={styles.IconsStoriesAll_Details_VerticalDivider} />
									<div className={styles.IconsStoriesAll_Details_Col2}>
										<Text
											className={styles.IconsStoriesAll_Details_PreviewText}
											size="caption"
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
			)}
		</IconStoriesAllContext.Consumer>
	);
};
