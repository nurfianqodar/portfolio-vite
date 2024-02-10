import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaDiscord, FaTelegram } from "react-icons/fa6";

const HomeSocialMedia: React.FC = () => {
  interface SocmedData {
    name: string;
    link: string;
    icon: React.FC;
  }

  const socmedData: SocmedData[] = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      link: "https://wa.me/6285520749954",
    },
    {
      icon: FaTelegram,
      name: "Telegram",
      link: "https://t.me/fynnn77",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      link: "https://www.instagram.com/imfyn77",
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      link: "https://web.facebook.com/nurfian.qodar",
    },
    {
      icon: FaGithub,
      name: "Github",
      link: "https://github.com/nurfianqodar",
    },
    {
      icon: FaDiscord,
      name: "Discord",
      link: "https://discord.com/invite/Q2uNsBfR",
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
