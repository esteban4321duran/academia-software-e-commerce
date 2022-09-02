import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCard from "./CourseCard";

describe("CourseCard", () => {
    it("should display course name and price", () => {
        render(
            <CourseCard
                courseId={0}
                title={"Titulo del Curso"}
                price={10000}
                imgSource={""}
            />
        );

        expect(screen.getByText(/titulo del curso/i)).toBeInTheDocument();
    });
});
