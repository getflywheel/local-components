import * as React from 'react';
import { shallow } from 'enzyme';
import ClippedContent from './ClippedContent';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('ClippedContent', () => {
	it('renders without crashing', () => {
		shallow(<ClippedContent />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<ClippedContent {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
