import React, { useState } from "react";
import CourseCard, { CourseCardInterface } from "../../components/courseCard";
import { getCourses } from "../../hooks/api";
import Main from "../../layout/main";
import Title from "../../components/title";
import Input from "../../components/input";
import Button from "../../components/button";

const Courses: React.FC = () => {
    const renderCourseCards = (courses: CourseCardInterface[]) => {
        return courses.map((course, index) => {
            return <CourseCard key={index} {...course} />;
        });
    };
    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const newValue = event.target.value;
        if (newValue === "") setCourses(getCourses());
        setCourseTitle(event.target.value);
    };
    const handleSubmit: React.FormEventHandler = (event) => {
        event.preventDefault();
        setCourses(getCourses(courseTitle));
    };
    const [courseTitle, setCourseTitle] = useState("");
    const [courses, setCourses] = useState(getCourses());

    return (
        <Main>
            <Title>Cursos</Title>
            <form
                className="col-span-3 grid grid-cols-3 gap-x-4 "
                onSubmit={handleSubmit}
            >
                <label className="col-span-2 grid grid-cols-2 gap-x-4 text-right text-color30 font-medium items-center">
                    <span className="">Nombre del Curso:</span>
                    <Input
                        value={courseTitle}
                        changeHandler={handleTitleChange}
                        type="text"
                    ></Input>
                </label>
                <Button>Buscar Cursos</Button>
            </form>
            {renderCourseCards(courses)}
        </Main>
    );
};
export default Courses;
