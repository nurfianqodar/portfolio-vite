import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarLinks: React.FC<{
  children: ReactNode;
  isOpen: boolean;
}> = (props, { children }) => {
  {
    /* Nav mobile screen */
  }
  return (
    <>
      <AnimatePresence>
        {props.isOpen && (
          // Nav moible screen
          <motion.nav
            // Framer motion config
            initial={{
              x: 400,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: 400,
            }}
            // Classname
            className="absolute py-5 bg-light  -right-5 top-full gap-y-1 dark:bg-slate-900 lg:hidden"
          >
            {/* Unorderes list */}
            <ul className="flex flex-col items-center">{children}</ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarLinks;
