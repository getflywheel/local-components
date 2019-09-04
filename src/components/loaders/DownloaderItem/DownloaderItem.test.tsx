import * as React from 'react';
import { shallow } from 'enzyme';
import DownloaderItem from './DownloaderItem';

jest.mock('electron', () => require('../../../../styleguide/stubs/electron.stub'), { virtual: true });

it('renders without crashing', () => {
	shallow(<DownloaderItem />);
});
