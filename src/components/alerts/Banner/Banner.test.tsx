import * as React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Banner', () => {
	it('renders without crashing', () => {
		shallow(<Banner />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Banner {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
