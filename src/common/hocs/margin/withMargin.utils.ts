import StyleSheetService from '../../services/StyleSheetService';
import { ComponentType } from 'react';

const quickLookupIfStylesExistByOptions: {[key: string]: string[]} = {};
const processedLookupIfStylesExistByOptions: {[key: string]: string[]} = {};
const marginShorthandPropNamesList: string[] = ['margin-top', 'margin-right', 'margin-bottom', 'margin-left'];
const marginPropNamesToAbbr: {[key: string]: string} = {'margin': 'm', 'margin-top': 'mt', 'margin-right': 'mr', 'margin-bottom': 'mb', 'margin-left': 'ml'};
const marginShorthandExludeOperator: string = '?';
const importantOperator: string = '!';
const useSeparateClassnamesForEachMarginProp: boolean = true;

export function generateMarginClassnames (marginPropsList: string[][], selectorPrefix: string, hocId: string, styleValuesList: {[key: string]: string}, WrappedComponent: ComponentType) {
	// remove any unused props
	marginPropsList = marginPropsList.filter(item => item[1]);

	// if no margin props exist
	if (!marginPropsList.length) {
		// console.log('stop...no margin props defined');
		// stop processing and return no className
		return;
	}

	// generate a quick and dirty string to uniquely identify the options passed in
	// note: WrappedComponent is not factored into this as its here for reference only and we want to be able to reuse identical options across different components
	const quickLookupOptionsId: string = `${hocId}^${selectorPrefix}__${JSON.stringify(marginPropsList)}`;
	const quickLookupValueClassNames: string[] = quickLookupIfStylesExistByOptions[quickLookupOptionsId];

	if (quickLookupValueClassNames) {
		// console.log('#####exists: ', quickLookupValueClassName);
		return quickLookupValueClassNames;
	}

	// quickLookupIfStylesExistByOptions[quickLookupOptionsId] = quickLookupValueClassName;

	const processedCssProps: {[key: string]: string} = processMarginOptions(marginPropsList, WrappedComponent);
	const classNameList: string[] = generateMarginMixins(processedCssProps, selectorPrefix, hocId, styleValuesList);

	return quickLookupIfStylesExistByOptions[quickLookupOptionsId] = classNameList;
}

function processMarginOptions (marginPropsList: string[][], WrappedComponent: ComponentType): {[key: string]: string} {
	// console.log('---');
	// console.log('--- marginPropsList');
	// console.log('---');
	// console.table(marginPropsList);

	// create processedCssProps object to contain margin, marginTop, marginRight, marginBottom, and marginLeft properties
	let processedCssProps: {[key: string]: string} = {};

	// loop over each margin prop
	marginPropsList.forEach((item) => {
		// if prop value is set
		if (item[1]) {
			// compare and override existing processedCssProps to get the most appropriate final rule set
			processedCssProps = compareMarginPropRules(processedCssProps, item[0], item[1], WrappedComponent);
		}
	});

	let hasAllIndividualPropTypes: boolean = true;

	for (const key of marginShorthandPropNamesList) {
		if (!processedCssProps[key]) {
			hasAllIndividualPropTypes = false;
			break;
		}
	}

	if (hasAllIndividualPropTypes) {
		delete processedCssProps['margin'];
	}

	// console.log('processedCssProps');
	// console.table(processedCssProps);

	return processedCssProps;
}

