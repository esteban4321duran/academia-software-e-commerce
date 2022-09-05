import React, { useState } from "react";
import { getCourse, userOwnsCourse } from "../../hooks/api";
import { alreadyInCart, getSession } from "../../hooks/session";
import useCourseIdFromState from "../../hooks/useCourseIdFromState";
import Main from "../../layout/main";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";
import { Link } from "react-router-dom";
import PriceTag from "../../components/priceTag";
import CourseCard from "../../components/courseCard";
import Button from "../../components/button";
import Modal from "../../components/modal";
interface CourseInterface {
    addToCartHandler: (courseId: number) => void;
}

const Course: React.FC<CourseInterface> = (props) => {
    const [showModal, setShowModal] = useState(false);
    const courseId = useCourseIdFromState();
    const course = getCourse(courseId);
    const userId = getSession().userId;

    const handleModalClose = () => {
        setShowModal(false);
    };
    const subscribeHandler: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        setShowModal(true);
        props.addToCartHandler(courseId);
    };
    const buyCourseComponent = (
        <div className="col-span-3 bg-color30 max-w-5xl p-8 rounded-lg flex flex-col items-center space-y-4">
            <PriceTag>{course.price}</PriceTag>
            {alreadyInCart(courseId) ? (
                <Link to="/carrito">
                    <Button variant="color10">Ir al carrito</Button>
                </Link>
            ) : (
                <Button variant="color10" clickHandler={subscribeHandler}>
                    Inscribirse
                </Button>
            )}
        </div>
    );
    const courseContent = (
        <div className="col-span-3 flex flex-col space-y-4">
            {[1, 2, 3].map((sectionNumber) => {
                return (
                    <div
                        key={sectionNumber}
                        className=" flex flex-col space-y-4"
                    >
                        <div className="h-1 border-t-2 border-color30"></div>
                        <Subtitle>{`Sección ${sectionNumber}`}</Subtitle>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis, corporis repudiandae dicta
                            maiores, dolores debitis deleniti excepturi natus,
                            cumque iure doloremque vitae explicabo voluptas!
                            Similique minus laborum ipsa autem suscipit. Neque
                            at aspernatur repellat adipisci quidem. Tempore
                            molestiae omnis a, commodi sapiente iusto eum
                            placeat maxime asperiores ipsum fugit aperiam
                            veritatis nesciunt maiores praesentium accusantium
                            quibusdam nisi atque rem obcaecati recusandae
                            necessitatibus. Voluptatum voluptates odit nemo
                            ducimus nostrum, magnam libero illum accusamus eos
                            ab enim labore autem expedita eaque debitis!
                            Repudiandae reprehenderit corporis aliquid, totam
                            assumenda ut odit excepturi sit nemo officia
                            tempora. Quidem adipisci iure mollitia ex et illum!
                        </p>
                    </div>
                );
            })}
        </div>
    );

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
            {userId !== undefined && userOwnsCourse(userId, courseId)
                ? courseContent
                : buyCourseComponent}

            <Modal show={showModal} closeHandler={handleModalClose}>
                <Subtitle>Añadido al Carrito</Subtitle>
                {/* Implement variant that doesn't have styles on hover and doesn't redirect to he course*/}
                <CourseCard {...course} />
                <Link to="/carrito">
                    <Button>Ir al Carrito</Button>
                </Link>
            </Modal>
        </Main>
    );
};
export default Course;
