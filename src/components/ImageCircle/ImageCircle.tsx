import * as React from 'react';
import classnames from 'classnames';
import * as styles from './ImageCircle.sass';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import ClippedContent from '../ClippedContent';
import Handler from '../../common/structures/Handler';

interface IProps extends IReactComponentProps {

	className?: string;
	onError?: Handler;
	onLoad?: Handler;
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
					this.props.className,
					{
						[styles.ImageCircleContainer__SizeSmall]: this.props.size === 's',
					},
				)}
				shape={this.props.square ? 'rect-rounded' : 'circle'}
				style={{
					...(this.props.size !== 's' && this.props.size !== 'm' && {width: this.props.size, minWidth: this.props.size, height: this.props.size}),
				}}
				tag={this.props.tag}
			>
				<img
					className={classnames(
						styles.ImageCircle,
						{
							[styles.ImageCircleContainer__Square]: this.props.square,
						},
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
