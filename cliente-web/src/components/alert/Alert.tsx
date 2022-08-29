import React from "react";
interface AlertInterface {
    show: boolean;
    children: React.ReactNode;
}
const Alert: React.FC<AlertInterface> = (props) => {
    return (
        <p
            className={`col-span-3 flex flex-row justify-center ${
                props.show ? "" : "hidden"
            }`}
        >
            <span className="border-2 border-colorInvalid text-colorInvalid py-2 px-4 rounded-lg w-full max-w-md">
                {props.children}
            </span>
        </p>
    );
};
export default Alert;
