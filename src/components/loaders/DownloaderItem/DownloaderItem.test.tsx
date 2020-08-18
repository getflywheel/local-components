import * as React from 'react';
import { shallow } from 'enzyme';
import DownloaderItem from './DownloaderItem';

it('renders without crashing', () => {
	shallow(<DownloaderItem />);
});
