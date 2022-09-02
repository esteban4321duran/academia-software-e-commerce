import React from "react";
import Input from "../input";
interface FormFieldInterface {
    label: string;
    type: "text" | "email" | "password" | "select";
    value: string;
    changeHandler: React.ChangeEventHandler<
        HTMLInputElement | HTMLSelectElement
    >;
    focusHandler?: React.FocusEventHandler<HTMLInputElement>;
    options?: string[];
    blurHandler?: React.FocusEventHandler<HTMLInputElement>;
}
const FormField: React.FC<FormFieldInterface> = (props) => {
    let inputComponent;
    if (["text", "email", "password"].includes(props.type)) {
        inputComponent = (
            <Input
                type={props.type}
                value={props.value}
                changeHandler={props.changeHandler}
                focusHandler={props.focusHandler}
                blurHandler={props.blurHandler}
            />
        );
    }
    if (props.type === "select")
        inputComponent = (
            <select
                className="w-48 border border-color30 rounded-lg py-2 px-2 focus:outline-none focus:ring-1 focus:ring-color30 text-sm text-color30 block "
                onChange={props.changeHandler}
            >
                {props.options?.map((option) => {
                    return <option value={option}>{option}</option>;
                })}
            </select>
        );

    return (
        <label className="flex flex-row items-center space-x-4 justify-end">
            <span className="font-medium">{props.label}:</span>
            {inputComponent}
        </label>
    );
};
export default FormField;
