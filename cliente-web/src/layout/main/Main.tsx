import React from "react";
interface MainInterface {
    children: React.ReactNode;
}

const Main: React.FC<MainInterface> = (props) => {
    return (
        <main className="grid grid-cols-3 p-6 max-w-5xl mx-auto space-y-6 gap-y-4 mt-4">
            {props.children}
        </main>
    );
};
export default Main;
