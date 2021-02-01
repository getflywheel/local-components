import * as React from 'react';
import { useEffect } from 'react';
import classnames from 'classnames';
import * as Icons from './Icons';
import { Icons as IconsNamespace } from './Icons';
import InputSearch from '../inputs/InputSearch/InputSearch';
import { useContext, useState } from 'react';
import * as styles from './IconsStoriesAll.scss';
import { IconSvgStoryMeta } from './helpers/withIconSvg';
import { IconsStoriesAllFooter } from './IconsStoriesAllFooter';

type AdditionalPropChanges = {[propName: string]: any};
type IconType = React.FC & {meta: IconSvgStoryMeta};

interface IconStoriesAllContextType {
	additionalPropChanges: AdditionalPropChanges;
	changedAdditionalProps: AdditionalPropChanges;
	selectedIconData?: {
		exportIconName: string,
		exportNamespaceIconName: string | undefined,
		Icon: IconType,
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
	doShowAdditionalProps: true,
});

const localStorageIconPropKey = 'IconsStoryAll-selected-iconPropKey';
const localStorageSearchText = 'IconsStoryAll-selected-searchText';

export const IconsStoriesAll = () => {
	const contextValue = useContext(IconStoriesAllContext);
	const [searchInputValue, set_searchInputValue] = useState('');
	const [selectedIconData, set_selectedIconData] = useState<IconStoriesAllContextType['selectedIconData'] | undefined>(contextValue.selectedIconData);
	const [doShowAdditionalProps, set_doShowAdditionalProps] = useState(contextValue.doShowAdditionalProps);
	const [additionalPropChanges, set_additionalPropChanges] = useState<AdditionalPropChanges>(contextValue.additionalPropChanges);
	const changedAdditionalProps: AdditionalPropChanges = {};
	const iconsPropKeys: PropertyKey[] = Reflect.ownKeys(Icons); // use reflection to get all available icons
	const iconsNamespacePropKeys: PropertyKey[] = Reflect.ownKeys(IconsNamespace);

	function getIconComponentRef(iconPropKey?: string): IconType | undefined {
		if (!iconPropKey) {
			return;
		}

		return (Icons as any)[iconPropKey];
	}

	function getExportNamespaceIconName(iconPropKey?: string): string | undefined {
		if (!iconPropKey) {
			return;
		}

		const Icon = getIconComponentRef(iconPropKey);

		return iconsNamespacePropKeys.find((key) => (IconsNamespace as any)[key] === Icon) as string;
	}

	function onIconChangeByIconPropKey(iconPropKey?: string){
		const Icon = getIconComponentRef(iconPropKey);

		if (!iconPropKey || !Icon) {
			return;
		}

		localStorage.setItem(localStorageIconPropKey, iconPropKey);
		// need to manually dispatch for this picked up by the split view since it's in the same tab
		window.dispatchEvent(new Event('storage'));
	}

	function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event?.target?.value;

		set_searchInputValue(value ? value : '');

		localStorage.setItem(localStorageSearchText, value);
		// need to manually dispatch for this picked up by the split view since it's in the same tab
		window.dispatchEvent(new Event('storage'));
	}

	function onStorage() {
		// SELECTED ICON

		const lsIconPropKey = window.localStorage.getItem(localStorageIconPropKey);

		if (typeof lsIconPropKey !== undefined && lsIconPropKey !== null && selectedIconData?.exportIconName !== lsIconPropKey) {
			const Icon = getIconComponentRef(lsIconPropKey);

			if (!Icon) {
				return;
			}

			// clear out all additional prop value changes made
			set_additionalPropChanges({});
			// select clicked icon
			set_selectedIconData({
				exportIconName: lsIconPropKey,
				exportNamespaceIconName: getExportNamespaceIconName(lsIconPropKey),
				Icon,
				meta: Icon.meta,
			});
		}

		// SEARCH TEXT

		const lsSearchText = window.localStorage.getItem(localStorageSearchText);

		if (!!lsSearchText) {
			set_searchInputValue(lsSearchText);
		}
		else {
			set_searchInputValue('');
		}
	}

	Object.entries(additionalPropChanges).map(([propName, propValue]) => {
		changedAdditionalProps[propName] = propValue;
	});

	React.useEffect(() => {
		// check for initial persisted values
		onStorage();

		window.addEventListener('storage', onStorage);

		return () => {
			window.removeEventListener('storage', onStorage);
		}
	  }, []);

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
						onChange={onChangeInput}
						placeholder="Filter by icon names and tags ..."
						value={searchInputValue}
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

						const Icon = getIconComponentRef(iconPropKey);
						const exportNamespaceIconName = getExportNamespaceIconName(iconPropKey);
						const meta: IconSvgStoryMeta | undefined = Icon?.meta;
						const IconRef: React.FC = Icon as React.FC;

						// filter out non-matching icons if there is search criteria
						if (searchInputValue
							&& !iconPropKey.toLowerCase().includes(searchInputValue.toLowerCase())
							&& !exportNamespaceIconName?.toLowerCase().includes(searchInputValue.toLowerCase())
							&& !meta?.tags?.join('`').toLowerCase().includes(searchInputValue.toLowerCase())
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
								onClick={() => onIconChangeByIconPropKey(iconPropKey)}
							>
								<>
									<div className={styles.IconsStoriesAll_Card_Content}>
										<IconRef />
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
