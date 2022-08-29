import React from "react";
interface TitleInterface {
    children: string;
}
const Title: React.FC<TitleInterface> = (props) => {
    return (
        <h1 className="text-color30 font-bold text-6xl col-span-3 text-center">
            {props.children}
        </h1>
    );
};
export default Title;
