import React from "react";
import { motion } from "framer-motion";

const AboutBiodata: React.FC = () => {
  const date: Date = new Date();
  interface Biodata {
    k: string;
    c: string;
  }
  const biodata: Biodata[] = [
    {
      k: "Name",
      c: "Nurfian Qodar",
    },
    {
      k: "Address",
      c: "Ciamis-West Java",
    },
    {
      k: "DoB",
      c: "27 November 2003",
    },
    {
      k: "Age",
      c: `${date.getFullYear() - 2003} years old`,
    },
    {
      k: "Hobby",
      c: "Coding",
    },
    {
      k: "study",
      c: "Agroteknologi",
    },
    {
      k: "Another Hobby",
      c: "Gaming",
    },
  ];

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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-2 items-center justify-center my-5"
    >
      {biodata.map((data, index) => {
        return (
          <motion.li
            variants={item}
            key={index}
            className="bg-dark text-light dark:bg-light dark:text-dark rounded-xl p-2"
          >
            <span className="block text-sm">{data.k}</span>
            <span className="block text-primary text-xl font-semibold">
              {data.c}
            </span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default AboutBiodata;
