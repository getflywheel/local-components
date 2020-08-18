import * as React from 'react';
import { shallow } from 'enzyme';
import { VerticalNav } from './VerticalNav';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('VerticalNav', () => {
	it('renders without crashing', () => {
		shallow(<VerticalNav />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<VerticalNav {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
