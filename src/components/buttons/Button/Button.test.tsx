import * as React from 'react';
import { shallow } from 'enzyme';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';
import { Button } from './Button';

describe('Button', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Button {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
