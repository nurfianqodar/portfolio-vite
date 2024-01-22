import React from "react";
import Navbar from "../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PageContainer: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="py-20 flex items-center justify-center">
                <div className="container flex flex-wrap">
                    {/* React Router Dom Element */}
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PageContainer;
