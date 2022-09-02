import React, { useState, useEffect } from "react";
import { getSession } from "../../hooks/session";
import { getCoursesById, Course } from "../../hooks/api";
import Main from "../../layout/main";
import Title from "../../components/title";
import CourseCard, { CourseCardInterface } from "../../components/courseCard";

interface PurchaseSummaryInterface {
    clearCartHandler: () => void;
}
const PurchaseSummary: React.FC<PurchaseSummaryInterface> = (props) => {
    const session = getSession();
    const [courseIds, setCourseIds] = useState<number[]>(session.shoppingCart);
    const courses = getCoursesById(...courseIds);
    const renderCartItems = (courses: CourseCardInterface[]) => {
        return courses.map((course, index) => {
            return (
                <CourseCard
                    key={index}
                    courseId={course.courseId}
                    imgSource={course.imgSource}
                    title={course.title}
                    redirectsOnClick={true}
                />
            );
        });
    };
    useEffect(() => {
        props.clearCartHandler();
    });
    return (
        <Main>
            <Title>Gracias por su Compra</Title>
            <div className="col-span-3 flex flex-col items-center space-y-10">
                <p className=" text-center font-medium text-lg">
                    Ha adquirido los siguientes cursos:
                </p>
            </div>
            {renderCartItems(courses)}
        </Main>
    );
};
export default PurchaseSummary;
