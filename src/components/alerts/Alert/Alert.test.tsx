import * as React from 'react';
import { shallow } from 'enzyme';
import { Alert } from './Alert';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Banner', () => {
	it('renders without crashing', () => {
		shallow(<Alert />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Alert {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
