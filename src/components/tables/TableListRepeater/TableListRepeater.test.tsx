import * as React from 'react';
import { shallow } from 'enzyme';
import TableListRepeater from './TableListRepeater';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('TableListRepeater', () => {
	it('renders without crashing', () => {
		shallow(<TableListRepeater />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<TableListRepeater {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
