import React from 'react';
import classnames from 'classnames';
import styles from './Divider.sass';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';

const marginsClassMixin = (styles: {[key: string]: any}, props: {[key: string]: any}) => ({
	[styles.__MarginTopSizeXS]: props.marginSize === 'xs' || props.marginSizeAfter === 'xs',
	[styles.__MarginTopSizeS]: props.marginSize === 's' || props.marginSizeAfter === 's',
	[styles.__MarginTopSizeM]: props.marginSize === 'm' || props.marginSizeAfter === 'm',
	[styles.__MarginTopSizeL]: props.marginSize === 'l' || props.marginSizeAfter === 'l',
	[styles.__MarginTopSizeXL]: props.marginSize === 'xl' || props.marginSizeAfter === 'xl',
	[styles.__MarginBottomSizeXS]: props.marginSize === 'xs' || props.marginSizeBottom === 'xs',
	[styles.__MarginBottomSizeS]: props.marginSize === 's' || props.marginSizeBottom === 's',
	[styles.__MarginBottomSizeM]: props.marginSize === 'm' || props.marginSizeBottom === 'm',
	[styles.__MarginBottomSizeL]: props.marginSize === 'l' || props.marginSizeBottom === 'l',
	[styles.__MarginBottomSizeXL]: props.marginSize === 'xl' || props.marginSizeBottom === 'xl',
});

interface PropsI extends LocalComponentPropsI {

	marginSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	marginSizeAfter?: 'xs' | 's' | 'm' | 'l' | 'xl';
	marginSizeBottom?: 'xs' | 's' | 'm' | 'l' | 'xl';

}

const Divider = (props: PropsI) => (
	<div
		className={classnames(
			styles.Divider,
			props.className,
			marginsClassMixin(styles, props)
		)}
		onClick={props.onClick}
	/>
);

export default Divider;
