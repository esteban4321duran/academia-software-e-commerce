import React from "react";
interface ButtonInterface {
    children: React.ReactNode;
    variant?: "color30" | "color10";
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonInterface> = (props) => {
    const variant = props.variant || "color30";
    let result;

    switch (variant) {
        case "color30":
            result = (
                <button
                    type="submit"
                    className="col-span-1 border-2 bg-color30 text-color60 text-sm font-medium py-2 rounded-lg px-6 justify-self-start"
                >
                    {props.children}
                </button>
            );
            break;
        case "color10":
            result = (
                <button
                    className="bg-color10 text-color60 rounded-lg py-2 px-6"
                    onClick={props.clickHandler}
                >
                    {props.children}
                </button>
            );
            break;
    }
    return result;
};
export default Button;
