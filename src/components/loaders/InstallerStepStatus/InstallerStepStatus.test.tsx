import * as React from 'react';
import { shallow } from 'enzyme';
import InstallerStepStatus from './InstallerStepStatus';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('InstallerStepStatus', () => {
	it('renders without crashing', () => {
		shallow(<InstallerStepStatus />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<InstallerStepStatus {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
