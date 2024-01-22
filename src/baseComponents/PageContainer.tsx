import React from "react";
import Navbar from "../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PageContainer: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="flex items-center justify-center min-h-[100vh] py-16">
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
