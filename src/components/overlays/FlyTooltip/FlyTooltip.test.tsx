import * as React from 'react';
import { shallow } from 'enzyme';
import FlyTooltip from './FlyTooltip';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('FlyTooltip', () => {
	it('renders without crashing', () => {
		shallow(<FlyTooltip/>);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<FlyTooltip {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
