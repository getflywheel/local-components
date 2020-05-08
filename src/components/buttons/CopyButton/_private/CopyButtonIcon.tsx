import * as React from 'react';

export enum CopiedStateIconVariants {
	checkmark = 'checkmark',
	checkmarkBackground = 'checkmarkBackground',
}

export enum UncopiedStateIconVariants {
	link = 'link',
}

interface ICopyButtonIconProps {
	/* Icon variant to display */
	variant: CopiedStateIconVariants | UncopiedStateIconVariants | null;
	classNames: string;
};

export const CopyButtonIcon = (props: ICopyButtonIconProps) => {
	const { variant } = props;
	const { checkmark, checkmarkBackground } = CopiedStateIconVariants;
	const { link } = UncopiedStateIconVariants;

	if (variant === link) {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="10.511" height="10.507" viewBox="0 0 10.511 10.507">
  				<g id="Group_21084" data-name="Group 21084" transform="translate(8955.2 12611.389)">
    				<path id="url" d="M1586.311,1764.995l-3.386-3.385a.506.506,0,0,1,.716-.716l3.386,3.385a.506.506,0,0,1-.716.716Zm2.651-2.36-.258-.258a.506.506,0,1,0-.716.716l.317.317a2.06,2.06,0,0,1,.311,2.572,2.028,2.028,0,0,1-3.134.331l-.358-.358a.506.506,0,0,0-.716.716l.358.358a3.038,3.038,0,0,0,4.352-.057A3.129,3.129,0,0,0,1588.962,1762.635Zm-7.356-.2a2.027,2.027,0,0,1,.331-3.133,2.062,2.062,0,0,1,2.573.311l.317.316a.506.506,0,0,0,.716-.715l-.268-.268a3.123,3.123,0,0,0-4.319-.155,3.035,3.035,0,0,0-.067,4.359l.358.358a.506.506,0,0,0,.716-.716Z" transform="translate(-10535 -14369)" fill="#434344" stroke="#434344" stroke-width="0.4"/>
  				</g>
			</svg>
		);
	}

	if (variant === checkmark) {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="9.62" height="7.709" viewBox="0 0 9.62 7.709">
				<g id="Group_384" data-name="Group 384" transform="translate(-1032.5 -467.687)">
				  <path id="Path_217" data-name="Path 217" d="M14.831,5.239,9.54,11.107a.873.873,0,0,1-.673.289h0a.873.873,0,0,1-.673-.289l-2.4-2.4A.952.952,0,0,1,7.135,7.355L8.867,9.086l4.617-5.1a1.03,1.03,0,0,1,1.347-.1A.93.93,0,0,1,14.831,5.239Z" transform="translate(1027 464)" fill="#fff"/>
				</g>
 			 </svg>
		);
	}

	if (variant === checkmarkBackground) {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
			  <g id="Group_21010" data-name="Group 21010" transform="translate(8278 14494)">
			    <g id="Group_20997" data-name="Group 20997" transform="translate(334 -33)">
			      <circle id="Ellipse_4039" data-name="Ellipse 4039" cx="10" cy="10" r="10" transform="translate(-8612 -14461)" fill="#51bb7b"/>
			    </g>
			    <g id="Group_384" data-name="Group 384" transform="translate(-9305.5 -14955.687)">
			      <path id="Path_217" data-name="Path 217" d="M15.2,5.3,9.7,11.4a.908.908,0,0,1-.7.3H9a.908.908,0,0,1-.7-.3L5.8,8.9A.99.99,0,0,1,7.2,7.5L9,9.3,13.8,4a1.071,1.071,0,0,1,1.4-.1A.967.967,0,0,1,15.2,5.3Z" transform="translate(1027 464)" fill="#fff"/>
			    </g>
			  </g>
			</svg>
		);
	}

	return null;

};

CopyButtonIcon.defaultProps = {
	variant: null,
};
