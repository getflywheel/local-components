import * as React from 'react';
import { shallow } from 'enzyme';
import AccordionItem from './AccordionItem';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('AccordionItem', () => {
	it('renders without crashing', () => {
		shallow(<AccordionItem><div /></AccordionItem>);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<AccordionItem {...TestComponentPropUtils.basicReactProps}><div /></AccordionItem>);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
