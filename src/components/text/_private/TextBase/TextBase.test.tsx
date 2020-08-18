import * as React from 'react';
import { shallow } from 'enzyme';
import { TextBase } from './TextBase';
import TestComponentPropUtils from '../../../../utils/TestComponentPropUtils';

describe('TextBase', () => {
	it('renders without crashing', () => {
		shallow(<TextBase />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<TextBase {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
