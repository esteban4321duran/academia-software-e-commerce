import React from "react";
interface SubtitleInterface {
    children: string;
}
const Title: React.FC<SubtitleInterface> = (props) => {
    return (
        <h1 className="text-color30 font-bold text-2xl col-span-3 text-left ">
            {props.children}
        </h1>
    );
};
export default Title;
