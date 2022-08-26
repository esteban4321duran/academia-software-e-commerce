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
    );
};
export default Courses;
