import React from "react";
import shoppingCartImg from "./shoppingCart.png";
import NavLink from "../navLink";

interface ShoppingCartButtonInterface {
    itemsInCart: number;
}

const ShoppingCartButton: React.FC<ShoppingCartButtonInterface> = (props) => {
    return (
        <NavLink to="/carrito">
            <img
                className="w-6 h-6 group-hover:invert"
                src={shoppingCartImg}
                alt="shoppingCartImage"
            />
            <span className="text-lg font-semibold group-hover:text-color60">
                {props.itemsInCart === 0 ? "" : props.itemsInCart}
            </span>
        </NavLink>
    );
};

export default ShoppingCartButton;
