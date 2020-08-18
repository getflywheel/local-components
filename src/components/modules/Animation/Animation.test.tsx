import * as React from 'react';
import { shallow } from 'enzyme';
import Animation from './Animation';

describe('Animation', () => {
	it('renders without crashing', () => {
		shallow(<Animation />);
	});
});
