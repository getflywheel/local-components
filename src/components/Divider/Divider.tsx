import React from 'react';
import classnames from 'classnames';
import styles from './Divider.sass';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';

const marginsClassMixin = (stylesRef: {[key: string]: any}, props: {[key: string]: any}) => ({
	[stylesRef.__MarginTopSizeXS]: props.marginSize === 'xs' || props.marginSizeAfter === 'xs',
	[stylesRef.__MarginTopSizeS]: props.marginSize === 's' || props.marginSizeAfter === 's',
	[stylesRef.__MarginTopSizeM]: props.marginSize === 'm' || props.marginSizeAfter === 'm',
	[stylesRef.__MarginTopSizeL]: props.marginSize === 'l' || props.marginSizeAfter === 'l',
	[stylesRef.__MarginTopSizeXL]: props.marginSize === 'xl' || props.marginSizeAfter === 'xl',
	[stylesRef.__MarginBottomSizeXS]: props.marginSize === 'xs' || props.marginSizeBottom === 'xs',
	[stylesRef.__MarginBottomSizeS]: props.marginSize === 's' || props.marginSizeBottom === 's',
	[stylesRef.__MarginBottomSizeM]: props.marginSize === 'm' || props.marginSizeBottom === 'm',
	[stylesRef.__MarginBottomSizeL]: props.marginSize === 'l' || props.marginSizeBottom === 'l',
	[stylesRef.__MarginBottomSizeXL]: props.marginSize === 'xl' || props.marginSizeBottom === 'xl',
});

interface PropsI extends ReactComponentPropsI {

	marginSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	marginSizeAfter?: 'xs' | 's' | 'm' | 'l' | 'xl';
	marginSizeBottom?: 'xs' | 's' | 'm' | 'l' | 'xl';

}

const Divider = (props: PropsI) => (
	<div
		className={classnames(
			styles.Divider,
			props.className,
			marginsClassMixin(styles, props),
		)}
		onClick={props.onClick}
	/>
);

export default Divider;
