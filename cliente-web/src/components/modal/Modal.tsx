import React, { useState } from "react";
import closeImg from "./close.png";
interface ModalInterface {
    show: boolean;
    children: React.ReactNode;
    closeHandler: React.MouseEventHandler<HTMLImageElement>;
}
const Modal: React.FC<ModalInterface> = (props) => {
    return (
        <div
            className={`w-screen h-screen backdrop-blur-sm fixed top-0 left-0 ${
                props.show ? "" : "hidden"
            }`}
        >
            <div className="bg-color60 z-20 w-full max-w-2xl relative -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 flex flex-col items-center space-y-4 py-4 px-4 rounded-lg shadow-2xl">
                {props.children}
                <img
                    src={closeImg}
                    alt="close button"
                    className="w-5 h-5 cursor-pointer absolute top-1 right-4"
                    onClick={props.closeHandler}
                />
            </div>
        </div>
    );
};
export default Modal;
