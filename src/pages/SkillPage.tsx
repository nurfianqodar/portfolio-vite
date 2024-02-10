import React from "react";
import { programmingLanguageData } from "../libs/programmingLanguageData";
import { motion } from "framer-motion";

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
            <motion.button
              className={`${data.className} bg-slate-100 w-20 rounded-xl dark:bg-slate-200  p-3 shadow-lg dark:shadow-react lg:w-32`}
              key={index}
              variants={item}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 1.4 }}
            >
              <data.icons />
            </motion.button>
          );
        })}
      </motion.div>
    </>
  );
};

export default SkillPage;
