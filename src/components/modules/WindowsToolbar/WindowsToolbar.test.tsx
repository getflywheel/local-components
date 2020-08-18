import * as React from 'react';
import { shallow } from 'enzyme';
import WindowsToolbar from './WindowsToolbar';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('EmptyArea', () => {
	it('renders without crashing', () => {
		shallow(
			<WindowsToolbar
				title="myTitle"
				onMinimize={() => {}}
				onQuit={() => {}}
			/>
		);
	});

	it('renders basic react props like id, className, and style as element attributes', () => {
		const shallowWrapper = shallow(
			<WindowsToolbar
				title="myTitle"
				onMinimize={() => {}}
				onQuit={() => {}}
				{...TestComponentPropUtils.basicReactProps}
			/>
		);
		TestComponentPropUtils.expectsBasicReactProps(shallowWrapper, false);
	});
});
