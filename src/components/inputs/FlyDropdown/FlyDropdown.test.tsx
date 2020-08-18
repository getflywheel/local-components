import * as React from 'react';
import { shallow } from 'enzyme';
import FlyDropdown from './FlyDropdown';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('FlyDropdown', () => {
	it('renders without crashing', () => {
		shallow(<FlyDropdown items={[]} />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(
			<FlyDropdown
				items={[]}
				{...TestComponentPropUtils.basicReactProps}
			/>
		);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
