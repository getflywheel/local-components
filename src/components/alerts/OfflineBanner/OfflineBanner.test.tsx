import * as React from 'react';
import { shallow } from 'enzyme';
import OfflineBanner from './OfflineBanner';
import TestComponentPropUtils from '../../../utils/TestComponentPropUtils';

describe('OfflineBanner', () => {
	it('render a banner if offline is true', () => {
		const wrapper = shallow(<OfflineBanner offline={true} {...TestComponentPropUtils.basicReactProps} />);

		expect(wrapper.find('#myId')).toHaveLength(1);
	});

	it('render nothing if offline is false', () => {
		const wrapper = shallow(<OfflineBanner offline={false} {...TestComponentPropUtils.basicReactProps} />);

		expect(wrapper.find('#myId')).toHaveLength(0);
	});
});
