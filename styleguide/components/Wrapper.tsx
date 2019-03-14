import * as React from 'react';
import IReactComponentProps from '../../src/common/structures/IReactComponentProps';
import { MemoryRouter } from 'react-router-dom';

interface IProps extends IReactComponentProps {

	children: any;
	onError: (error: any) => any;

}

type ThemeMode = 'Theme__Light' | 'Theme__Dark';

export default class Wrapper extends React.Component<IProps> {

	protected _showDashBorder: boolean = true;
	protected _extraPadding: boolean  = true;
	protected _themeMode: ThemeMode  = 'Theme__Light';

	componentDidCatch (error: any) {
		this.props.onError(error);
	}

	render () {
		return (
			<div className={this._themeMode}>
				<div
					id="styleguide-container"
					style={{
						position: 'relative',
						...(this._showDashBorder && {border: '1px dashed #c7c4c4'}),
						...(this._extraPadding && {padding: '20px'}),
					}}
				>
					{/*wrap every component with router, even if not needed, so it doesn't have to be included in individual component examples*/}
					<MemoryRouter>
						{this.props.children}
					</MemoryRouter>
				</div>
			</div>
		);
	}

}
