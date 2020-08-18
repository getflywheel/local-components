import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import * as styles from './ClippedContent.sass';
import classnames from 'classnames';

interface IProps extends IReactComponentProps {
	alignX?: 'none' | 'center';
	alignY?: 'none' | 'center';
	height?: string | 'fit-content';
	shape?: 'circle' | 'rect-rounded';
	tag?: string;
	width?: string | 'fit-content';
	useFullHeight?: boolean;
	useFullWidth?: boolean;
}

export default class ClippedContent extends React.Component<IProps> {
	static defaultProps: Partial<IProps> = {
		alignX: 'none',
		alignY: 'none',
		shape: 'rect-rounded',
		tag: 'div',
		useFullHeight: true,
		useFullWidth: true,
	};

	render () {
		const ContainerTag: any = this.props.tag;

		return (
			<ContainerTag
				className={classnames(
					styles.ClippedContent,
					this.props.className,
					{
						[styles.ClippedContent__AlignX]: this.props.alignX === 'center',
						[styles.ClippedContent__AlignY]: this.props.alignY === 'center',
						[styles.ClippedContent__FullHeight]: this.props.useFullHeight,
						[styles.ClippedContent__FullWidth]: this.props.useFullWidth,
						[styles.ClippedContent__ShapeCircle]: this.props.shape === 'circle',
					},
				)}
				id={this.props.id}
				style={{
					...this.props.style,
					...(this.props.height && {height: this.props.height}),
					...(this.props.width && {width: this.props.width}),
				}}
			>
				{this.props.children}
			</ContainerTag>
		);
	}
}
