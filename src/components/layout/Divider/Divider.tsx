import * as React from 'react';
import classnames from 'classnames';
import * as styles from './Divider.scss';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

const marginsClassMixin = (stylesRef: {[key: string]: any}, props: {[key: string]: any}) => ({
	[stylesRef.__MarginBottomSizeXS]: props.marginSize === 'xs' || props.marginSizeBottom === 'xs',
	[stylesRef.__MarginBottomSizeS]: props.marginSize === 's' || props.marginSizeBottom === 's',
	[stylesRef.__MarginBottomSizeM]: props.marginSize === 'm' || props.marginSizeBottom === 'm',
	[stylesRef.__MarginBottomSizeL]: props.marginSize === 'l' || props.marginSizeBottom === 'l',
	[stylesRef.__MarginBottomSizeXL]: props.marginSize === 'xl' || props.marginSizeBottom === 'xl',
	[stylesRef.__MarginTopSizeXS]: props.marginSize === 'xs' || props.marginSizeTop === 'xs',
	[stylesRef.__MarginTopSizeS]: props.marginSize === 's' || props.marginSizeTop === 's',
	[stylesRef.__MarginTopSizeM]: props.marginSize === 'm' || props.marginSizeTop === 'm',
	[stylesRef.__MarginTopSizeL]: props.marginSize === 'l' || props.marginSizeTop === 'l',
	[stylesRef.__MarginTopSizeXL]: props.marginSize === 'xl' || props.marginSizeTop === 'xl',
});

export interface IDividerProps extends IReactComponentProps {
	marginSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	marginSizeBottom?: 'xs' | 's' | 'm' | 'l' | 'xl';
	marginSizeTop?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const Divider = (props: IDividerProps) => (
	<div
		className={classnames(
			styles.Divider,
			props.className,
			marginsClassMixin(styles, props),
		)}
		id={props.id}
		onClick={props.onClick}
		style={props.style}
	>
		{ props.children && (
			<div className={styles.Divider_ChildrenCont}>
				{props.children}
			</div>
		)}
	</div>
);

export default Divider;
