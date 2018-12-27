import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';

interface StateI {

	currentIndex?: number,

}

export default class BannerCarousel extends React.Component<LocalComponentPropsI, StateI> {

	constructor (props: LocalComponentPropsI) {
		super(props);

		this.state = {
			currentIndex: 0,
		};
	}

	render () {
		return <div>
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
		</div>;
	}

}
