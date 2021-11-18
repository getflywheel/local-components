import * as React from 'react';
import { shallow } from 'enzyme';
import InputPasswordToggle from './InputPasswordToggle';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('InputPasswordToggle', () => {
	it('renders without crashing', () => {
		shallow(<InputPasswordToggle />);
	});

	it('contains a password input by default', () => {
		const component = shallow(<InputPasswordToggle />);

		expect(component.exists('input[type="password"]')).toBe(true);
		expect(component.exists('input[type="text"]')).toBe(false);
	});

	it('contains a text input after clicking the eye', () => {
		const component = shallow(<InputPasswordToggle />);

		component.find('.Eye').simulate('click');

		expect(component.exists('input[type="password"]')).toBe(false);
		expect(component.exists('input[type="text"]')).toBe(true);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<InputPasswordToggle {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});

	it('renders name attribute correctly', () => {
		const component = shallow(<InputPasswordToggle name="FormName" />);
		expect(component.exists('[name="FormName"]')).toBe(true);
	});
});
