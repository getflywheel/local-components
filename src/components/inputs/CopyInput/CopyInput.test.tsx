import * as React from 'react';
import { shallow } from 'enzyme';
import { CopyInput } from './CopyInput';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('CopyInput', () => {
	it('renders without crashing', () => {
		shallow(<CopyInput />);
	});

	it('contains a text input by default', () => {
		const component = shallow(<CopyInput />);

		expect(component.exists('input[type="text"]')).toBe(true);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<CopyInput {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
