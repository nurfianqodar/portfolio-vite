import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { linkData } from "./LinkData";

const NavLinks: React.FC<{ isOpen: boolean }> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    // Link interface

    // Link data

    // Return here
    return (
        <>
            {/* Nav mobile screen */}
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
                            transition: {
                                delay: (linkData.length + 2) / 10,
                            },
                        }}
                        // Classname
                        className="absolute py-5 bg-light  -right-5 top-full gap-y-1 dark:bg-slate-900 lg:hidden"
                    >
                        {/* Unorderes list */}
                        <ul className="flex flex-col items-center">
                            {/* Link data mapping */}
                            {linkData.map((data, index) => {
                                return (
                                    <motion.li
                                        // Framer motion config
                                        key={index}
                                        initial={{
                                            x: 400,
                                        }}
                                        animate={{
                                            x: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: 400,
                                            transition: {
                                                delay: index / 10,
                                            },
                                        }}
                                        transition={{
                                            delay: index / 10,
                                        }}
                                        // Classname
                                        className={`${
                                            location.pathname === data.href
                                                ? "bg-primary text-light font-semibold dark:text-dark"
                                                : "group  text-dark dark:text-light"
                                        }  rounded-full my-1`}
                                    >
                                        {/* Anchor */}
                                        <a
                                            // Onclick function
                                            onClick={() => navigate(data.href)}
                                            className={`text-base py-2 mx-8 flex items-center cursor-pointer group-hover:text-primary`}
                                        >
                                            <data.icon className="" />{" "}
                                            <span>{data.name}</span>
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Nav lg screen */}
            <nav className="hidden lg:flex">
                <ul className="flex gap-2">
                    {linkData.map((data, index) => {
                        return (
                            <motion.li
                                key={index}
                                initial={{
                                    y: -100,
                                }}
                                animate={{
                                    y: 0,
                                }}
                                transition={{
                                    delay: index / 20,
                                }}
                                className={`${
                                    location.pathname === data.href
                                        ? "bg-primary text-light font-semibold dark:text-dark"
                                        : "group  text-dark dark:text-light"
                                }  rounded-full my-1`}
                            >
                                <a
                                    onClick={() => navigate(data.href)}
                                    className={`text-base  py-2 gap-x-1 px-3 flex items-center cursor-pointer group-hover:text-primary`}
                                >
                                    <data.icon className="" />{" "}
                                    <span>{data.name}</span>
                                </a>
                            </motion.li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default NavLinks;
