import * as React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Card', () => {
	it('renders without crashing', () => {
		shallow(<Card />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Card {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
