import React from 'react';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';

interface StateI {

	currentIndex?: number,

}

export default class BannerCarousel extends React.Component<ReactComponentPropsI, StateI> {

	constructor (props: ReactComponentPropsI) {
		super(props);

		this.state = {
			currentIndex: 0,
		};
	}

	render () {
		return (
			<div>
				{React.Children.map(this.props.children, (banner: React.ReactChild, index: number) => {
					if (this.state.currentIndex !== index) {
						return null;
					}

					return React.cloneElement(banner as React.ReactElement<any>, {
						currentIndex: this.state.currentIndex,
						numBanners: this.props.children && (this.props.children as React.ReactNode[]).length,
						onIndexChange: (index: number) => this.setState({ currentIndex: index }),
					});
				})}
			</div>
		);
	}

}
