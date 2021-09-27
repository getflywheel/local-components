import * as React from 'react';
import { shallow } from 'enzyme';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';
import { RefreshButton } from './RefreshButton';

describe('RefreshButton', () => {
	it('renders without crashing', () => {
		shallow(<RefreshButton />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<RefreshButton {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
