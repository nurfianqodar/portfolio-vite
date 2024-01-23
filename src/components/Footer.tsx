import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Footer: React.FC = () => {
    const [dark, setDark] = useState<boolean | undefined>();

    const handleDarkMode = () => {
        const html = document.getElementById("html");
        if (html) {
            html.classList.toggle("dark");
            const isDark = html.classList.contains("dark");
            setDark(isDark);
        }
    };
    return (
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
                } text-3xl  p-2 rounded-full fixed bottom-5 right-5 `}
            >
                {dark ? <MdLightMode /> : <MdDarkMode />}
            </motion.button>
        </footer>
    );
};

export default Footer;
