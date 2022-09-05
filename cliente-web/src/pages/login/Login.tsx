import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Title from "../../components/title";
import Main from "../../layout/main";
import FormField from "../../components/formField";
import Button from "../../components/button";
import { authenticate } from "../../hooks/api";
import { setSessionUser } from "../../hooks/session";
import Alert from "../../components/alert";
import Form from "../../components/form";

interface LocationState {
    redirectTo: string;
}
interface LoginInterface {}

const Login: React.FC<LoginInterface> = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as LocationState;
    const redirectTo = state?.redirectTo || "/cursos";

    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;
        setEmail(value);
        setShowAlert(false);
    };
    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;
        setPassword(value);
        setShowAlert(false);
    };
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const loginData = {
            email,
            password,
        };
        const response = authenticate(loginData);
        if (!response.ok) {
            setShowAlert(true);
            setAlert(
                "Correo electrónico o contraseña inválidos. Intente nuevamente."
            );
        } else {
            setShowAlert(false);
            //create sesion
            setSessionUser(response.userId!);
            //navigate to next page
            navigate(redirectTo);
        }
    };

    return (
        <Main>
            <Title>Ingresar</Title>

            <Form sumbitHandler={handleSubmit}>
                <FormField
                    label="Correo Electrónico"
                    type="email"
                    value={email}
                    changeHandler={handleEmailChange}
                />
                <FormField
                    label="Contraseña"
                    type="password"
                    value={password}
                    changeHandler={handlePasswordChange}
                />
                <div className="flex flex-row justify-center">
                    <Button>Ingresar</Button>
                </div>
            </Form>
            <Alert show={showAlert}>{alert}</Alert>
            <div className="border-2 border-color30 flex flex-col  col-span-3 max-w-md w-full mx-auto p-8 space-y-4 items-center rounded-lg">
                <p className="text-center font-medium">¿No tiene una cuenta?</p>
                <Link to="/registrarse" state={{ redirectTo }}>
                    <Button>Registrarse</Button>
                </Link>
            </div>
        </Main>
    );
};
export default Login;
