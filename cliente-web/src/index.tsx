import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";

>>>>>>> 0be76ea729981f5a7d17b24b5876cd73dccbe04b
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
<<<<<<< HEAD
        <App />
=======
        <BrowserRouter>
            <App />
        </BrowserRouter>
>>>>>>> 0be76ea729981f5a7d17b24b5876cd73dccbe04b
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
