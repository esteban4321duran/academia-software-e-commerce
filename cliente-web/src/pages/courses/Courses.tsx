<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from "react";
import CourseCard, { CourseCardInterface } from "../../components/courseCard";

const Courses: React.FC = () => {
    const renderCourseCards = (courses: CourseCardInterface[]) => {
        return courses.map((course) => {
            return <CourseCard {...course} />;
        });
    };
    useEffect(() => {});

    return (
        <div className="grid grid-cols-3 p-6 max-w-6xl mx-auto space-y-6 ">
            <h1 className="text-color30 font-bold text-6xl col-span-3 text-center">
                Cursos
            </h1>
            <form className="col-span-3 grid grid-cols-3 gap-x-4 ">
                <label className="col-span-2 grid grid-cols-2 gap-x-4 text-right text-color30 font-medium items-center">
                    <span className="">Nombre del Curso:</span>
                    <input
                        type="text"
                        className="border-2 border-color30 rounded-lg py-2 text-sm text-color30 block"
                    />
                </label>
                <button
                    type="submit"
                    className="col-span-1 border-2 bg-color30 text-color60 text-sm font-medium py-2 rounded-lg px-6 justify-self-start"
                >
                    Buscar Cursos
                </button>
            </form>
        </div>
>>>>>>> 0be76ea729981f5a7d17b24b5876cd73dccbe04b
    );
};
export default Courses;
