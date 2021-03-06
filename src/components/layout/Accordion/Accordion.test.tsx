import * as React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('Accordion', () => {
	it('renders without crashing', () => {
		shallow(<Accordion><div /></Accordion>);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<Accordion {...TestComponentPropUtils.basicReactProps}><div /></Accordion>);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, true);
	});
});
