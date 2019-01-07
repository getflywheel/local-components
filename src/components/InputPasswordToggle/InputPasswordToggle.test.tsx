import * as React from 'react';
import { shallow } from 'enzyme';
import InputPasswordToggle from './InputPasswordToggle';

it ('renders without crashing', () => {
	shallow(<InputPasswordToggle />);
});

it ('contains a password input by default', () => {
	const component = shallow(<InputPasswordToggle />);

	expect(component.exists('input[type="password"]')).toBe(true);
	expect(component.exists('input[type="text"]')).toBe(false);
});

it ('contains a text input after clicking the eye', () => {
	const component = shallow(<InputPasswordToggle />);

	component.find('.Eye').simulate('click');

	expect(component.exists('input[type="password"]')).toBe(false);
	expect(component.exists('input[type="text"]')).toBe(true);
});
