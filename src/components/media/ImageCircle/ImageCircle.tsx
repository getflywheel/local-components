import * as React from 'react';
import classnames from 'classnames';
import * as styles from './ImageCircle.sass';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import ClippedContent from '../../modules/ClippedContent/index';

interface IProps extends IReactComponentProps {

	className?: string;
	containerClassName?: string;
	onError?: FunctionGeneric;
	onLoad?: FunctionGeneric;
	size?: 'm' | 's' | string;
	square?: boolean;
	src: string;
	tag?: string;

}

export default class ImageCircle extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		size: 'm',
		square: false,
		tag: 'div',
	};

	render () {
		return (
			<ClippedContent
				className={classnames(
					styles.ImageCircleContainer,
					this.props.containerClassName,
					{
						[styles.ImageCircleContainer__SizeSmall]: this.props.size === 's',
					},
				)}
				shape={this.props.square ? 'rect-rounded' : 'circle'}
				style={{
					...(this.props.size !== 's' && this.props.size !== 'm' && {width: this.props.size, minWidth: this.props.size, height: this.props.size}),
				}}
				tag={this.props.tag}
				useFullHeight={false}
				useFullWidth={false}
			>
				<img
					className={classnames(
						styles.ImageCircle,
						this.props.className,
					)}
					onError={this.props.onError}
					onLoad={this.props.onLoad}
					src={this.props.src}
					style={{...this.props.style}}
				/>
			</ClippedContent>
		);
	}

}
