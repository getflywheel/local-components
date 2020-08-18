import * as React from 'react';
import { shallow } from 'enzyme';
import BrowseInput from './BrowseInput';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('BrowseInput', () => {
	it('renders without crashing', () => {
		shallow(<BrowseInput />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<BrowseInput {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
