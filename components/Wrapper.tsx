import * as React from 'react';
import IReactComponentProps from '../../src/common/structures/IReactComponentProps';
import { MemoryRouter } from 'react-router-dom';

interface IProps extends IReactComponentProps {

	children: any;
	onError: (error: any) => any;

}

export default class Wrapper extends React.Component<IProps> {

	componentDidCatch (error: any) {
		this.props.onError(error);
	}

	render () {
		return (
			<div>
				<div
					id="styleguide-container"
					className="Theme__Light"
					style={{ position: 'relative' }}
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
