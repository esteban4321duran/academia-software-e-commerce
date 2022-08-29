import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Title from "../../components/title";
import Main from "../../layout/main";
import Form from "../../components/form";
import Alert from "../../components/alert";
import FormField from "../../components/formField";
import Button from "../../components/button";
import { createUser } from "../../hooks/api";

const Signup: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
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
    const handleConfirmPasswordChange: React.ChangeEventHandler<
        HTMLInputElement
    > = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        setShowAlert(false);
    };
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        //validate passwords
        if (password !== confirmPassword) {
            setAlert("Las contraseñas no coinciden. Intente Nuevamente");
            setShowAlert(true);
        }
        //retrieve data
        const signupData = {
            email,
            password,
        };
        //create new user
        createUser(signupData);
        //redirect
        navigate("/cursos");
    };
    return (
        <Main>
            <Title>Registrarse</Title>
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
                <FormField
                    label="Confirmar Contraseña"
                    type="password"
                    value={confirmPassword}
                    changeHandler={handleConfirmPasswordChange}
                />
                <div className="flex flex-row justify-center">
                    <Button>Registrarse</Button>
                </div>
            </Form>
            <Alert show={showAlert}>{alert}</Alert>
            <div className="border-2 border-color30 flex flex-col  col-span-3 max-w-md w-full mx-auto p-8 space-y-4 items-center rounded-lg">
                <p className="text-center font-medium">¿Ya tiene una cuenta?</p>
                <Link to="/ingresar">
                    <Button>Ingresar</Button>
                </Link>
            </div>
        </Main>
    );
};
export default Signup;
