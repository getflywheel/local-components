import * as React from 'react';
import classnames from 'classnames';
import * as Icons from './Icons';
import { Icons as IconsNamespace } from './Icons';
import Card from '../modules/Card/Card';
import InputSearch from '../inputs/InputSearch/InputSearch';
import { useState } from 'react';
import * as styles from './IconsStoriesAll.scss';
import Drawer from '../menus/Drawer/Drawer';
import { IconSvgMeta } from './helpers/withIconSvg';
import { Text } from '../text/Text/Text';
import { Title } from '../text/Title/Title';
import FlySelect from '../inputs/FlySelect/FlySelect';

const ReactDOM = require('react-dom');

// todo - crum: fix hit area for svg

export const IconsStoriesAll = () => {
	const [searchValue, set_searchInput] = useState('');
	const [selectedIconData, set_selectedIconData] = useState<
		{
			exportIconName: string,
			exportNamespaceIconName: string | undefined,
			Icon: React.FC,
			meta: IconSvgMeta,
		} | undefined
		>(undefined);
	const [showAdditionalProps, set_showAdditionalProps] = useState(false);
	const [additionalPropChanges, set_additionalPropChanges] = useState<{[propName: string]: any}>({});
	// use reflection to get all available icons
	const iconsPropKeys: PropertyKey[] = Reflect.ownKeys(Icons);
	const iconsNamespacePropKeys: PropertyKey[] = Reflect.ownKeys(IconsNamespace);
	const applyChangedAdditionalProps: {[propName: string]: any} = {};

	Object.entries(additionalPropChanges).map(([propName, propValue]) => {
		applyChangedAdditionalProps[propName] = propValue;
	})

	return (
		<div className={styles.IconsStoriesAll}>
			<div className={styles.IconsStoriesAll_Header}>
				<InputSearch
					onChange={(event) => set_searchInput(event.target.value)}
					placeholder="Filter by icon names and tags ..."
					value={searchValue}
				/>
			</div>
			<div className={styles.IconsStoriesAll_Content}>
				{iconsPropKeys.map((iconPropKey) => {
					// ignore if property key is not a string or is in exclusion list
					if (typeof iconPropKey !== 'string'
						|| [
							'Icons',
							'__esModule',
							'Symbol(Symbol.toStringTag)'
						].includes(iconPropKey as string)
					) {
						return;
					}

					const Icon = (Icons as any)[iconPropKey];
					const exportNamespaceIconName: string | undefined = iconsNamespacePropKeys.find(
						(key) => (IconsNamespace as any)[key] === Icon,
					) as string;
					const meta: IconSvgMeta = Icon.meta;

					// if (Icon.prototype?.constructor?.__docgenInfo?.props?.size) {
					// 	console.log('zzz123: ', Icon.prototype.constructor.__docgenInfo.props);
					// }

					// filter out non-matching icons if there is search criteria
					if (searchValue
						&& !iconPropKey.toLowerCase().includes(searchValue.toLowerCase())
						&& !exportNamespaceIconName.toLowerCase().includes(searchValue.toLowerCase())
						&& !meta?.tags?.join('`').toLowerCase().includes(searchValue.toLowerCase())
					) {
						return;
					}

					return (
						<button
							key={iconPropKey}
							className={classnames(
								styles.IconsStoriesAll_Card,
								{
									[styles.IconsStoriesAll_Card__Selected]: selectedIconData?.Icon === Icon,
								}
							)}
							onClick={() => {
								// clear out all additional prop value changes made
								set_additionalPropChanges({});
								// select clicked icon
								set_selectedIconData({
									exportIconName: iconPropKey,
									exportNamespaceIconName,
									Icon,
									meta
								});
							}}
						>
							<>
								<div className={styles.IconsStoriesAll_Card_Content}>
									<Icon />
								</div>
							</>
						</button>
					);
				})}
			</div>
			<div className={styles.IconsStoriesAll_Footer}>
				{!!selectedIconData
					? (
						<>
							{selectedIconData.meta.additionalProps && showAdditionalProps && (
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
											onClick={() => set_showAdditionalProps(!showAdditionalProps)}
										>
											additional props
											{' '}
											{showAdditionalProps ? '(-)' : '(+)'}
										</div>
									)}
									<Text className={styles.IconsStoriesAll_Details_Snippet}>
										{'<Icons.'}
										{selectedIconData.exportNamespaceIconName}
										{Object.entries(applyChangedAdditionalProps).map(([propName, propValue]) => {
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
										<selectedIconData.Icon {...applyChangedAdditionalProps} />
									</div>
								</div>
							</div>
						</>
					)
					: (
						<Text>Select an Icon to see how to use it</Text>
					)}
			</div>
		</div>
	);
};
