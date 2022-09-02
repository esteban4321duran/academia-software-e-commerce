import React from "react";
import ShoppingCartButton from "../../components/shoppingCartButton";
import NavLink from "../../components/navLink";
import AuthWrapper from "../../components/auth";
import { getAmountInCart } from "../../hooks/session";
import userProfile from "./user-profile.png";
import { useNavigate } from "react-router-dom";
import { clearSesionUSer } from "../../hooks/session";

interface NavInterface {
    cartAmount: number;
    cartUpdateHandler: () => void;
}

const Nav: React.FC<NavInterface> = (props) => {
    const navigate = useNavigate();
    const handleLogout: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        clearSesionUSer();
        props.cartUpdateHandler();
        navigate("/cursos");
    };
    return (
        <nav className="flex flex-row justify-between fixed top-0 left-0 w-screen bg-color60 py-2 px-2 shadow-sm z-10 ">
            <NavLink to="/cursos">Cursos</NavLink>

            <AuthWrapper
                login={false}
                fallback={
                    <div className="flex flex-row">
                        <ShoppingCartButton itemsInCart={props.cartAmount} />
                        <NavLink to="/ingresar">Ingresar</NavLink>
                        <NavLink to="/registrarse">registrarse</NavLink>
                    </div>
                }
            >
                <div className="flex flex-row">
                    <ShoppingCartButton itemsInCart={props.cartAmount} />
                    <NavLink to="/mis-cursos">Mis Cursos</NavLink>
                    <button
                        className="group w-fit border-l-2 border-color30 first:border-none px-4"
                        onClick={handleLogout}
                    >
                        <span className="flex flex-row space-x-2 py-2 px-4 text-color30 text-lg group-hover:text-color60 group-hover:bg-color30 w-fit rounded-lg ">
                            Cerrar Sesión
                        </span>
                    </button>
                    <img
                        src={userProfile}
                        alt="User Profile"
                        className="w-6 h-6 self-center mr-6"
                    />
                </div>
            </AuthWrapper>
        </nav>
    );
};
export default Nav;
