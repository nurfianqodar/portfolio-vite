import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { socmedData } from "../libs/socmedData";

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
    <footer className="bg-slate-900 bottom-0 w-full p-5 text-light justify-evenly">
      <div className="flex text-base text-light/50 gap-x-3 gap-y-2 mt-5 mb-2 flex-wrap mr-20">
        {socmedData.map((data, index) => {
          return (
            <a
              target="_blank"
              href={data.link}
              key={index}
              className="flex items-center gap-x-1"
            >
              <data.icon /> <span className="text-xs">{data.name}</span>
            </a>
          );
        })}
      </div>
      <h1 className="mt-5 text-sm font-light ">
        Created by{" "}
        <a
          href="https://www.instagram.com/imfyn77/"
          className="text-primary font-bold"
        >
          Nurfian Qodar
        </a>
        <span className=" mx-2">&copy;2023</span>
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
