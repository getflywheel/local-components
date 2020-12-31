import * as React from 'react';
import classnames from 'classnames';
import * as Icons from './Icons';
import { Icons as IconsNamespace } from './Icons';
import InputSearch from '../inputs/InputSearch/InputSearch';
import { useContext, useState } from 'react';
import * as styles from './IconsStoriesAll.scss';
import { IconSvgStoryMeta } from './helpers/withIconSvg';
import { Text } from '../text/Text/Text';
import FlySelect from '../inputs/FlySelect/FlySelect';
import { IconsStoriesAllFooter } from './IconsStoriesAllFooter';

type AdditionalPropChanges = {[propName: string]: any};

interface IconStoriesAllContextType {
	additionalPropChanges: AdditionalPropChanges;
	changedAdditionalProps: AdditionalPropChanges;
	selectedIconData?: {
		exportIconName: string,
		exportNamespaceIconName: string | undefined,
		Icon: React.FC,
		meta: IconSvgStoryMeta,
	};
	set_additionalPropChanges: (value: AdditionalPropChanges) => void,
	set_doShowAdditionalProps: (value: IconStoriesAllContextType['doShowAdditionalProps']) => void,
	doShowAdditionalProps: boolean;
}

export const IconStoriesAllContext = React.createContext<IconStoriesAllContextType>({
	additionalPropChanges: {},
	changedAdditionalProps: {},
	selectedIconData: undefined,
	set_additionalPropChanges: () => {},
	set_doShowAdditionalProps: () => {},
	doShowAdditionalProps: false,
});

export const IconsStoriesAll = () => {
	const contextValue = useContext(IconStoriesAllContext);
	const [searchValue, set_searchInput] = useState('');
	const [selectedIconData, set_selectedIconData] = useState<IconStoriesAllContextType['selectedIconData'] | undefined>(contextValue.selectedIconData);
	const [doShowAdditionalProps, set_doShowAdditionalProps] = useState(contextValue.doShowAdditionalProps);
	const [additionalPropChanges, set_additionalPropChanges] = useState<AdditionalPropChanges>(contextValue.additionalPropChanges);
	const changedAdditionalProps: AdditionalPropChanges = {};
	// use reflection to get all available icons
	const iconsPropKeys: PropertyKey[] = Reflect.ownKeys(Icons);
	const iconsNamespacePropKeys: PropertyKey[] = Reflect.ownKeys(IconsNamespace);

	Object.entries(additionalPropChanges).map(([propName, propValue]) => {
		changedAdditionalProps[propName] = propValue;
	})

	return (
		<IconStoriesAllContext.Provider value={{
			additionalPropChanges,
			changedAdditionalProps,
			selectedIconData,
			set_additionalPropChanges,
			set_doShowAdditionalProps,
			doShowAdditionalProps,
		}}>
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
						const meta: IconSvgStoryMeta = Icon.meta;

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
				<IconsStoriesAllFooter />
			</div>
		</IconStoriesAllContext.Provider>
	);
};
