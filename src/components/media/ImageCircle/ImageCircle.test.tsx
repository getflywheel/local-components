import * as React from 'react';
import { shallow } from 'enzyme';
import ImageCircle from './ImageCircle';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('ImageCircle', () => {
	it('renders without crashing', () => {
		shallow(<ImageCircle />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<ImageCircle {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
