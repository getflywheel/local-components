import * as React from 'react';

export enum CopiedStateIconVariants {
	checkmark = 'checkmark',
	checkmarkBackground = 'checkmarkBackground',
	checkmarkStroke = 'checkmarkStroke',
}

export enum UncopiedStateIconVariants {
	link = 'link',
	copy = 'copy',
}

interface ICopyButtonIconProps {
	/* Icon variant to display */
	variant: CopiedStateIconVariants | UncopiedStateIconVariants | null;
	classNames: string;
};

export const CopyButtonIcon = (props: ICopyButtonIconProps) => {
	const { variant } = props;
	const { checkmark, checkmarkBackground, checkmarkStroke } = CopiedStateIconVariants;
	const { link, copy } = UncopiedStateIconVariants;

	if (variant === copy) {
		return (
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M9 6C9.55228 6 10 6.44772 10 7V12V13C10 13.5523 9.55228 14 9 14H3C2.44772 14 2 13.5523 2 13V7C2 6.44772 2.44772 6 3 6H4H9ZM4 4V3C4 1.34315 5.34315 0 7 0H13C14.6569 0 16 1.34315 16 3V9C16 10.6569 14.6569 12 13 12H12V13C12 14.6569 10.6569 16 9 16H3C1.34315 16 0 14.6569 0 13V7C0 5.34315 1.34315 4 3 4H4ZM6 4V3C6 2.44772 6.44772 2 7 2H13C13.5523 2 14 2.44772 14 3V9C14 9.55228 13.5523 10 13 10H12V7C12 5.34315 10.6569 4 9 4H6Z" fill="#51BB7B"/>
			</svg>
		);
	}

	if (variant === link) {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="10.511" height="10.507" viewBox="0 0 10.511 10.507">
  				<g id="Group_21084" data-name="Group 21084" transform="translate(8955.2 12611.389)">
    				<path id="url" d="M1586.311,1764.995l-3.386-3.385a.506.506,0,0,1,.716-.716l3.386,3.385a.506.506,0,0,1-.716.716Zm2.651-2.36-.258-.258a.506.506,0,1,0-.716.716l.317.317a2.06,2.06,0,0,1,.311,2.572,2.028,2.028,0,0,1-3.134.331l-.358-.358a.506.506,0,0,0-.716.716l.358.358a3.038,3.038,0,0,0,4.352-.057A3.129,3.129,0,0,0,1588.962,1762.635Zm-7.356-.2a2.027,2.027,0,0,1,.331-3.133,2.062,2.062,0,0,1,2.573.311l.317.316a.506.506,0,0,0,.716-.715l-.268-.268a3.123,3.123,0,0,0-4.319-.155,3.035,3.035,0,0,0-.067,4.359l.358.358a.506.506,0,0,0,.716-.716Z" transform="translate(-10535 -14369)" fill="#434344" stroke="#434344" strokeWidth="0.4"/>
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

	if (variant === checkmarkStroke) {
		return (
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.2 5.6C13.6 6 13.6 6.6 13.3 7L8.5 12.3C8.3 12.5 8.1 12.6 7.8 12.6C7.5 12.6 7.3 12.5 7.1 12.3L4.9 10.1C4.5 9.7 4.5 9.1 4.9 8.7C5.3 8.3 5.9 8.3 6.3 8.7L7.7 10.2L11.8 5.7C12.1 5.3 12.8 5.2 13.2 5.6ZM18 9C18 14 14 18 9 18C4 18 0 14 0 9C0 4 4 0 9 0C14 0 18 4 18 9ZM16 9C16 5.1 12.9 2 9 2C5.1 2 2 5.1 2 9C2 12.9 5.1 16 9 16C12.9 16 16 12.9 16 9Z" fill="#434344"/>
			</svg>
		);
	}

	return null;

};

CopyButtonIcon.defaultProps = {
	variant: null,
};
