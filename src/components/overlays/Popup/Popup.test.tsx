import * as React from 'react';
import { shallow } from 'enzyme';
import Popup from './Popup';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Popup', () => {
	it('renders without crashing', () => {
		shallow(<Popup />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Popup {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
