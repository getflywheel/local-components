import * as React from 'react';
import { shallow } from 'enzyme';
import { EmptyArea } from './EmptyArea';

it('renders without crashing', () => {
	shallow(<EmptyArea />);
});
