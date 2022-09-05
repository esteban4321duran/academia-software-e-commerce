import { CourseCardInterface } from "../components/courseCard";
import webdevImg from "../assets/images/webdev.jpg";
import excelImg from "../assets/images/excel.jpg";
import qaImg from "../assets/images/qa.jpg";
import javaImg from "../assets/images/java.jpg";
import networkImg from "../assets/images/network.jpg";
import * as session from "./session";
export type Course = {
    courseId: number;
    imgSource: string;
    title: string;
    price: number;
};
const courseData: Course[] = [
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

export const getCoursesByTitle = (filter: string = ""): Course[] => {
    if (filter === "") return courseData;
    return courseData.filter((course) => {
        return course.title.match(new RegExp(filter, "i"));
    });
};
export const getCoursesById = (...ids: number[]): Course[] => {
    const result: Course[] = [];
    ids.forEach((searchId) => {
        const foundCourse = courseData.find((course) => {
            return course.courseId === searchId;
        });
        //if course was not found, return and continue with next searchId
        if (foundCourse === undefined) return;
        result.push(foundCourse);
    });
    return result;
};

export const getCourse = (courseId: number): Course => {
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
    if (!user) {
        return {
            ok: false,
            userId: undefined,
        };
    }
    session.setSessionUser(user.id);

    return {
        ok: true,
        userId: user.id,
    };
};
type userDataResponse = {
    ok: boolean;
    userData: User;
};
type UserCreateData = {
    email: string;
    password: string;
};
export const createUser = (signupData: UserCreateData): userDataResponse => {
    const users = JSON.parse(
        localStorage.getItem("users") || "[]"
    ) as Array<User>;

    const newUser = {
        id: users.length,
        email: signupData.email,
        password: signupData.password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    return { ok: true, userData: newUser };
};
type UserCourse = {
    userId: number;
    courseId: number;
};
export const subscribeUser = (userId: number, courseId: number) => {
    const userCourses = JSON.parse(
        localStorage.getItem("userCourses") || "[]"
    ) as Array<UserCourse>;
    const alreadySubscribed = userCourses.some((userCourse) => {
        return userCourse.courseId === courseId && userCourse.userId === userId;
    });
    if (alreadySubscribed) return;

    userCourses.push({
        userId,
        courseId,
    });
    localStorage.setItem(
        "userCourses",
        JSON.stringify(Array.from(userCourses))
    );
};
export const getUserCourses = (userId: number) => {
    const userCourses = JSON.parse(
        localStorage.getItem("userCourses") || "[]"
    ) as Array<UserCourse>;
    return userCourses.filter((userCourse) => {
        return userCourse.userId === userId;
    });
};

export const userOwnsCourse = (
    userId: number,
    searchCourseId: number
): boolean => {
    const userCourses = getUserCourses(userId);
    return userCourses.some((userCourse) => {
        return userCourse.courseId === searchCourseId;
    });
};
