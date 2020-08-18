import * as React from 'react';
import { shallow } from 'enzyme';
import { TertiaryNav } from './TertiaryNav';

describe('TertiaryNav', () => {
	it('renders without crashing', () => {
		shallow(
			<TertiaryNav
				match={{} as any}
				history={{} as any}
				location={{} as any}
			/>
		);
	});
});
