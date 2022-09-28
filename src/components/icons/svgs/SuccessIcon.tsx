import * as React from 'react';
import withIconSvg from '../helpers/withIconSvg';
import Success from '../../../svg/success.svg';

const SuccessIcon: React.FC = (props) => <Success {...props} />;

export default withIconSvg(SuccessIcon, true, {
	tags: ['success', 'yes', 'yay', 'check', 'checkmark'],
});
