import * as React from 'react';
import { shallow } from 'enzyme';
import IconCheckbox from './IconCheckbox';
import YellowStar from '../../../svg/star--yellow.svg';

import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Checkbox', () => {
	it('renders without crashing', () => {
		shallow(<IconCheckbox onChange={() => null} Icon={YellowStar} />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<IconCheckbox onChange={() => null} Icon={YellowStar} {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
