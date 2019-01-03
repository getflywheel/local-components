import React from 'react';
import classnames from 'classnames';
import styles from './Divider.sass';
import PropTypes from 'prop-types';

const marginsClassMixin = (styles, props) => ({
	[styles.__MarginTopSizeXS]: props.marginSize === 'xs' || props.marginSizeTop === 'xs',
	[styles.__MarginTopSizeS]: props.marginSize === 's' || props.marginSizeTop === 's',
	[styles.__MarginTopSizeM]: props.marginSize === 'm' || props.marginSizeTop === 'm',
	[styles.__MarginTopSizeL]: props.marginSize === 'l' || props.marginSizeTop === 'l',
	[styles.__MarginTopSizeXL]: props.marginSize === 'xl' || props.marginSizeTop === 'xl',
	[styles.__MarginBottomSizeXS]: props.marginSize === 'xs' || props.marginSizeBottom === 'xs',
	[styles.__MarginBottomSizeS]: props.marginSize === 's' || props.marginSizeBottom === 's',
	[styles.__MarginBottomSizeM]: props.marginSize === 'm' || props.marginSizeBottom === 'm',
	[styles.__MarginBottomSizeL]: props.marginSize === 'l' || props.marginSizeBottom === 'l',
	[styles.__MarginBottomSizeXL]: props.marginSize === 'xl' || props.marginSizeBottom === 'xl',
});

const Divider = (props) =>
	<div
		className={classnames(
			styles.Divider,
			props.className,
			marginsClassMixin(styles, props)
		)}
		onClick={props.onClick}
	/>
;

Divider.propTypes = {
	marginSize: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
	marginSizeTop: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
	marginSizeBottom: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
};

export default Divider;