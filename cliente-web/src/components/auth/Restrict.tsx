import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getSession } from "../../hooks/session";
interface RestrictInterface {
    login: boolean;
    redirectTo?: string;
    children: React.ReactNode;
    fallback?: React.ReactNode;
}
//next time I create an Auth wrapper i wont use programatical navigation, i'll simply render the login page instead of the restricted page without changing routes.
const AuthWrapper: React.FC<RestrictInterface> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const session = getSession();
    let redirectToLogin = false;
    let result = <>{props.children}</>;

    if (session.userId === undefined && props.login) {
        redirectToLogin = true;
    }

    if (session.userId === undefined && !props.login) {
        result = <>{props.fallback || ""}</>;
    }

    useEffect(() => {
        if (redirectToLogin)
            navigate("/ingresar", {
                state: {
                    //if the redirectTo props isn't passed to the component, do not redirect
                    redirectTo: props.redirectTo || location.pathname,
                },
            });
    });

    return result;
};
export default AuthWrapper;
