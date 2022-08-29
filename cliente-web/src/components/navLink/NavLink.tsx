import React from "react";
import { Link } from "react-router-dom";
interface NavLinkInterface {
    to: string;
    children: React.ReactNode;
}
const NavLink: React.FC<NavLinkInterface> = (props) => {
    return (
        <Link
            to={props.to}
            className="group w-fit border-l-2 border-color30 first:border-none px-4"
        >
            <span className="flex flex-row space-x-2 py-2 px-4 text-color30 text-lg group-hover:text-color60 group-hover:bg-color30 w-fit rounded-lg ">
                {props.children}
            </span>
        </Link>
    );
};
export default NavLink;
