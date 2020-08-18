import * as React from 'react';
import { shallow } from 'enzyme';
import InputSearch from './InputSearch';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('InputSearch', () => {
	it('renders without crashing', () => {
		shallow(<InputSearch />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<InputSearch {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true, 1);
	});
});
