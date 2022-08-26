import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCard from "./CourseCard";

describe("CourseCard", () => {
    it("should display course name and price", () => {
        render(<CourseCard title={"Titulo del Curso"} price={10000} />);
        expect(screen.getByText(/titulo del curso/i)).toBeInTheDocument();
    });
});
