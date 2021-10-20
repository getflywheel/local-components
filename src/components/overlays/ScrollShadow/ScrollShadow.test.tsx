import * as React from 'react';
import { shallow } from 'enzyme';
import { ScrollShadow } from './ScrollShadow';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Popup', () => {
	it('renders without crashing', () => {
		shallow(<ScrollShadow />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<ScrollShadow {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true, 1);
	});
});
