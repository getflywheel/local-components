import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import * as styles from './Avatar.sass';
import classnames from 'classnames';
import ImageCircle from '../ImageCircle/index';
import ClippedContent from '../../modules/ClippedContent/index';

interface IProps extends IReactComponentProps {

	color?: 'blue' | 'green' | 'yellow' | 'orange' | 'red' | 'pink' | 'purple';
	initials?: string;
	placeholderSrc?: string;
	size?: 's' | 'm' | string;
	src?: string;
	type: 'user' | 'team';

}

interface IState {

	isImageError: boolean;
	isImageLoaded: boolean;

}

export default class Avatar extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		color: 'blue',
		size: 'm',
	};

	constructor (props: IProps) {
		super(props);

		this.state = {
			isImageError: false,
			isImageLoaded: false,
		};

		this.onError = this.onError.bind(this);
		this.onLoad = this.onLoad.bind(this);
	}

	componentWillReceiveProps (nextProps: IProps) {
		if (this.props.src !== nextProps.src) {
			this.setState({
				isImageError: false,
				isImageLoaded: false,
			});
		}
	}

	onError () {
		this.setState({
			isImageError: true,
		});
	}

	onLoad () {
		this.setState({
			isImageLoaded: true,
		});
	}

	getSize (): string {
		let size: string = this.props.size || Avatar.defaultProps.size as string;

		switch (size) {
			case 'm':
				size = '40px';
				break;
			case 's':
				size = '32px';
				break;
		}

		return size;
	}

	render () {
		const size: string = this.getSize();

		return (
			<div
				className={classnames(
					styles.Avatar,
					this.props.className,
				)}
			>
				{
					this.props.initials && (
						<ClippedContent
							shape={this.props.type === 'team' ? 'rect-rounded' : 'circle'}
							style={{
								...(this.props.size && {width: size, height: size}),
							}}
						>
							<div
								className={classnames(
									styles.Avatar_Initials,
									{
										[styles.Avatar_Initials__BackgroundBlue]: this.props.color === 'blue',
										[styles.Avatar_Initials__BackgroundGreen]: this.props.color === 'green',
										[styles.Avatar_Initials__BackgroundYellow]: this.props.color === 'yellow',
										[styles.Avatar_Initials__BackgroundOrange]: this.props.color === 'orange',
										[styles.Avatar_Initials__BackgroundRed]: this.props.color === 'red',
										[styles.Avatar_Initials__BackgroundPink]: this.props.color === 'pink',
										[styles.Avatar_Initials__BackgroundPurple]: this.props.color === 'purple',
									},
								)}
								color={this.props.color}
							>
								{this.props.initials.trim().substring(0, 2)}
							</div>
						</ClippedContent>
					)
				}
				{
					this.props.placeholderSrc && !this.state.isImageLoaded && (
						<ImageCircle
							containerClassName={classnames(
								styles.Avatar_Image,
								{
									[styles.Avatar_Image__PositionAbsolute]: this.props.initials,
								},
							)}
							size={this.getSize()}
							square={this.props.type === 'team'}
							src={this.props.placeholderSrc}
						/>
					)
				}
				{
					this.props.src && (
						<ImageCircle
							containerClassName={classnames(
								styles.Avatar_Image,
								{
									[styles.Avatar_Image__PositionAbsolute]: this.props.initials || (this.props.placeholderSrc && !this.state.isImageLoaded),
									[styles.Avatar_Image__Hidden]: !this.state.isImageLoaded || (this.props.initials && this.state.isImageError),
								},
							)}
							onError={this.onError}
							onLoad={this.onLoad}
							size={this.getSize()}
							square={this.props.type === 'team'}
							src={this.props.src}
						/>
					)
				}
			</div>
		);
	}

}
