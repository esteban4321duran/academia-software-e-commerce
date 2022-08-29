import React, { useState } from "react";
import { getCourse } from "../../hooks/api";
import useCourseIdFromState from "../../hooks/useCourseIdFromState";
import Main from "../../layout/main";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";
import { Link } from "react-router-dom";
import PriceTag from "../../components/priceTag";
import CourseCard from "../../components/courseCard";
import Button from "../../components/button";
import closeImg from "./close.png";
interface CourseInterface {
    addToCartHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const Course: React.FC<CourseInterface> = (props) => {
    const [showModal, setShowModal] = useState(false);
    const courseId = useCourseIdFromState();
    const course = getCourse(courseId);

    const closeHandler: React.MouseEventHandler<HTMLImageElement> = (event) => {
        setShowModal(false);
    };
    const subscribeHandler: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        setShowModal(true);
        props.addToCartHandler(event);
    };

    return (
        <Main>
            <Title>{course.title}</Title>
            <div className="col-span-3 grid grid-cols-3 gap-x-8 place-items-center">
                <div className="col-span-2 ">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Velit repellendus veritatis dolorum earum
                        blanditiis facilis provident id quidem rem. Delectus at
                        eum quibusdam perferendis culpa tempora. Velit in
                        inventore tenetur odit illo dolorem quis aut pariatur
                        perferendis voluptates ea nisi, deserunt minima
                        provident ad necessitatibus excepturi deleniti eligendi!
                        Aut, pariatur.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Velit deleniti eos numquam laborum nihil porro
                        dolorum magnam reprehenderit doloremque eveniet, ullam
                        at, consectetur, omnis ea eum doloribus quod
                        consequuntur exercitationem praesentium rem nobis ab
                        quaerat. Consectetur accusamus veniam laudantium
                        quaerat.
                    </p>
                </div>
                <img src={course.imgSource} alt="" className="col-span-1 " />
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-y-5">
                <Subtitle>Contenidos</Subtitle>
                <ul className="list-disc list-inside flex flex-col flex-wrap items-center h-28 col-span-3">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
            </div>
            <div className="col-span-3 bg-color30 max-w-5xl p-8 rounded-lg flex flex-col items-center space-y-4">
                <PriceTag>{course.price}</PriceTag>
                <button
                    className="bg-color10 text-color60 rounded-lg py-2 px-6"
                    onClick={subscribeHandler}
                >
                    Inscribirse
                </button>
            </div>
            <div
                className={`w-screen h-screen backdrop-blur-sm fixed top-0 left-0 ${
                    showModal ? "" : "hidden"
                }`}
            >
                <div className="bg-color60 z-20 w-full max-w-2xl relative -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 flex flex-col items-center space-y-4 py-4 px-4 rounded-lg shadow-2xl">
                    <Subtitle>Añadido al Carrito</Subtitle>
                    <CourseCard {...course} />
                    <Link to="/carrito">
                        <Button>Ir al Carrito</Button>
                    </Link>

                    <img
                        src={closeImg}
                        alt="close button"
                        className="w-5 h-5 cursor-pointer absolute top-1 right-4"
                        onClick={closeHandler}
                    />
                </div>
            </div>
        </Main>
    );
};
export default Course;
//TODO the fcknn modal window. perhaps should use a dialog
