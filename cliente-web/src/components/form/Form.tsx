import React from "react";
interface FormInterface {
    sumbitHandler: React.FormEventHandler<HTMLFormElement>;
    children: React.ReactNode;
}
const Form: React.FC<FormInterface> = (props) => {
    return (
        <form
            className="border-2 border-color30 col-span-3 p-8 mx-auto flex flex-col space-y-6 rounded-lg w-full max-w-md "
            onSubmit={props.sumbitHandler}
        >
            {props.children}
        </form>
    );
};
export default Form;
