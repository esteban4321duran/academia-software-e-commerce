import React from "react";
import { useNavigate } from "react-router-dom";
import { clearSesionUSer } from "../../hooks/session";
const Logout: React.FC = () => {
    clearSesionUSer();
    const navigate = useNavigate();
    navigate("/cursos");
    return <></>;
};
export default Logout;
