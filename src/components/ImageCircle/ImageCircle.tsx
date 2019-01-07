import * as React from 'react';
import classnames from 'classnames';
import * as styles from './ImageCircle.sass';
import IReactComponentProps from '../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {

	className?: string;
	size?: 'm' | 's';
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
		const ContainerTag: any = this.props.tag;

		return (
			<ContainerTag
				className={classnames(
					styles.ImageCircleContainer,
					this.props.className,
					{
						[styles.ImageCircleContainer__SizeSmall]: this.props.size === 's',
					},
				)}
			>
				<img
					className={classnames(
						styles.ImageCircle,
						{
							[styles.ImageCircleContainer__Square]: this.props.square,
						},
					)}
					src={this.props.src}
					style={{...this.props.style}}
				/>
			</ContainerTag>
		);
	}

}
