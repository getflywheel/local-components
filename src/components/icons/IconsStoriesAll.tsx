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
	// use reflection to get all available icons
	const iconsPropKeys: PropertyKey[] = Reflect.ownKeys(Icons);
	const iconsNamespacePropKeys: PropertyKey[] = Reflect.ownKeys(IconsNamespace);

	function onClick (Icon: any) {
		console.log('selectedIcon: ', Icon);
	}

	return (
		<div>
			<div className={styles.IconsStoriesAll_InputSearch_Container}>
				<InputSearch
					onChange={(event) => set_searchInput(event.target.value)}
					placeholder="Filter by icon names and tags ..."
					value={searchValue}
				/>
			</div>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
						&& !meta?.displayName?.toLowerCase().includes(searchValue.toLowerCase())
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
							onClick={() => (
								set_selectedIconData({
									exportIconName: iconPropKey,
									exportNamespaceIconName,
									Icon,
									meta
								})
							)}
						>
							<>
								<div className={styles.IconsStoriesAll_Card_Content}>
									{/*todo - crum: remove*/}
									<Icon className={styles.DELETE_THIS} />
								</div>
								{/*<Title size="caption">*/}
								{/*	{iconName}*/}
								{/*</Title>*/}
							</>
						</button>
					);
				})}
			</div>
			<div>
				<Drawer show align="left">
					{!!selectedIconData
						? (
							<div className={styles.IconsStoriesAll_Details}>
								<div className={styles.IconsStoriesAll_Details_Col1}>
									<Title
										className={styles.IconsStoriesAll_Details_IconName}
										size="s"
									>
										{selectedIconData.meta.displayName}
									</Title>
									<Text className={styles.IconsStoriesAll_Details_Snippet}>
										{'<Icons.'}
										{selectedIconData.exportNamespaceIconName}
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
										<selectedIconData.Icon />
									</div>
								</div>
							</div>
						)
						: (
							<span>Select an Icon to see how to use it</span>
						)}
				</Drawer>
			</div>
		</div>
	);
};
