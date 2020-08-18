import * as React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Avatar', () => {
	it('renders without crashing', () => {
		shallow(<Avatar />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Avatar {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
