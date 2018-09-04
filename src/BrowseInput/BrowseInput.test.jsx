import React from 'react';
import { shallow } from 'enzyme';
import BrowseInput from './BrowseInput';

jest.mock('electron', () => require('../../styleguide/stubs/electron.stub'), { virtual: true });

it('renders without crashing', () => {
	shallow(<BrowseInput />);
});
