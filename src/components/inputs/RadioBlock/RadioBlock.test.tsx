import * as React from 'react';
import { shallow } from 'enzyme';
import RadioBlock from './RadioBlock';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('RadioBlock', () => {
	it('renders without crashing', () => {
		shallow(<RadioBlock options={{}} />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(
			<RadioBlock
				options={{}}
				{...TestComponentPropUtils.basicReactProps}
			/>
		);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
