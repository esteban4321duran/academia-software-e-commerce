import { useState } from "react";
import { getAmountInCart, addToCart, removeFromCart } from "./hooks/session";
import Nav from "./layout/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./pages/courses";
import Course from "./pages/course";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import AuthWrapper from "./components/auth";

function App() {
    const [cartAmount, setCartAmount] = useState(getAmountInCart());
    const updateCartAmount = () => {
        setCartAmount(getAmountInCart());
    };
    const handleAddToCart = (courseId: number) => {
        addToCart(courseId);
        updateCartAmount();
    };
    const handleRemoveFromCart = (courseId: number) => {
        removeFromCart(courseId);
        updateCartAmount();
    };
    return (
        <BrowserRouter>
            <Nav cartAmount={cartAmount} cartUpdateHandler={updateCartAmount} />
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
                <Route
                    path="/carrito"
                    element={
                        <AuthWrapper login={true}>
                            <Cart
                                removeFromCartHandler={handleRemoveFromCart}
                            />
                        </AuthWrapper>
                    }
                />
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
