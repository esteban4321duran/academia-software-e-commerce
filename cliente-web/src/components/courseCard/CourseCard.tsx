import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import PriceTag from "../priceTag";
export interface CourseCardInterface {
    courseId: number;
    imgSource: string;
    title: string;
    price: number;
}

const CourseCard: React.FC<CourseCardInterface> = (props) => {
    return (
        <div className="grid col-span-3 justify-items-center">
            <Link
                to={`/cursos/${props.courseId}`}
                state={{ courseId: props.courseId }}
            >
                <div className="max-w-xl border-2 rounded-lg border-color30 p-4 flex flex-row space-x-4 text-color60 bg-color30 group">
                    <img
                        src={props.imgSource}
                        alt="Course Thumbnail"
                        className="w-48 h-48 object-cover group-hover:brightness-90 rounded-lg"
                    />
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-medium text-lg text-color10 group-hover:text-color60 group-hover:bg-color10 w-100 py-2 px-4 rounded-lg ">
                            {props.title}
                        </h3>
                        <p className="font-light text-sm  ">
                            Lorem, ipsum dolor.
                        </p>
                        <p className="">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet, modi!
                        </p>
                        <PriceTag>{props.price}</PriceTag>
                    </div>
                </div>
            </Link>
=======
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
>>>>>>> 0be76ea729981f5a7d17b24b5876cd73dccbe04b
        </div>
    );
};
export default CourseCard;
