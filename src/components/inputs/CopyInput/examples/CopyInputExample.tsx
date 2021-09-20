import * as React from "react";
import { CopyInput } from "../CopyInput";

export const CopyInputExample = () => {
	const [invalid, setInvalid] = React.useState(false);
	const onChange = (newValue: string) => {
		setInvalid(newValue.length < 5 ? true : false);
	};
	const offset: [number, number] = [0, 15];
	const copyButtonTooltipProps = {
		content: <>Copy to clipboard</>,
		popperOffsetModifier: { offset },
	};
                
	return (
		<CopyInput
			onChange={onChange}
			invalid={invalid}
			label={"Username"}
			message={"Minimum 5 characters."}
			value={"mouse"}
			copyButtonTooltipProps={copyButtonTooltipProps}
		/>
	);
};
