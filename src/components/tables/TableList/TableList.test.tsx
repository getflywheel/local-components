import * as React from 'react';
import { shallow } from 'enzyme';
import { TableList } from './TableList';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('TableList', () => {
	it('renders without crashing', () => {
		shallow(<TableList />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<TableList {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
