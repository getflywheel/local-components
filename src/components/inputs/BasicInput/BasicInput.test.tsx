import * as React from 'react';
import { shallow } from 'enzyme';
import BasicInput from './BasicInput';

it ('renders without crashing', () => {
	shallow(<BasicInput />);
});

it ('contains a regular input by default', () => {
	const component = shallow(<BasicInput />);

	expect(component.exists('input[type="text"]')).toBe(true);
	expect(component.exists('input[type="password"]')).toBe(false);
});
