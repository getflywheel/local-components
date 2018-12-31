type CssCharsDictValueType = string | string[];

class StyleSheetServiceInstance {

	existingStyleSheetsById: {[key: string]: boolean} = {};
	replaceCssCharsDict: {[key: string]: CssCharsDictValueType} = {
		/* tslint:disable */
		'#': '--hsh--',
		'.': ['\\.', '--prd--'],
		'*': ['\\*', '--ast--'],
		':': '--col--',
		'(': ['\\(', '--prno--'],
		')': ['\\)', '--prnc--'],
		'[': ['\\[', '--brko--'],
		']': ['\\]', '--brkc--'],
		',': '--com--',
		'=': '--eq--',
		'+': ['\\+', '--pls--'],
		'~': '--tld--',
		'$': ['\\$', '--us--'],
		'|': ['\\|', '--pip--'],
		'"': '--qt2--',
		'\'': '--qt1--',
		'^': ['\\^', '--car--'],
		'>': ['\\>', '--gt--'],
		'<': ['\\<', '--lt--'],
		'?': ['\\?', '--qst--'],
		/* tslint:enable */
	};
	re = new RegExp (Object.keys(this.replaceCssCharsDict).map((key) => {
		// if complex replace (aka requires regex)
		if (Array.isArray(this.replaceCssCharsDict[key])) {
			// regex pattern
			return this.replaceCssCharsDict[key][0];
		}

		// else simple string
		return key;
	}).join('|'), 'gi');

	constructor () {
		if (StyleSheetService._instance){
			throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
		}
	}

	//let str = `* E:not(s1, s2) E#myid E[foo], E[foo="bar"] #hello #mello.world.yes E[foo="bar" i] E[foo~="bar"] E[foo^="bar"] E[foo$='bar'] E[foo*='bar'] E[foo|="fruit"] E:lang(zh, "*-hant") E:any-link E::hover E:nth-child(n [of S]?) E >> F E + F E ~ F F || E`;

	convertSelectorGroupToSingleSelectorName (str: string) {
		return str.replace(this.re, (key: string) => {
			const value: CssCharsDictValueType = this.replaceCssCharsDict[key];

			// if complex replace (aka requires regex)
			if (Array.isArray(value)) {
				return value[1];
			}

			return value;
		}).replace(/\s+/g, '__');
	}

	writeStyleSheet (styleId: string, cssText: string, replaceIfIdExists: boolean = false) {
		let styleElement: HTMLStyleElement = document.getElementById(styleId) as HTMLStyleElement;

		// console.log('writeStyleSheet - cssText: ', cssText);

		if (styleElement && !replaceIfIdExists) {
			return;
		}
		else if (styleElement && replaceIfIdExists) {
			document.getElementsByTagName('head')[0].removeChild(styleElement);
		}

		styleElement = document.createElement('style');
		styleElement.type = 'text/css';
		styleElement.id = styleId;
		styleElement.innerHTML = cssText;

		document.getElementsByTagName('head')[0].appendChild(styleElement);
		this.existingStyleSheetsById[styleId] = true;
	}

}

export default class StyleSheetService {

	static _instance: StyleSheetServiceInstance = new StyleSheetServiceInstance();

	static getInstance () {
		if (!this._instance) {
			this._instance = new StyleSheetServiceInstance();
		}

		return this._instance;
	}

}
