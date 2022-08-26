import { Routes, Route } from "react-router-dom";
import Courses from "./pages/courses";

function App() {
    //TODO refactor this following react router v6 tutorial
    //https://reactrouter.com/en/v6.3.0/getting-started/tutorial
    return (
        <Routes>
            <Route path="/cursos" element={<Courses />} />
        </Routes>
    );
}

export default App;
