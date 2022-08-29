import React from "react";
import Input from "../input";
interface FormFieldInterface {
    label: string;
    type: string;
    value: string;
    changeHandler: React.ChangeEventHandler;
}
const FormField: React.FC<FormFieldInterface> = (props) => {
    return (
        <label className="flex flex-row items-center space-x-4 justify-end">
            <span className="font-medium">{props.label}:</span>
            <Input
                type={props.type}
                value={props.value}
                changeHandler={props.changeHandler}
            />
        </label>
    );
};
export default FormField;
