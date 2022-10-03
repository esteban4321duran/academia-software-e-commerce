import React from "react";
import certificate from "./certificate.png";
import starEmpty from "./star-empty.png";
import starFull from "./star-full.png";
const Courses: React.FC = () => {
    return (
        <div className="bg-[url('./assets/images/marketing.jpg')] mt-24 m-auto w-full max-w-md bg-cover rounded-2xl overflow-hidden group cursor-pointer ">
            <div className="bg-gradient-to-r from-color30 to-transparent shadow-lg  backdrop-blur-sm p-3 flex flex-col space-y-1 relative text-gray group-hover:text-color60">
                <div className="flex flex-row space-x-2 items-center">
                    <h3 className="text-color10 font-semibold text-lg rounded-lg ">
                        Marketing Digital
                    </h3>

                    <img
                        src={certificate}
                        alt="certificate"
                        className="w-6 h-6 invert peer hover:invert-0 cursor-default "
                    />
                    <div className="absolute hidden peer-hover:block top-1/4 left-1/3 bg-color30  text-color60 p-0.5 rounded-lg">
                        <h4 className="text-color10 font-medium text-base">
                            Certificado
                        </h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos distinctio quaerat vel non ipsum!
                    </div>
                </div>
                <p className="">6 meses</p>
                <p className=" text-lg font-medium">$ 10000</p>
                <p className=" flex flex-row space-x-4">
                    <span>martes y jueves</span>
                    <span>11:00 a 13:00</span>
                </p>
                <p className="">Intermedio</p>
                <div className="flex flex-row space-x-4 items-center justify-between">
                    <div className="flex flex-row space-x-2">
                        <img className="w-6 h-6 invert" src={starFull} alt="" />
                        <img
                            className="w-6 h-6 invert"
                            src={starEmpty}
                            alt=""
                        />
                        <img
                            className="w-6 h-6 invert"
                            src={starEmpty}
                            alt=""
                        />
                        <img
                            className="w-6 h-6 invert"
                            src={starEmpty}
                            alt=""
                        />
                        <img
                            className="w-6 h-6 invert"
                            src={starEmpty}
                            alt=""
                        />
                    </div>
                    <button className="text-color60 bg-color30 font-medium hover:text-color60 hover:bg-color10 py-1 px-2 rounded-lg">
                        Agregar curso al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Courses;
