import React from 'react';
import { shallow } from 'enzyme';
import BannerCarousel from './BannerCarousel';

it('renders without crashing', () => {
	shallow(<BannerCarousel />);
});
