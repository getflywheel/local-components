import React, { Component } from 'react';

export default class BannerCarousel extends Component {

	constructor (props) {
		super(props);

		this.state = {
			currentIndex: 0,
		};
	}

	render () {
		return <div>
			{React.Children.map(this.props.children, (banner, index) => {
				if (this.state.currentIndex !== index) {
					return null;
				}

				return React.cloneElement(banner, {
					currentIndex: this.state.currentIndex,
					numBanners: this.props.children.length,
					onIndexChange: (index) => this.setState({ currentIndex: index }),
				});
			})}
		</div>;
	}

}
