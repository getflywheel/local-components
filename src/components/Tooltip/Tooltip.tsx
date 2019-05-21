import * as React from 'react';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './Tooltip.scss';
import { Manager, Reference, Popper } from 'react-popper';
import { ResizeObserverComponent } from './ResizeObserverComponent';

interface IProps extends IReactComponentProps {
	content?: React.ReactElement;
}

export class Tooltip extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {

	};

	render () {
		return (
			<Manager>
				<Reference>
					{({ ref }) => {
						if(!this.props.content) {
							return null;
						}
						return (
							<ResizeObserverComponent>
								{React.cloneElement(this.props.content, {ref})}
							</ResizeObserverComponent>
						)
					}}
				</Reference>
				<Popper placement="bottom">
					{({ ref, style, placement, arrowProps }) => (
						<div ref={ref} style={style} data-placement={placement}>
							{this.props.children}
							<div ref={arrowProps.ref} style={arrowProps.style} />
						</div>
					)}
				</Popper>
			</Manager>
		);
	}

}