function compareMarginPropRules (processedCssProps: {[key: string]: string}, prop2Type: string, prop2: string, WrappedComponent: ComponentType): {[key: string]: string} {
	const prop2Exploded: string[] = prop2.split(/\s+/);
	const isImportant: boolean = prop2Exploded[prop2Exploded.length - 1] === importantOperator;
	let value: string;

	if (isImportant) {
		prop2Exploded.pop();
	}

	if (prop2Exploded.includes(importantOperator)) {
		throw new Error(`Error: withMargin has errant bang character in ${prop2Type} params '${prop2}' for component '${WrappedComponent.name}'. Bangs are only valid after the last of 1-4 margin values.`);
	}

	if (!prop2Exploded.length) {
		throw new Error(`Error: withMargin has too few ${prop2Type} params '${prop2}' for component '${WrappedComponent.name}' (expected: 1-4 margin values, has: ${prop2Exploded.length}).`);
	}

	if (prop2Type === 'margin') {
		const hasExcludedValue: boolean = prop2Exploded.includes(marginShorthandExludeOperator);

		if (prop2Exploded.length > 4) {
			throw new Error(`Error: withMargin has too many params '${prop2}' for component '${WrappedComponent.name}' (expected: 1-4 margin values, has: ${prop2Exploded.length}).`);
		}

		// if this has an excluded value then we avoid setting shorthand 'margin' because one of the values isn't intended to be set
		// note: if 'margin' is already set in rules, we leave it there uninterupted as individual props will override those set but any props excluded will defer to that set in 'margin'
		if (hasExcludedValue) {
			// loop over the shorthand rules
			prop2Exploded.forEach((rule: string, index: number) => {
				value = prop2Exploded[index];
				// look for holes -- unset / excluded values
				if (value !== marginShorthandExludeOperator) {
					// set to short-hand property
					processedCssProps[marginShorthandPropNamesList[index]] = isImportant ? `${rule} !important` : rule;
				}
			});
		}
		else {
			// easier to create new object then delete the individual margin properties (e.g. margin-left)
			processedCssProps = {};

			switch (prop2Exploded.length) {
				case 1:
					value = prop2Exploded[0];
					break;
				case 2:
					value = `${prop2Exploded[0]} ${prop2Exploded[1]}`;
					break;
				case 3:
					value = `${prop2Exploded[0]} ${prop2Exploded[1]} ${prop2Exploded[2]}`;
					break;
				case 4:
					value = `${prop2Exploded[0]} ${prop2Exploded[1]} ${prop2Exploded[2]} ${prop2Exploded[3]}`;
					break;
				default:
					value = '';
			}

			processedCssProps['margin'] = isImportant ? `${value} !important` : value;
		}
	}
	// else individual margin property
	else {
		if (prop2Exploded.includes('?')) {
			throw new Error(`Error: withMargin has errant question mark character in ${prop2Type} params '${prop2}' for component '${WrappedComponent.name}'. Question marks are only valid when setting margin, not when setting '${prop2Type}'.`);
		}

		value = prop2Exploded[0];
		processedCssProps[prop2Type] = isImportant ? `${value} !important` : value;
	}

	// const rule2Exploded = marginOptions ? marginOptions.split(/\s+/) : [];
	return processedCssProps;
}

