import * as React from 'react';
import { shallow } from 'enzyme';
import { Title } from './Title';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Title', () => {
	it('renders without crashing', () => {
		shallow(<Title />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Title {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
