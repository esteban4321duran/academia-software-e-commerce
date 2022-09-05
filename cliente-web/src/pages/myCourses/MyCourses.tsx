import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUserCourses, Course, getCoursesById } from "../../hooks/api";
import { getSession } from "../../hooks/session";
import Main from "../../layout/main";
import Title from "../../components/title";
import CourseCard from "../../components/courseCard";
import Button from "../../components/button";

interface MyCoursesInterface {}
const MyCourses: React.FC<MyCoursesInterface> = (props) => {
    const navigate = useNavigate();
    const userId = getSession().userId;
    if (userId === undefined) navigate("/cursos");
    const userCourses = getUserCourses(userId!);
    const courseIds = userCourses.map((userCourse) => userCourse.courseId);
    const courses = getCoursesById(...courseIds);

    const renderCourses = (courses: Course[]) => {
        return courses.map((course, index) => {
            return (
                <div className="col-span-3">
                    <div
                        key={index}
                        className="flex flex-row justify-center space-x-4 items-center"
                    >
                        <CourseCard
                            imgSource={course.imgSource}
                            title={course.title}
                            courseId={course.courseId}
                            redirectsOnClick={true}
                        />
                        ;
                    </div>
                </div>
            );
        });
    };
    return (
        <Main>
            <Title>Mis Cursos</Title>
            {courses.length === 0 ? (
                <div className="col-span-3 flex flex-col items-center space-y-10">
                    <p className=" text-center font-medium text-lg">
                        Aún no has adquirido ningún curso
                    </p>
                    <Link to="/cursos">
                        <Button>Buscar Cursos</Button>
                    </Link>
                </div>
            ) : (
                renderCourses(courses)
            )}
        </Main>
    );
};
export default MyCourses;
