import * as React from 'react';
import { shallow } from 'enzyme';
import AdvancedToggle from '../AdvancedToggle';

it('renders without crashing', () => {
	shallow(<AdvancedToggle />);
});
