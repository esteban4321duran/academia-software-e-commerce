import { CourseCardInterface } from "../components/courseCard";
import webdevImg from "../assets/images/webdev.jpg";
import excelImg from "../assets/images/excel.jpg";
import qaImg from "../assets/images/qa.jpg";
import javaImg from "../assets/images/java.jpg";
import networkImg from "../assets/images/network.jpg";
import * as session from "./session";

const courseData: CourseCardInterface[] = [
    {
        courseId: 0,
        imgSource: webdevImg,
        title: "Desarrollo Web",
        price: 10000,
    },
    {
        courseId: 1,
        imgSource: excelImg,
        title: "Excel Avanzado",
        price: 8000,
    },
    {
        courseId: 2,
        imgSource: qaImg,
        title: "QA",
        price: 16000,
    },
    {
        courseId: 3,
        imgSource: javaImg,
        title: "Java Intermedio",
        price: 12000,
    },
    {
        courseId: 4,
        imgSource: networkImg,
        title: "Redes e Información",
        price: 13000,
    },
];

export const getCourses = (filter: string = "") => {
    if (filter === "") return courseData;
    return courseData.filter((course) => {
        return course.title.match(new RegExp(filter, "i"));
    });
};
export const getCourse = (courseId: number) => {
    return courseData.find((course) => {
        return course.courseId === courseId;
    })!;
};
type LoginData = {
    email: string;
    password: string;
};
type User = {
    id: number;
    email: string;
    password: string;
};
type AuthenticationResponse = {
    ok: boolean;
    userId: number | undefined;
};
export const authenticate = (loginData: LoginData): AuthenticationResponse => {
    const users = JSON.parse(
        localStorage.getItem("users") || "[]"
    ) as Array<User>;
    const user = users.find((user) => {
        return (
            user.email === loginData.email &&
            user.password === loginData.password
        );
    });
    if (!user)
        return {
            ok: false,
            userId: undefined,
        };
    session.createSession(user.id);

    return {
        ok: true,
        userId: user.id,
    };
};
type InformationResponse = {
    ok: boolean;
    message: string | undefined;
};
type UserCreateData = {
    email: string;
    password: string;
};
export const createUser = (signupData: UserCreateData): InformationResponse => {
    const users = JSON.parse(
        localStorage.getItem("users") || "[]"
    ) as Array<User>;

    users.push({
        id: users.length,
        email: signupData.email,
        password: signupData.password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    return { ok: true, message: "user created" };
};
