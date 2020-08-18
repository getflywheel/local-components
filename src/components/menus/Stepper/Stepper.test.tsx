import * as React from 'react';
import { shallow } from 'enzyme';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';
import { Stepper, Step } from './Stepper';

describe('Stepper', () => {
	it('renders without crashing', () => {
		shallow(<Stepper><Step number={1} done={false} active={true}>Setup Site</Step></Stepper>);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(
			<Stepper {...TestComponentPropUtils.basicReactProps}>
				<Step number={1} done={false} active={true}>Setup Site</Step>
			</Stepper>
		);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
