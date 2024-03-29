import * as React from 'react';
import styles from './ComponentExampleBase.scss';
import IReactComponentProps from '../structures/IReactComponentProps';
import { Button } from '../../components/buttons/Button/Button';
import { Title, TitlePropSize } from '../../components/text/Title/Title';
import { TextBasePropFontWeight } from '../../components/text/_private/TextBase/TextBase';

export interface IComponentExampleBasePropDetails {
	defaultValue?: any;
	options?: {[key: string]: string | any};
	propName: string;
	type: any;
}

interface IButtonExampleState {
	configCurrentHtml: any;
	configCurrentHtmlProps: {[key: string]: any};
}

export class ComponentExampleBase extends React.Component<IReactComponentProps, IButtonExampleState> {

	protected static _ID: number = 0;
	protected _instanceId: number = ++ComponentExampleBase._ID;
	protected _ComponentClass: any;
	protected _componentName: string;
	protected _componentPropsList: IComponentExampleBasePropDetails[];
	protected _copyArea: any;

	constructor (props: IReactComponentProps, ComponentClass: any, componentName: string, componentPropsList: IComponentExampleBasePropDetails[]) {
		super(props);

		this._ComponentClass = ComponentClass;
		this._componentName = componentName;
		this._componentPropsList = componentPropsList;

		const defaultValueHtmlDetails: IComponentExampleBasePropDetails | undefined = this._componentPropsList.find((bProp: IComponentExampleBasePropDetails) => bProp.type === 'html');

		this.state = {
			configCurrentHtml: defaultValueHtmlDetails && defaultValueHtmlDetails.defaultValue || 'Default Value',
			configCurrentHtmlProps: {},
		};
	}

	protected _onChangeFormEnum = (event: any) => {
		const name = event.target.getAttribute('data-name');
		const value = event.target.value;
		const defaultHtmlProps: {[key: string]: any} = {};

		this._componentPropsList.forEach((item) => {
			if (item.options) {
				Object.values(item.options).forEach((optionValue) => {
					const isDefault: boolean = this._isComponentPropDefault(item.propName, optionValue) || item.defaultValue === optionValue;

					if (isDefault) {
						defaultHtmlProps[item.propName] = optionValue;
					}
				});
			}
		});

		const configCurrentHtmlProps = {...defaultHtmlProps, ...this.state.configCurrentHtmlProps, [name]: value};

		this.setState(() => ({
			configCurrentHtmlProps,
		}));
	};

	protected _onChangeFormHtml = (event: any) => {
		const value = event.target.value;

		this.setState(() => ({
			configCurrentHtml: value,
		}));
	};

	protected _onChangeFormString = (event: any) => {
		const name = event.target.name;
		const value = event.target.value;
		const configCurrentHtmlProps = {...this.state.configCurrentHtmlProps, [name]: value};

		this.setState(() => ({
			configCurrentHtmlProps,
		}));
	};

	protected _onChangeFormBoolean = (event: any) => {
		const name = event.target.name;
		const value = event.target.checked;
		const configCurrentHtmlProps = {...this.state.configCurrentHtmlProps, [name]: value};

		this.setState(() => ({
			configCurrentHtmlProps,
		}));
	};

	protected _onCopyToClipboard = (event: any) => {
		navigator.clipboard.writeText(this._getComponentCodeMarkup());

		setTimeout(() => {
			alert('Copied!');
		});
	};

	protected _getComponentCodeMarkup () {
		let propifiedEntries: string = '';

		for (const [key, value] of Object.entries(this.state.configCurrentHtmlProps)) {
			if (!this._isComponentPropDefault(key, value)) {
				propifiedEntries += ` ${key}="${value}"`;
			}
		}

		return `<${this._componentName}${propifiedEntries}>${this.state.configCurrentHtml}</${this._componentName}>`;
	}

	protected _isComponentPropDefault (propName: string, optionValue: any): boolean {
		return this._getDefaultPropValue(propName) === optionValue;
	}

	protected _getDefaultPropValue (propName: string) {
		return this._ComponentClass.defaultProps && (this._ComponentClass.defaultProps as {[key: string]: any})[propName];
	}

	protected _renderComponentProperty (item: IComponentExampleBasePropDetails) {
		switch (item.type) {
			case 'html':
				return (
					<input
						type="text"
						defaultValue={item.defaultValue}
						onChange={this._onChangeFormHtml}
					/>
				);
			case 'string':
				return (
					<input
						type="text"
						defaultValue={item.defaultValue || this._getDefaultPropValue(item.propName)}
						name={item.propName}
						onChange={this._onChangeFormString}
					/>
				);
			case 'boolean':
				return (
					<input
						type="checkbox"
						defaultChecked={item.defaultValue || this._getDefaultPropValue(item.propName)}
						name={item.propName}
						onChange={this._onChangeFormBoolean}
					/>
				);
			case 'enum':
				if (!item.options) {
					throw new Error(`A component prop '${item.propName}' with type 'enum' must also set 'options'.`);
				}

				return Object.values(item.options).map((optionValue: any) => {
					const isDefault: boolean = this._isComponentPropDefault(item.propName, optionValue) || item.defaultValue === optionValue;

					return (
						<div key={optionValue}>
							<label style={{fontWeight: 300}}>
								<input
									type="radio"
									name={`${item.propName}-id${this._instanceId}`}
									data-name={item.propName}
									value={optionValue}
									defaultChecked={isDefault}
									onChange={this._onChangeFormEnum}
								/>
								{optionValue} {isDefault ? '(default)' : null}
							</label>
						</div>
					);
				});
		}
	}

	render () {
		const Comp: any = this._ComponentClass;

		return (
			<div className={styles.ComponentExample_Container}>
				<div className={styles.ComponentExample_Content}>
					<div className={styles.ComponentExample_Content_Stage}>
						<Comp {...this.state.configCurrentHtmlProps}>{this.state.configCurrentHtml}</Comp>
					</div>
					<div className={styles.ComponentExample_Content_Code}>
						<input
							className={styles.ComponentExample_Content_Code_Markup}
							onChange={() => {}}
							type="text"
							value={this._getComponentCodeMarkup()}
						/>
						<Button
							container={{marginLeft: '10px'}}
							onClick={this._onCopyToClipboard}
						>
							Copy
						</Button>
					</div>
				</div>
				<div className={styles.ComponentExample_Config}>
					{this._componentPropsList.map((item) =>
						<div
							key={item.propName}
							className={styles.ComponentExample_Config_PropBlock}
						>
							<Title size={TitlePropSize.s} privateOptions={{fontWeight: TextBasePropFontWeight.heavy}}>
								{item.propName}
							</Title>
							<div>
								{this._renderComponentProperty(item)}
							</div>
						</div>,
					)}
				</div>
			</div>
		);
	}

}
