import * as React from 'react';
import { shallow } from 'enzyme';
import { Text } from './Text';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Text', () => {
	it('renders without crashing', () => {
		shallow(<Text />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Text {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
