import * as React from 'react';
import { shallow } from 'enzyme';
import ProgressRing from './ProgressRing';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('ProgressRing', () => {
	it('renders without crashing', () => {
		shallow(<ProgressRing progress={0} />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<ProgressRing progress={0} {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
