import * as React from 'react';
import { shallow } from 'enzyme';
import FlyLargeConfirm from './FlyLargeConfirm';

it('renders without crashing', () => {
	shallow(<FlyLargeConfirm />);
});
