import * as React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Spinner', () => {
	it('renders without crashing', () => {
		shallow(<Spinner />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Spinner {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
