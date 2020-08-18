import * as React from 'react';
import { shallow } from 'enzyme';
import TableListMultiDisplay from './TableListMultiDisplay';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('TableListMultiDisplay', () => {
	it('renders without crashing', () => {
		shallow(<TableListMultiDisplay />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<TableListMultiDisplay {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
