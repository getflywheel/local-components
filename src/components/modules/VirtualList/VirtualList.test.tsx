import * as React from 'react';
import { shallow } from 'enzyme';
import { VirtualList } from './VirtualList';

describe('VirtualList', () => {
	it('renders without crashing', () => {
		shallow(<VirtualList />);
	});
});
