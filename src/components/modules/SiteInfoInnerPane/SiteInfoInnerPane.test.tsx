import * as React from 'react';
import { shallow } from 'enzyme';
import SiteInfoInnerPane from './SiteInfoInnerPane';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('SiteInfoInnerPane', () => {
	it('renders without crashing', () => {
		shallow(<SiteInfoInnerPane />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<SiteInfoInnerPane {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
