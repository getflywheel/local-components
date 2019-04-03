import { IContainerProps } from './Container';

enum ContainerMarginLookupEnum {
	none = 'none',
	xs = 'xs',
	s = 's',
	m = 'm',
	l = 'l',
	xl = 'xl',
}

export type ContainerMarginLookupType = ContainerMarginLookupEnum.none
	| ContainerMarginLookupEnum.s
	| ContainerMarginLookupEnum.m
	| ContainerMarginLookupEnum.l
	| ContainerMarginLookupEnum.xl
	| 0
	| string
;

enum ContainerMarginPropNameEnum {
	margin = 'margin',
	marginBottom = 'marginBottom',
	marginLeft = 'marginLeft',
	marginRight = 'marginRight',
	marginTop = 'marginTop',
}

type ContainerMarginPropNameType = ContainerMarginPropNameEnum.margin
	| ContainerMarginPropNameEnum.marginBottom
	| ContainerMarginPropNameEnum.marginLeft
	| ContainerMarginPropNameEnum.marginRight
	| ContainerMarginPropNameEnum.marginTop
;

type ReturnValue =  {
	[ContainerMarginPropNameEnum.margin]?: string | number,
	[ContainerMarginPropNameEnum.marginBottom]?: string | number,
	[ContainerMarginPropNameEnum.marginLeft]?: string | number,
	[ContainerMarginPropNameEnum.marginRight]?: string | number,
	[ContainerMarginPropNameEnum.marginTop]?: string | number,
} | undefined;

export class ContainerMarginHelper {

	public static sizeLookups = new Map<ContainerMarginLookupType, number>(Object.entries({
		0: 0,
		[ContainerMarginLookupEnum.none]: 0,
		[ContainerMarginLookupEnum.xs]: 5,
		[ContainerMarginLookupEnum.s]: 10,
		[ContainerMarginLookupEnum.m]: 20,
		[ContainerMarginLookupEnum.l]: 30,
		[ContainerMarginLookupEnum.xl]: 40,
	}));

	public static getContainerMarginStyle (props: IContainerProps): ReturnValue | undefined {
		return {
			...this.processMarginType(props.margin, ContainerMarginPropNameEnum.margin),
			...this.processMarginType(props.marginTop, ContainerMarginPropNameEnum.marginTop),
			...this.processMarginType(props.marginRight, ContainerMarginPropNameEnum.marginRight),
			...this.processMarginType(props.marginBottom, ContainerMarginPropNameEnum.marginBottom),
			...this.processMarginType(props.marginLeft, ContainerMarginPropNameEnum.marginLeft),
		};
	}

	public static processMarginType (marginValue: string | number | undefined, propName: ContainerMarginPropNameType) {
		if (marginValue === undefined) {
			return undefined;
		}

		return this.wrapReturnValue(this.parseMargin(marginValue), propName);
	}

	public static parseMargin (margin: string | number): string | number | undefined {
		const values = (margin as string).split(' ');

		const value = values.reduce((list: any[], value: string) => {
			list.push(this.formatFinalValue(this.parseExpression(value)));
			return list;
		}, []);

		return value.join(' ');
	}

	public static formatFinalValue (value: string | number | undefined)  {
		if (value === undefined) {
			return undefined;
		}

		return typeof(value) === 'number' && value !== 0 ? `${value}px` : value;
	}

	public static lookupValue (value: ContainerMarginLookupType | undefined): number | undefined {
		if (value === undefined) {
			return value;
		}

		return this.sizeLookups.get(value);
	}

	public static wrapReturnValue (value: string | number | undefined, propName: ContainerMarginPropNameType): ReturnValue {
		if (value === undefined) {
			return undefined;
		}

		return {
			[propName]: value,
		};
	}

	public static parseExpression (s: string) {
		const expressionShiftedValues = s.match(/[+\-]*(\.\w+|\w+(\.\w+)?)/g) || [];
		let total: number = 0;

		while (expressionShiftedValues.length) {
			const result = this.getExpressionShiftedValuesAndSign (expressionShiftedValues.shift());

			if (result === undefined || isNaN(parseInt(result.value))) {
				console.warn(`Warning - ContainerMargin: The margin value '${result && result.value}' from the original expression '${s}' is not valid and will be ignored.`);
				continue;
			}

			if (result.sign === '+') {
				total += parseFloat(result.value);
			}
			else {
				total -= parseFloat(result.value);
			}
		}

		return total;
	}

	public static getExpressionShiftedValuesAndSign (shiftedValue: string | undefined): {shiftedValue: string | undefined, sign: '-' | '+', value: string} | undefined {
		if (shiftedValue === undefined) {
			return shiftedValue;
		}

		let sign: '-' | '+' = shiftedValue.startsWith('-') ? '-' : '+';
		let value: string = shiftedValue;
		let lookup: number | undefined;

		// if either negative or subtraction
		if (shiftedValue.startsWith('-') || shiftedValue.startsWith('+')) {
			value = shiftedValue.slice(1, shiftedValue.length);
		}

		lookup = this.lookupValue(value);

		return {
			shiftedValue,
			sign,
			value: lookup !== undefined ? String(lookup) : value,
		}
	}

}
