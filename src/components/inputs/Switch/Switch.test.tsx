import * as React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Switch', () => {
	it('renders without crashing', () => {
		shallow(<Switch />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Switch {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
