import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const PageContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [dark, setDark] = useState<boolean | undefined>();

    useEffect(() => {
        const html = document.getElementById("html");
        if (html) {
            setDark(html.classList.contains("dark"));
        }
    }, []);

    const handleDarkMode = () => {
        const html = document.getElementById("html");
        if (html) {
            html.classList.toggle("dark");
            const isDark = html.classList.contains("dark");
            setDark(isDark);
        }
    };

    return (
        <>
            <Navbar />
            <main className="py-20 flex items-center justify-center">
                <div className="container flex flex-wrap">{children}</div>
            </main>
            <footer className="bg-slate-900 bottom-0 w-full p-5 text-light">
                <h1 className="mt-5 text-sm font-light ">
                    Created by{" "}
                    <a href="" className="text-primary font-bold">
                        Nurfian Qodar
                    </a>
                </h1>
                <motion.button
                    title={dark ? "Dark Mode" : "Light Mode"}
                    whileTap={{
                        scale: [1.2, 0.5, 1],
                        rotate: 180,
                    }}
                    onClick={() => handleDarkMode()}
                    className={`${
                        dark ? "bg-light text-dark" : "bg-dark text-light"
                    } text-2xl  p-1 rounded-full fixed bottom-5 right-5 `}
                >
                    {dark ? <MdLightMode /> : <MdDarkMode />}
                </motion.button>
            </footer>
        </>
    );
};

export default PageContainer;
