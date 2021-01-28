import * as React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Checkbox', () => {
	it('renders without crashing', () => {
		shallow(<Checkbox />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Checkbox {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});

	it('renders name attribute correctly', () => {
		const component = shallow(<Checkbox name="FormName" />);
		expect(component.exists('[name="FormName"]')).toBe(true);
	});
});
