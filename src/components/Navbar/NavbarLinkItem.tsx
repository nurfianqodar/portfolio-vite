import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const NavbarLinkItem: React.FC<{
  key?: number;
  href: string;
  name: string;
  icon: React.FC<{ className: string }>;
}> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <motion.li
      // Framer motion config
      key={props.key}
      initial={{
        x: 400,
      }}
      animate={{
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 400,
      }}
      // Classname
      className={`${
        location.pathname === props.href
          ? "bg-primary text-light font-semibold dark:text-dark"
          : "group  text-dark dark:text-light"
      }  rounded-full my-1`}
    >
      {/* Anchor */}
      <a
        // Onclick function
        onClick={() => navigate(props.href)}
        className={`text-base py-2 mx-8 flex items-center cursor-pointer group-hover:text-primary`}
      >
        <props.icon className="" /> <span>{props.name}</span>
      </a>
    </motion.li>
  );
};

export default NavbarLinkItem;
