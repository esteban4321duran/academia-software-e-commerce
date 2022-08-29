import React from "react";
interface InputInterface {
    type: string;
    value: string;
    changeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
const Input: React.FC<InputInterface> = (props) => {
    return (
        <input
            type={props.type}
            value={props.value}
            onChange={props.changeHandler}
            className="border border-color30 rounded-lg py-2 px-2 focus:outline-none focus:ring-1 focus:ring-color30 text-sm text-color30 block invalid:border-colorInvalid  focus:invalid:border-colorInvalid focus:invalid:ring-colorInvalid"
        />
    );
};
export default Input;
