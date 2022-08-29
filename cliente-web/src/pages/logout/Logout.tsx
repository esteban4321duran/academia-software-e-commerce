import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteSession } from "../../hooks/session";
const Logout: React.FC = () => {
    deleteSession();
    const navigate = useNavigate();
    navigate("/cursos");
    return <></>;
};
export default Logout;
