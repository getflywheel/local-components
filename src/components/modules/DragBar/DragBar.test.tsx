import * as React from 'react';
import { shallow } from 'enzyme';
import DragBar from './DragBar';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('DragBar', () => {
	it('renders without crashing', () => {
		shallow(<DragBar/>);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<DragBar {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
