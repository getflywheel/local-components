import React from 'react';
import { shallow } from 'enzyme';
import FlySelect from './FlySelect';

it('renders without crashing', () => {
	shallow(<FlySelect />);
});
