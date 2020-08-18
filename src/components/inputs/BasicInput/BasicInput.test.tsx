import * as React from 'react';
import { shallow } from 'enzyme';
import BasicInput from './BasicInput';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('BasicInput', () => {
	it('renders without crashing', () => {
		shallow(<BasicInput />);
	});

	it('contains a regular input by default', () => {
		const component = shallow(<BasicInput />);

		expect(component.exists('input[type="text"]')).toBe(true);
		expect(component.exists('input[type="password"]')).toBe(false);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<BasicInput {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
