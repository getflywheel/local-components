import * as React from 'react';
import { shallow } from 'enzyme';
import FlyModal from './FlyModal';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('FlyModal', () => {
	it('renders without crashing', () => {
		shallow(<FlyModal />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<FlyModal {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
