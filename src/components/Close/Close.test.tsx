import * as React from 'react';
import { shallow } from 'enzyme';
import Close from './Close';

it('renders without crashing', () => {
	shallow(<Close onClick={() => {}} />);
});
