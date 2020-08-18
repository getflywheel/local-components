import * as React from 'react';
import { shallow } from 'enzyme';
import { TitleBar } from './TitleBar';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('TitleBar', () => {
	it('renders without crashing', () => {
		shallow(<TitleBar />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<TitleBar {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
