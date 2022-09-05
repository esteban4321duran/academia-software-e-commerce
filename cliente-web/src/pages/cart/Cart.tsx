import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//TODO refactor api and session out of hooks package
import { getSession } from "../../hooks/session";
import { getCoursesById, Course } from "../../hooks/api";
import Main from "../../layout/main";
import Title from "../../components/title";
import CourseCard from "../../components/courseCard";
import Button from "../../components/button";
import PriceTag from "../../components/priceTag";
import Modal from "../../components/modal";
import creditCardChip from "./credit-card-chip.png";
import Form from "../../components/form";
import FormField from "../../components/formField";
import { subscribeUser } from "../../hooks/api";

interface CartInterface {
    removeFromCartHandler: (courseId: number) => void;
}
const Cart: React.FC<CartInterface> = (props) => {
    const [showModal, setShowModal] = useState(false);
    const session = getSession();
    const [courseIds, setCourseIds] = useState<number[]>(session.shoppingCart);
    const courses = getCoursesById(...courseIds);
    const coursePrices: number[] = courses.map((course) => {
        return course.price;
    });
    const totalPrice = coursePrices.reduce((subtotal, price) => {
        return subtotal + price;
    }, 0);

    //credit card form state
    const [flipCard, setFlipCard] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleModalClose = () => {
        setShowModal(false);
    };
    const handleShowModal = () => {
        setShowModal(true);
    };
    const renderCartItems = (courses: Course[]) => {
        return courses.map((course, index) => {
            return (
                <div className="col-span-3">
                    <div
                        key={index}
                        className="flex flex-row justify-center space-x-4 items-center"
                    >
                        <CourseCard {...course} redirectsOnClick={true} />;
                        <button
                            className="border-2 bg-color30 text-color60 text-sm font-medium py-2 rounded-lg px-6"
                            onClick={handleRemoveFromCart.bind(
                                null,
                                course.courseId
                            )}
                        >
                            Eliminar del carrito
                        </button>
                    </div>
                </div>
            );
        });
    };
    const renderCardNumber = (cardNumber: string) => {
        let result = "";
        for (let i = 0; i < cardNumber.length; i++) {
            if (i !== 0 && i % 4 === 0) result += " ";
            result += cardNumber[i];
        }
        return <p className="h-8">{result}</p>;
    };
    const handleRemoveFromCart = (removeId: number) => {
        setCourseIds((oldState) => {
            return oldState.filter((courseId) => {
                return courseId !== removeId;
            });
        });
        props.removeFromCartHandler(removeId);
    };
    const handleCardNumberChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;
        setCardNumber(value.slice(0, 16));
    };
    const handleExpMonthChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;
        setExpMonth(value.slice(0, 2));
    };
    const handleExpYearChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;
        setExpYear(value.slice(0, 2));
    };
    const handleSecurityCodeChange: React.ChangeEventHandler<
        HTMLInputElement
    > = (event) => {
        const value = event.target.value;
        setSecurityCode(value.slice(0, 3));
    };
    const handleFirstNameChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;
        setFirstName(value);
    };
    const handleLastNameChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;

        setLastName(value);
    };
    const handlePhoneChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;
        setPhone(value);
    };
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const userId = session.userId!;
        courseIds.forEach((courseId) => {
            subscribeUser(userId, courseId);
        });
        setShowModal(false);
        navigate("/resumen-compra");
    };

    return (
        <Main>
            <Title>Carrito</Title>
            {courseIds.length === 0 ? (
                <div className="col-span-3 flex flex-col items-center space-y-10">
                    <p className=" text-center font-medium text-lg">
                        El carrito está vacío
                    </p>
                    <Link to="/cursos">
                        <Button>Buscar Cursos</Button>
                    </Link>
                </div>
            ) : (
                <>
                    {renderCartItems(courses)}
                    <div className="col-span-3 bg-color30 max-w-5xl p-8 rounded-lg flex flex-col items-center space-y-4">
                        <div className="flex flex-row space-x-4">
                            <span className="font-bold text-xl text-color60">
                                Total:{" "}
                            </span>
                            <PriceTag>{totalPrice}</PriceTag>
                        </div>
                        <Button
                            variant="color10"
                            clickHandler={handleShowModal}
                        >
                            Pagar
                        </Button>
                    </div>
                </>
            )}
            <Modal show={showModal} closeHandler={handleModalClose}>
                <div className="bg-transparent w-72 h-48 perspective group flex-shrink-0">
                    <div
                        className={`relative w-full h-full transition-duration preserve-3d ${
                            flipCard ? "rotate-y" : ""
                        }`}
                    >
                        <div className="absolute w-full h-full backface-visibility bg-color30 text-color60 rounded-xl flex flex-col p-4 space-y-3">
                            <img
                                src={creditCardChip}
                                alt="credit card chip"
                                className="w-10 h-10 invert"
                            />
                            <div className="font-normal text-xl flex flex-row">
                                {/* break this text into several span elements with space-x */}
                                {renderCardNumber(cardNumber)}
                            </div>
                            <div className="flex flex-row text-xs font-light space-x-4 items-center">
                                <span className="uppercase">valido hasta</span>
                                <span className="text-lg font-normal">
                                    {expMonth}/{expYear}
                                </span>
                            </div>
                            <p className="uppercase">
                                {firstName} {lastName}
                            </p>
                        </div>
                        <div className="absolute w-full h-full backface-visibility bg-color10 text-color60 rotate-y rounded-xl flex flex-col py-4 space-y-4">
                            <div className="bg-black h-10 w-full"></div>
                            <div className="flex flex-row px-4">
                                <div className="bg-color60 w-full h-8 flex flex-col justify-evenly">
                                    <span className="bg-gray h-1 w-full"></span>
                                    <span className="bg-gray h-1 w-full"></span>
                                    <span className="bg-gray h-1 w-full"></span>
                                </div>
                                <span className="bg-gray h-8 w-14 text-color30 italic text-lg flex flex-col justify-center items-center">
                                    {securityCode}
                                </span>
                            </div>

                            <div className=" w-full h-12 flex flex-col space-y-2 px-4 justify-end">
                                <span className="bg-color60 h-1 w-3/4"></span>
                                <span className="bg-color60 h-1 w-full"></span>
                                <span className="bg-color60 h-1 w-2/4"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-h-96 overflow-auto">
                    <Form sumbitHandler={handleSubmit}>
                        <FormField
                            changeHandler={handleCardNumberChange}
                            type="text"
                            value={cardNumber}
                            label="Número de Tarjeta"
                        ></FormField>
                        <FormField
                            changeHandler={handleExpMonthChange}
                            type="text"
                            value={expMonth}
                            label="Mes de Expiración"
                        ></FormField>
                        <FormField
                            changeHandler={handleExpYearChange}
                            type="text"
                            value={expYear}
                            label="Año de Expiración"
                        ></FormField>
                        <FormField
                            changeHandler={handleSecurityCodeChange}
                            focusHandler={() => {
                                setFlipCard(true);
                            }}
                            blurHandler={() => {
                                setFlipCard(false);
                            }}
                            type="text"
                            value={securityCode}
                            label="Código de Seguridad"
                        ></FormField>
                        <FormField
                            changeHandler={handleFirstNameChange}
                            type="text"
                            value={firstName}
                            label="Nombre del Titular"
                        ></FormField>
                        <FormField
                            changeHandler={handleLastNameChange}
                            type="text"
                            value={lastName}
                            label="Apellido del Titular"
                        ></FormField>
                        <FormField
                            changeHandler={handlePhoneChange}
                            type="text"
                            value={phone}
                            label="Teléfono"
                        ></FormField>

                        <div className="flex flex-row justify-center">
                            <Button>Pagar</Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </Main>
    );
};
export default Cart;
