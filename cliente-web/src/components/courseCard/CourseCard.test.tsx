import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCard from "./CourseCard";

describe("CourseCard", () => {
    it("should display course name and price", () => {
<<<<<<< HEAD
        render(
            <CourseCard
                courseId={0}
                title={"Titulo del Curso"}
                price={10000}
                imgSource={""}
            />
        );
=======
        render(<CourseCard title={"Titulo del Curso"} price={10000} />);
>>>>>>> 0be76ea729981f5a7d17b24b5876cd73dccbe04b
        expect(screen.getByText(/titulo del curso/i)).toBeInTheDocument();
    });
});
