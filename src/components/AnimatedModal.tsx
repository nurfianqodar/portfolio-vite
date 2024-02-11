import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiLinkExternal, BiX } from "react-icons/bi";

// Iterface for props data
interface dataIcons {
  icons: React.FC;
  className: string;
  title: string;
  link: string;
  description: string;
}

// Container Animation config
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

// Items Animatian config
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AnimatedModal: React.FC<{ datas: dataIcons[] }> = (props) => {
  // State for modal animation
  const [selectedId, setSelectedId]: [
    null | string,
    React.Dispatch<React.SetStateAction<null | string>>
  ] = useState<null | string>(null);

  //
  return (
    // Container
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-10 justify-center mt-10 lg:gap-16 lg:px-32"
    >
      {/* Modal menu */}
      {props.datas.map((data, index) => {
        return (
          <motion.div
            className={`${data.className} bg-slate-100 w-20 rounded-xl dark:bg-slate-200  p-3 shadow-lg dark:shadow-primary/25 lg:w-32`}
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

      {/* Animated modal box */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="h-full w-full top-0 py-20 px-5 fixed z-[999] flex items-center justify-center backdrop-blur-xl"
          >
            <div className=" bg-white shadow-xl h-full mt-16 py-10 px-4 max-w-5xl rounded-2xl dark:bg-slate-800 relative">
              {/* Close button */}
              <motion.button
                onClick={() => setSelectedId(null)}
                className="text-2xl text-light p-1 m-3 rounded-full bg-red-500 absolute -top-3 -left-3 dark:text-dark"
              >
                <BiX />
              </motion.button>

              <div className="h-full  w-full overflow-auto py-3 px-4 rounded-xl md:px-10 lg:px-16 bg-slate-100 dark:bg-dark">
                <div className="h-max flex items-center justify-center gap-y-5 flex-col py-10 ">
                  <h1 className="text-primary font-bold text-2xl">
                    {props.datas[Number(selectedId)].title}
                  </h1>

                  <p className="text-justify">
                    {props.datas[Number(selectedId)].description}
                  </p>
                  <a
                    className="bg-primary py-2 px-3 rounded-full text-light font-bold flex"
                    href={props.datas[Number(selectedId)].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`Learn ${props.datas[Number(selectedId)].title}`}{" "}
                    <BiLinkExternal />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedModal;
