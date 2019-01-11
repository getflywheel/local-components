import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders without crashing', () => {
	shallow(<Button />);
});
