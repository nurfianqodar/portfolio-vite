import React, { useState } from "react";
import { programmingLanguageData } from "../libs/programmingLanguageData";
import { motion, AnimatePresence } from "framer-motion";
import { BiX } from "react-icons/bi";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SkillPage: React.FC = () => {
  const [selectedId, setSelectedId]: [
    null | string,
    React.Dispatch<React.SetStateAction<null | string>>
  ] = useState<null | string>(null);
  return (
    <>
      <div
        className={`text-center w-full text-primary font-bold text-3xl pt-10`}
      >
        My Programming <br /> Skill
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-10 justify-center mt-10 lg:gap-16 lg:px-32"
      >
        {programmingLanguageData.map((data, index) => {
          return (
            <motion.div
              className={`${data.className} bg-slate-100 w-20 rounded-xl dark:bg-slate-200  p-3 shadow-lg dark:shadow-react lg:w-32`}
              key={index}
              variants={item}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 1.4 }}
              onClick={() => setSelectedId(index.toString())}
              layoutId={index.toString()}
            >
              <data.icons />
            </motion.div>
          );
        })}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="h-full w-full top-0 py-20 px-5 fixed z-[9999]"
            >
              <div className=" bg-white shadow-xl h-full relative py-7 px-4">
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="text-2xl text-light p-1 m-3 rounded-full bg-red-500 absolute -top-7 -left-7"
                >
                  <BiX />
                </motion.button>
                <div className="h-full w-full bg-dark/10 overflow-auto py-3 px-4 rounded-xl">
                  <div className="h-max flex items-center justify-center gap-y-5 flex-col py-10">
                    <h1 className="text-primary font-bold text-2xl">
                      {programmingLanguageData[Number(selectedId)].title}
                    </h1>

                    <p className="text-justify">
                      {programmingLanguageData[Number(selectedId)].description}
                    </p>
                    <a
                      className="bg-primary py-2 px-3 rounded-full text-light font-bold"
                      href={programmingLanguageData[Number(selectedId)].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {`Learn ${
                        programmingLanguageData[Number(selectedId)].title
                      }`}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SkillPage;
