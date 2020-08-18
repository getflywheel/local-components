import * as React from 'react';
import { ShallowWrapper } from 'enzyme';

export default class TestComponentPropUtils {
	/**
	 * An object of basic React props that can be destructured and applied to a component for testing purposes.
	 */
	static basicReactProps = { id: 'myId', className: 'myClass', style: { cursor: 'pointer' }};

	/**
	 * Runs through a series of expects that test the attributes of the rendered element.
	 * @param shallowWrapper The result from calling `shallow(<Component />)`.
	 * @param usesContainer Whether the component implements the optional `Component` wrapper around its contents.
	 * @param useChildIndex If `usesContainer` is true, then this can optionally target a specific child (else 0 index).
	 */
	static expectsBasicReactProps = (shallowWrapper: ShallowWrapper<any>, usesContainer: boolean, useChildIndex: number = 0) => {
		if (usesContainer) {
			shallowWrapper = shallowWrapper.children().at(useChildIndex);
		}

		expect(shallowWrapper.props().id).toBe('myId');
		expect(shallowWrapper.props().style.cursor).toBe('pointer');
		expect(shallowWrapper.props().className).toContain('myClass');
	}
}
