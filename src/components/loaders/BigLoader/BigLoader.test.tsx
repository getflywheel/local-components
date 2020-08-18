import * as React from 'react';
import { shallow } from 'enzyme';
import BigLoader from './BigLoader';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('BigLoader', () => {
	it('renders without crashing', () => {
		shallow(<BigLoader />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<BigLoader {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
