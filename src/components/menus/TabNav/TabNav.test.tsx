import * as React from 'react';
import { shallow } from 'enzyme';
import TabNav from './TabNav';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('TabNav', () => {
	it('renders without crashing', () => {
		shallow(<TabNav />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<TabNav {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
