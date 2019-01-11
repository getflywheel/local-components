import * as React from 'react';
import { shallow } from 'enzyme';
import FlyTooltip from './FlyTooltip';

it('renders without crashing', () => {
	shallow(<FlyTooltip />);
});
