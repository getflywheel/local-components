import * as React from 'react';
import { shallow } from 'enzyme';
import { InnerPaneSidebar } from './InnerPaneSidebar';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('InnerPaneSidebar', () => {
	it('renders without crashing', () => {
		shallow(<InnerPaneSidebar />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<InnerPaneSidebar {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
