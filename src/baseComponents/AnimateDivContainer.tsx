import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimateDivContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      className="flex flex-wrap"
      initial={{
        scaleX: 0,
        opacity: 0,
      }}
      animate={{
        scaleX: [0, 1],
        opacity: 1,
        transition: {
          duration: 0.6,
          type: "spring",
          stiffness: "50",
        },
      }}
      exit={{
        opacity: 0,
        scaleX: 0,
        transition: {
          duration: 0.6,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateDivContainer;
