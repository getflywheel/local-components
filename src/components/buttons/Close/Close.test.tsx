import * as React from 'react';
import { shallow } from 'enzyme';
import Close from './Close';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Close', () => {
	it('renders without crashing', () => {
		shallow(<Close onClick={() => {
		}}/>);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Close {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
