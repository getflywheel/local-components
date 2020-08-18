import * as React from 'react';
import { shallow } from 'enzyme';
import AdvancedToggle from './AdvancedToggle';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('AdvancedToggle', () => {
	it('renders without crashing', () => {
		shallow(<AdvancedToggle />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<AdvancedToggle {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
