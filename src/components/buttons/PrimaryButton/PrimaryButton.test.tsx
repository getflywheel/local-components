import * as React from 'react';
import { shallow } from 'enzyme';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';
import { PrimaryButton } from './PrimaryButton';

describe('PrimaryButton', () => {
	it('renders without crashing', () => {
		shallow(<PrimaryButton />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<PrimaryButton {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
