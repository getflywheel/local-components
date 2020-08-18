import * as React from 'react';
import { shallow } from 'enzyme';
import DownloaderItem from './DownloaderItem';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

jest.mock(
	'electron',
	() => {
		const mockIpcMain = {
			on: jest.fn().mockReturnThis(),
			send: jest.fn().mockReturnThis(),
		};
		return { ipcRenderer: mockIpcMain };
	},
	{ virtual: true },
);

describe('DownloaderItem', () => {
	it('renders without crashing', () => {
		shallow(<DownloaderItem />);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(<DownloaderItem {...TestComponentPropUtils.basicReactProps} />);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
