import * as React from 'react';
import { shallow } from 'enzyme';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';
import { TextButton } from './TextButton';

describe('TextButton', () => {
	it('renders without crashing', () => {
		shallow(<TextButton />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<TextButton {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
