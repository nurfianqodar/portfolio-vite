import React, { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";

const PageContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="py-20 flex items-center justify-center">
                <div className="container flex flex-wrap">{children}</div>
            </main>
        </>
    );
};

export default PageContainer;
