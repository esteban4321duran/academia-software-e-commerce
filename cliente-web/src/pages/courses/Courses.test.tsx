import React from "react";
import { render, screen } from "@testing-library/react";
import Courses from "./Courses";

describe("Courses", () => {
    it("should display title", () => {
        render(<Courses />);
        const title = screen.getByRole("heading");
        expect(title).toBeInTheDocument();
    });
    it("should display search form", () => {
        render(<Courses />);
        expect(screen.getByLabelText(/nombre del curso/i)).toBeInTheDocument();
    });
    // it("should display courses", () => {
    //     render(<Courses />);
    // });
});

//describe("Search Courses Form",()=>)
