import * as React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('List', () => {
	it('renders without crashing', () => {
		shallow(<List />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<List {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
