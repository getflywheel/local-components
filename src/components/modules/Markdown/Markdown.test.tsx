import * as React from 'react';
import { shallow } from 'enzyme';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';
import Markdown from './Markdown';

describe('Markdown', () => {
	it('renders without crashing', () => {
		shallow(<Markdown />);
	});
});
