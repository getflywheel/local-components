import * as React from 'react';
import { shallow } from 'enzyme';
import BannerCarousel from './BannerCarousel';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('BannerCarousel', () => {
	it('renders without crashing', () => {
		shallow(<BannerCarousel />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<BannerCarousel {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
