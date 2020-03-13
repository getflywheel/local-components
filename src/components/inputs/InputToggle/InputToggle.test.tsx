import * as React from 'react';
import { shallow } from 'enzyme';
import InputToggle from './InputToggle';

it ('renders without crashing', () => {
	shallow(<InputToggle />);
});

it ('contains a regular input by default', () => {
	const component = shallow(<InputToggle />);

	expect(component.exists('input[type="text"]')).toBe(true);
	expect(component.exists('input[type="password"]')).toBe(false);
});
