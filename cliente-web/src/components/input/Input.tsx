import React from "react";
interface InputInterface {
    type: string;
    value: string;
    changeHandler: React.ChangeEventHandler<HTMLInputElement>;
    focusHandler?: React.FocusEventHandler<HTMLInputElement>;
    blurHandler?: React.FocusEventHandler<HTMLInputElement>;
}
const Input: React.FC<InputInterface> = (props) => {
    return (
        <input
            type={props.type}
            value={props.value}
            onFocus={props.focusHandler}
            onBlur={props.blurHandler}
            onChange={props.changeHandler}
            className="border w-48 border-color30 rounded-lg py-2 px-2 focus:outline-none focus:ring-1 focus:ring-color30 text-sm text-color30 block invalid:border-colorInvalid  focus:invalid:border-colorInvalid focus:invalid:ring-colorInvalid"
        />
    );
};
export default Input;
