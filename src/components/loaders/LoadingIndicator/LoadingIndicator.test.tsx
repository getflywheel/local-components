import * as React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from './LoadingIndicator';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('LoadingIndicator', () => {
	it('renders without crashing', () => {
		shallow(<LoadingIndicator />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<LoadingIndicator {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
