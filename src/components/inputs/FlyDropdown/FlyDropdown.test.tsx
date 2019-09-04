import * as React from 'react';
import { shallow } from 'enzyme';
import FlyDropdown from './FlyDropdown';

it('renders without crashing', () => {
	shallow(<FlyDropdown items={[]} />);
});
