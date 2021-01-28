import * as React from 'react';
import { shallow } from 'enzyme';
import TestComponentPropUtils from '../../../../utils/TestComponentPropUtils';
import { ButtonBase } from './ButtonBase';

describe('ButtonBase', () => {
	it('renders without crashing', () => {
		shallow(<ButtonBase />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<ButtonBase {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});

	it('renders name attribute correctly', () => {
		const component = shallow(<ButtonBase name="FormName" />);
		expect(component.exists('[name="FormName"]')).toBe(true);
	});
});
