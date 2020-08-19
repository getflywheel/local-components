import * as React from 'react';
import classnames from 'classnames';
import * as styles from './BrowseInput.sass';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { TextButton, TextButtonPropSize } from '../../buttons/TextButton/TextButton';
import * as untildify from 'untildify';
import { FunctionGeneric } from '../../../common/structures/Generics';

let remote: any;
let dialog: any;

try {
	remote = require('electron').remote;
	dialog = remote.dialog;
} catch (e) {
	console.warn(`Electron wasn't detected so BrowseInput won't function normally.`);
}

interface IProps extends IReactComponentProps {

	defaultPath?: string;
	dialogProperties?: string[];
	dialogTitle?: string;
	isFormInput?: boolean;
	isInline?: boolean;
	onChange?: FunctionGeneric;
	placeholder?: string;
	value?: string;

}

interface IState {

	value: string | undefined;

}

export default class BrowseInput extends React.Component<IProps, IState> {

	constructor (props: IProps) {
		super(props);

		this.state = {
			value: this.props.value || '',
		};

		this.browseFolder = this.browseFolder.bind(this);
	}

	componentWillReceiveProps (nextProps: IProps) {
		if ('value' in nextProps) {
			this.setState({ value: nextProps.value });
		}
	}

	async browseFolder () {
		const { canceled, filePaths } = await dialog.showOpenDialog(remote.getCurrentWindow(), {
			'defaultPath': untildify(this.state.value! || this.props.defaultPath!),
			'properties': this.props.dialogProperties,
			'title': this.props.dialogTitle,
		});

		if (canceled) {
			return;
		}

		if (!filePaths) {
			return;
		}

		const value = filePaths[0];

		if (this.props.onChange && this.props.onChange.call(this, value) === false) {
			return false;
		}

		this.setState({ value });
	}

	render () {
		return (
			<div
				className={classnames(
					styles.BrowseInput,
					{
						[styles.BrowseInput__Inline]: this.props.isInline,
						[styles.BrowseInput__FormInput]: this.props.isFormInput,
					},
				)}
			>
				<span
					className={classnames({
						[styles.BrowseInput_Placeholder]: this.props.placeholder && !this.state.value,
					})}
				>
					{this.state.value || this.props.placeholder}
				</span>
				<TextButton
					size={TextButtonPropSize.tiny}
					style={{
						marginLeft: '10px',
						padding: 0,
					}}
					onClick={this.browseFolder}
				>
					Browse
				</TextButton>
			</div>
		);
	}

}
