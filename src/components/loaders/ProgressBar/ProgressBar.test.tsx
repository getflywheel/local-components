import * as React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('ProgressBar', () => {
	it('renders without crashing', () => {
		shallow(<ProgressBar />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<ProgressBar {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
