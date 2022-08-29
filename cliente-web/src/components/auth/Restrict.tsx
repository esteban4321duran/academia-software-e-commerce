import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getSession } from "../../hooks/session";
interface RestrictInterface {
    login: boolean;
    redirectTo?: string;
    children: React.ReactNode;
    fallback?: React.ReactNode;
}
const Restrict: React.FC<RestrictInterface> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const session = getSession();
    if (!session && props.login)
        navigate("/ingresar", {
            state: {
                //if the redirectTo props isn't passed to the component, do not redirect
                redirectTo: props.redirectTo || location.pathname,
            },
        });

    if (!session && !props.login) return <>{props.fallback || ""}</>;

    return <>{props.children}</>;
};
export default Restrict;
