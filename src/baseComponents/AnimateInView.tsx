import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

const AnimateInView: React.FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log(isInView);

  return (
    <section ref={ref} className="mt-32">
      <motion.span
        // style={{
        //   transform: isInView ? "none" : "translateX(-200px)",
        //   opacity: isInView ? 1 : 0,
        //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        // }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          transition: {
            duration: 2,
          },
        }}
      >
        {isInView && children}
      </motion.span>
    </section>
  );
};

export default AnimateInView;
