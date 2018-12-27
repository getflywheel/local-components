import React from 'react';
import { shallow } from 'enzyme';
import BigLoader from './BigLoader';

it('renders without crashing', () => {
	shallow(<BigLoader />);
});
