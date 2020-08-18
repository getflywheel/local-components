import * as React from 'react';
import { shallow } from 'enzyme';
import Drawer from './Drawer';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Drawer', () => {
	it('renders without crashing', () => {
		shallow(<Drawer>test</Drawer>);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Drawer {...TestComponentPropUtils.basicReactProps}>test</Drawer>);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
