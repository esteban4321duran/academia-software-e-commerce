import React from "react";
import { Link } from "react-router-dom";
export interface CourseCardInterface {
    title: string;
    price: number;
}
const CourseCard: React.FC<CourseCardInterface> = (props) => {
    return (
        <div>
            <img src="" alt="" />
            <div>
                <Link to={"/cursos/:idCurso"}>
                    <h3>{props.title}</h3>
                </Link>
                <p>Lorem, ipsum dolor.</p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, modi!
                </p>
                <p>props.price</p>
            </div>
        </div>
    );
};
export default CourseCard;
