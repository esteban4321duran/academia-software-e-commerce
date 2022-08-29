import { useState } from "react";
import { getAmountInCart } from "./hooks/session";
import Nav from "./layout/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./pages/courses";
import Course from "./pages/course";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/cart";

function App() {
    const [cartAmount, setCartAmount] = useState(getAmountInCart());
    const handleAddToCart: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        console.log("added to cart");
        setCartAmount(cartAmount + 1);
    };
    return (
        <BrowserRouter>
            <Nav cartAmount={cartAmount} />
            <Routes>
                <Route path="/" element={<Courses />} />
                <Route path="/cursos" element={<Courses />} />
                <Route
                    path="/cursos/:idCurso"
                    element={<Course addToCartHandler={handleAddToCart} />}
                />
                <Route path="/ingresar" element={<Login />} />
                <Route path="/registrarse" element={<Signup />} />
                <Route
                    path="/mis-cursos"
                    element={<p className="w-fit my-32 mx-auto">mis cursos</p>}
                />
                <Route path="/carrito" element={<Cart />} />
                <Route
                    path="*"
                    element={
                        <main>
                            <p className="w-fit my-32 mx-auto">404 Not Found</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