function generateMarginMixins (processedCssProps: {[key: string]: string}, selectorPrefix: string, hocId: string, styleValuesList: {[key: string]: string}): string[] {
	selectorPrefix = selectorPrefix || '';

	// this is used to identify & lookup the unique combination of props to be set
	// note: this id could be generated any number of ways but the approach below is extremely efficient and reliable
	const marginStyleSheetId = `${hocId}^${selectorPrefix}comp__${JSON.stringify(processedCssProps)}`;
	const existingClassName = processedLookupIfStylesExistByOptions[marginStyleSheetId];

	// if this className stylesheet already exists
	if (existingClassName) {
		return existingClassName;
	}

	const selectorPrefixIdFragment: string = selectorPrefix ? `${selectorPrefix.replace(' ', '_')}` : '';
	// generate the unique selector used in the style sheet
	// note: this should not directly use `marginStyleSheetId` as its easier to manage each and their individual rules (e.g. css) if they don't directly reference one another
	// note: maintaining the underscores even if no options (empty string) is essential to make sure the 2nd set of options isn't confused with the 1st
	let className: string = `${hocId}--${selectorPrefixIdFragment}comp__`;
	const propsClassNameFragments: string[] = [];
	const propsValueFragments: string[] = [];
	let finalCssRuleset: string;
	let finalClassnames: string[];

	for (const propName in processedCssProps) {
		if (processedCssProps.hasOwnProperty(propName)) {
			if (propName === 'margin') {
				// always process this first so more specific, individual css properties (e.g. margin-top) take precendence
				propsClassNameFragments.unshift(`${marginPropNamesToAbbr[propName]}_${getFinalClassNameForPropValueFragment(processedCssProps[propName])}`);
				propsValueFragments.unshift(`${propName}: ${getFinalPropValueFragment(processedCssProps[propName], styleValuesList)}`);
			}
			else {
				propsClassNameFragments.push(`${marginPropNamesToAbbr[propName]}_${getFinalClassNameForPropValueFragment(processedCssProps[propName])}`);
				propsValueFragments.push(`${propName}: ${getFinalPropValueFragment(processedCssProps[propName], styleValuesList)}`);
			}
		}
	}

	if (useSeparateClassnamesForEachMarginProp) {
		const individualStylesList: string[] = [];

		propsClassNameFragments.forEach((propsClassName, index, theArray) => {
			let blahblah = className;
			blahblah += propsClassName;
			blahblah = StyleSheetService.getInstance().convertSelectorGroupToSingleSelectorName(blahblah);

			theArray[index] = blahblah;

			individualStylesList.push(
				`${selectorPrefix}.${blahblah} { ${propsValueFragments[index]};}`,
			);
		});

		// write the rules to a runtime stylesheet
		StyleSheetService.getInstance().writeStyleSheet(
			marginStyleSheetId,
			individualStylesList.join('\n'),
			true,
		);

		finalClassnames = propsClassNameFragments;
	}
	else {
		className += propsClassNameFragments.join('--');
		className = StyleSheetService.getInstance().convertSelectorGroupToSingleSelectorName(className);
		finalCssRuleset = propsValueFragments.join('; ');

		// console.log('+++++++++', className);
		// console.log('---------', propsValueFragments.join('; '));

		// write the rules to a runtime stylesheet
		StyleSheetService.getInstance().writeStyleSheet(
			marginStyleSheetId,
			`${selectorPrefix}.${className} { ${finalCssRuleset};}`,
			true,
		);

		finalClassnames = [className];
	}

	processedLookupIfStylesExistByOptions[marginStyleSheetId] = finalClassnames;

	return finalClassnames;
}

function getFinalClassNameForPropValueFragment (propValueFragment: string): string {
	const propValueFragmentExploded: string[] = propValueFragment ? propValueFragment.split(/\s+/) : [];
	const isImportant: boolean = propValueFragmentExploded[propValueFragmentExploded.length - 1] === `!important`;

	if (isImportant) {
		propValueFragmentExploded.pop();
	}

	const finalName: string = propValueFragmentExploded.join('_');

	return isImportant ? `${finalName}_i` : finalName;
}

function getFinalPropValueFragment (propValueFragment: string, styleValuesList: {[key: string]: string}): string {
	const propValueFragmentExploded: string[] = propValueFragment ? propValueFragment.split(/\s+/) : [];
	const isImportant: boolean = propValueFragmentExploded[propValueFragmentExploded.length - 1] === `!important`;

	if (isImportant) {
		propValueFragmentExploded.pop();
	}

	let finalValue: string;

	switch (propValueFragmentExploded.length) {
		case 1:
			finalValue = styleValuesList[propValueFragmentExploded[0]];
			break;
		case 2:
			finalValue = `${styleValuesList[propValueFragmentExploded[0]]} ${styleValuesList[propValueFragmentExploded[1]]}`;
			break;
		case 3:
			finalValue = `${styleValuesList[propValueFragmentExploded[0]]} ${styleValuesList[propValueFragmentExploded[1]]} ${styleValuesList[propValueFragmentExploded[2]]}`;
			break;
		case 4:
			finalValue = `${styleValuesList[propValueFragmentExploded[0]]} ${styleValuesList[propValueFragmentExploded[1]]} ${styleValuesList[propValueFragmentExploded[2]]} ${styleValuesList[propValueFragmentExploded[3]]}`;
			break;
		default:
			return '';
	}

	// console.log('finalName: ', finalName);

	return isImportant ? `${finalValue} !important` : finalValue;
}
