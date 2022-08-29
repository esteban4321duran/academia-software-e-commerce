import React from "react";
interface ButtonInterface {
    children: React.ReactNode;
}
const Button: React.FC<ButtonInterface> = (props) => {
    return (
        <button
            type="submit"
            className="col-span-1 border-2 bg-color30 text-color60 text-sm font-medium py-2 rounded-lg px-6 justify-self-start"
        >
            {props.children}
        </button>
    );
};
export default Button;
