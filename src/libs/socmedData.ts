import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaDiscord, FaTelegram } from "react-icons/fa6";

interface SocmedData {
  name: string;
  link: string;
  icon: React.FC;
}

export const socmedData: SocmedData[] = [
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
