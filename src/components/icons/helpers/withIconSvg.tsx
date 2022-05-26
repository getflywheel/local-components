import * as React from 'react';
import classnames from 'classnames';
import * as styles from './withIconSvg.scss';

/**
 * Note: need to export to avoid error in Icons namespace.
 */
export interface IconSvgProps {
	className?: string;
	key?: string | number;
	height?: number;
	id?: string;
	style?: object;
	width?: number;
}

export interface IconSvgStoryMetaAdditionalProps {
	/* the name of the icon prop */
	propName: string;
	/* the name of the component type used to allow changes to the prop */
	type: 'select';
	/* the options for the component type */
	options: any[];
	/* the default option */
	default: any;
}

/**
 * Typing for icon meta data used for Storybook.
 */
export interface IconSvgStoryMeta {
	/* manually included props used to disply in storybook and allow the user to change options */
	additionalProps?: IconSvgStoryMetaAdditionalProps[];
	/* additional search terms as used by the storybook example */
	tags: string[];
}

/**
 * HOC that adds additional props and styles to icons.
 * @param IconComponent The icon component to be decorated by the hoc.
 * @param neutralFill Whether to set the color of the svg path fill to the theme's neutral gray color.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
const _withIconSvg =
	<P extends object>(IconComponent: any, neutralFill: boolean, neutralStroke: boolean): React.FC<P & IconSvgProps> =>
	({ ...props }: P & IconSvgProps) => {
		const { className, id, key, style, ...otherProps } = props;

		const render = (
			<IconComponent
				className={classnames(styles.IconSvg, 'IconSvg', className, {
					[styles.IconSvg__neutralizeFill]: neutralFill,
					[styles.IconSvg__neutralizeStroke]: neutralStroke,
				})}
				id={id}
				key={key}
				style={style}
				{...(otherProps as P)}
			/>
		);

		return render;
	};

/**
 * HOC that adds additional props and styles to icons.
 * @param IconComponent The icon component to be decorated by the hoc.
 * @param neutralFill Whether to set the color of the svg path fill to the theme's neutral gray color.
 * @param meta The meta details for an svg that makes an icon more discoverable within storybook example.
 */
const withIconSvg = <P extends object>(
	IconComponent: any,
	neutralFill: boolean,
	meta: IconSvgStoryMeta,
	neutralStroke: boolean = false
): React.FC<P & IconSvgProps> => {
	const HocComponent = _withIconSvg(IconComponent, neutralFill, neutralStroke);

	// store the meta data in prototype so it can easily be accessed later (the hoc makes this a little trickier)
	// @ts-ignore
	HocComponent.meta = meta;

	return HocComponent as any;
};

export default withIconSvg;
