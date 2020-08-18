import * as React from 'react';
import { shallow } from 'enzyme';
import Truncate from './Truncate';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Truncate', () => {
	it('renders without crashing', () => {
		shallow(<Truncate />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Truncate {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
