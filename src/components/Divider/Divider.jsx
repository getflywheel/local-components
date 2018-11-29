import React from 'react';
import classnames from 'classnames';
import styles from './Divider.sass';
import PropTypes from 'prop-types';

const Divider = (props) =>
	<div
		className={classnames(
			styles.Divider,
			props.className, {
				[styles.Divider__MarginTopSizeXS]: props.marginSize === 'xs' || props.marginSizeBefore === 'xs',
				[styles.Divider__MarginTopSizeS]: props.marginSize === 's' || props.marginSizeBefore === 's',
				[styles.Divider__MarginTopSizeM]: props.marginSize === 'm' || props.marginSizeBefore === 'm',
				[styles.Divider__MarginTopSizeL]: props.marginSize === 'l' || props.marginSizeBefore === 'l',
				[styles.Divider__MarginTopSizeXL]: props.marginSize === 'xl' || props.marginSizeBefore === 'xl',
				[styles.Divider__MarginBottomSizeXS]: props.marginSize === 'xs' || props.marginSizeAfter === 'xs',
				[styles.Divider__MarginBottomSizeS]: props.marginSize === 's' || props.marginSizeAfter === 's',
				[styles.Divider__MarginBottomSizeM]: props.marginSize === 'm' || props.marginSizeAfter === 'm',
				[styles.Divider__MarginBottomSizeL]: props.marginSize === 'l' || props.marginSizeAfter === 'l',
				[styles.Divider__MarginBottomSizeXL]: props.marginSize === 'xl' || props.marginSizeAfter === 'xl',
			}
		)}
		onClick={props.onClick}
	/>
;

Divider.propTypes = {
	marginSize: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
	marginSizeBefore: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
	marginSizeAfter: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
};

export default Divider;
