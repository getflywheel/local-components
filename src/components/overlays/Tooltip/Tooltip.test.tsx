import * as React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
	it('renders without crashing', () => {
		shallow(<Tooltip />);
	});
});
