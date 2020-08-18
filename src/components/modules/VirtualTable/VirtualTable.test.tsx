import * as React from 'react';
import { shallow } from 'enzyme';
import { VirtualTable } from './VirtualTable';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('VirtualTable', () => {
	it('renders without crashing', () => {
		shallow(<VirtualTable />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<VirtualTable {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
