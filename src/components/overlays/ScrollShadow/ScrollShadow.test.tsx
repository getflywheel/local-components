import * as React from 'react';
import { shallow } from 'enzyme';
import { ScrollShadow } from './ScrollShadow';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Popup', () => {
	it('renders without crashing', () => {
		shallow(<ScrollShadow />);
	});
});
