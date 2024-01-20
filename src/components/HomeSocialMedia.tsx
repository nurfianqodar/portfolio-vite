import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const HomeSocialMedia: React.FC = () => {
    interface SocmedData {
        name: string;
        link: string;
        icon: React.FC;
    }

    const socmedData: SocmedData[] = [
        { icon: FaWhatsapp, name: "WhatsApp", link: "/" },
        { icon: FaTelegram, name: "Telegram", link: "/" },
        { icon: FaInstagram, name: "Instagram", link: "/" },
        { icon: FaFacebook, name: "Facebook", link: "/" },
        { icon: FaGithub, name: "Github", link: "/" },
    ];
    return (
        <motion.div className="flex text-2xl gap-x-4 px-5 py-2 rounded-full bg-slate-500/10 w-max">
            {socmedData.map((data, index) => {
                return (
                    <motion.a
                        key={index}
                        title={data.name}
                        href={data.link}
                        initial={{ opacity: 0.5, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{ duration: 0.3, delay: index / 10 }}
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
