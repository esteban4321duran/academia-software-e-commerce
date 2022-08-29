import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

//TODO delete this test perhaps. it's not testing anything meaningful
describe("Routes", () => {
    it("/cursos should render <Cursos/>", () => {
        render(
            <MemoryRouter initialEntries={["/cursos"]}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByRole("heading")).toBeInTheDocument();
    });
});
