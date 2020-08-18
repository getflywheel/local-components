import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

interface IState {
	currentIndex?: number;
}

export default class BannerCarousel extends React.Component<IReactComponentProps, IState> {
	constructor (props: IReactComponentProps) {
		super(props);

		this.state = {
			currentIndex: 0,
		};
	}

	render () {
		return (
			<div
				className={this.props.className}
				id={this.props.id}
				style={this.props.style}
			>
				{React.Children.map(this.props.children as React.ReactElement, (banner: React.ReactChild, index: number) => {
					if (this.state.currentIndex !== index) {
						return null;
					}

					return React.cloneElement(banner as React.ReactElement<any>, {
						currentIndex: this.state.currentIndex,
						numBanners: this.props.children && (this.props.children as React.ReactNode[]).length,
						onIndexChange: (bannerIndex: number) => this.setState({ currentIndex: bannerIndex }),
					});
				})}
			</div>
		);
	}

}
