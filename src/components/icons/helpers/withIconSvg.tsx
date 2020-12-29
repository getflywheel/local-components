import * as React from 'react';
import classnames from 'classnames';
import * as styles from './withIconSvg.scss';

/**
 * Note: need to export to avoid error in Icons namespace.
 */
export interface IconSvgProps {
	className?: string,
	key?: string | number;
	id?: string;
	style?: object;
}

/**
 * Typing for icon meta data used for Storybook.
 */
export interface IconSvgMeta {
	additionalProps?: string[];
	/** the name as displayed and searched for within storybook example **/
	displayName: string;
	/** addition search terms as used by the storybook example **/
	tags: string[];
}

/**
 * HOC that adds additional props and styles to icons.
 * @param IconComponent The icon component to be decorated by the hoc.
 * @param neutralFill Whether to set the color of the svg path fill to the theme's neutral gray color.
 */
const _withIconSvg = <P extends object>(
	IconComponent: any,
	neutralFill: boolean,
): React.FC<P & IconSvgProps> => ({
	...props
}) => {
	const {
		className,
		id,
		key,
		style,
		...otherProps
	} = props;

	const render = (
		<IconComponent
			className={classnames(
				styles.IconSvg,
				'IconSvg',
				className,
				{
					[styles.IconSvg__neutralizeFill]: neutralFill,
					[styles.IconSvg__neutralizeFill2]: neutralFill,
				},
			)}
			id={id}
			key={key}
			style={style}
			{...otherProps as P}
		/>
	);

	return render;
}

/**
 * HOC that adds additional props and styles to icons.
 * @param IconComponent The icon component to be decorated by the hoc.
 * @param neutralFill Whether to set the color of the svg path fill to the theme's neutral gray color.
 * @param meta The meta details for an svg that makes an icon more discoverable within storybook example.
 */
const withIconSvg = <P extends object>(
	IconComponent: any,
	neutralFill: boolean,
	meta: IconSvgMeta,
): React.FC<P & IconSvgProps> => {
	const HocComponent = _withIconSvg(IconComponent, neutralFill);

	// store the meta data in prototype so it can easily be accessed later (the hoc makes this a little trickier)
	// @ts-ignore
	HocComponent.meta = meta;

	return HocComponent as any;
}

export default withIconSvg;
