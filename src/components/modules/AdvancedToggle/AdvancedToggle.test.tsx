import * as React from 'react';
import { shallow } from 'enzyme';
import AdvancedToggle from './index';

it('renders without crashing', () => {
	shallow(<AdvancedToggle />);
});
