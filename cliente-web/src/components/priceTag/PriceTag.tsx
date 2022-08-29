import React from "react";
interface PriceTagInterface {
    children: number;
}
const PriceTag: React.FC<PriceTagInterface> = (props) => {
    return (
        <p className="font-semibold text-lg text-color60">$ {props.children}</p>
    );
};
export default PriceTag;
