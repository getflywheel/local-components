import * as React from 'react';
import AddIcon from './svgs/AddIcon';
import ArrowRightIcon from './svgs/ArrowRightIcon';
import CaretDoubleIcon from './svgs/CaretDoubleIcon';
import CaretIcon from './svgs/CaretIcon';
import CheckmarkIcon from './svgs/CheckmarkIcon';
import CheckmarkMixedIcon from './svgs/CheckmarkMixedIcon';
import CircleIcon from './svgs/CircleIcon';
import CloseIcon from './svgs/CloseIcon';

/**
 * Namespace of Icons that can be imported once and reference multiple icons: `Icons.Add`.
 * Note: the name of the exported const should match the filename with the `Icon` suffix removed.
 */
namespace Icons {
	export const Add = AddIcon;
	export const ArrowRight = ArrowRightIcon;
	export const CaretDouble = CaretDoubleIcon;
	export const Caret = CaretIcon;
	export const Checkmark = CheckmarkIcon;
	export const CheckmarkMixed = CheckmarkMixedIcon;
	export const Circle = CircleIcon;
	export const Close = CloseIcon;
}

/**
 * Individually exported icons.
 * Note: the name of the exported component should include the `Icon` suffix.
 */
export {
	AddIcon,
	ArrowRightIcon,
	CaretDoubleIcon,
	CaretIcon,
	CheckmarkIcon,
	CheckmarkMixedIcon,
	CircleIcon,
	CloseIcon,
	Icons, // export the namespace 'Icons' here
}
