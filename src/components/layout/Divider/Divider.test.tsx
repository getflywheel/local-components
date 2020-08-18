import * as React from 'react';
import { shallow } from 'enzyme';
import Divider from './Divider';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Divider', () => {
	it('renders without crashing', () => {
		shallow(<Divider />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Divider {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
