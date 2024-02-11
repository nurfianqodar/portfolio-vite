import React from "react";
import { motion } from "framer-motion";
import { socmedData } from "../libs/socmedData";

const HomeSocialMedia: React.FC = () => {
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
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex text-2xl gap-x-4 px-5 py-2 rounded-full bg-slate-500/10 w-max"
    >
      {socmedData.map((data, index) => {
        return (
          <motion.a
            key={index}
            target="_blank"
            title={data.name}
            href={data.link}
            variants={item}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.1 },
            }}
          >
            {<data.icon />}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default HomeSocialMedia;
