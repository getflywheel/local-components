import * as React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';

it('renders without crashing', () => {
	shallow(<Banner />);
});
