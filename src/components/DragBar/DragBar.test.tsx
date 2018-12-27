import React from 'react';
import { shallow } from 'enzyme';
import DragBar from './DragBar';

it('renders without crashing', () => {
	shallow(<DragBar />);
});
