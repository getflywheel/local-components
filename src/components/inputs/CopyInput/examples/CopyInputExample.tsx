import * as React from "react";
import { CopyInput } from "../CopyInput";

export const CopyInputExample = () => {
	const [invalid, setInvalid] = React.useState(false);
	const onChange = (newValue: string) => {
        setInvalid(newValue.length < 5 ? true : false);
	};

	return (
        <CopyInput
            onChange={onChange}
            invalid={invalid}
            label={'Username'}
            message={'Minimum 5 characters.'}
            value={'mouse'}
        />
	);
};
