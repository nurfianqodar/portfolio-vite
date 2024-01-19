import { CgCode, CgMail, CgUser } from "react-icons/cg";
import { BiHome, BiPhotoAlbum } from "react-icons/bi";

interface link {
    name: string;
    href: string;
    icon: React.FC<{ className: string }>;
}
export const linkData: link[] = [
    {
        name: "Home",
        href: "/",
        icon: BiHome,
    },
    {
        name: "About Me",
        href: "/about",
        icon: CgUser,
    },
    {
        name: "My Skill",
        href: "/skill",
        icon: CgCode,
    },
    {
        name: "My Gallery",
        href: "/gallery",
        icon: BiPhotoAlbum,
    },
    {
        name: "Let's connect",
        href: "/contact",
        icon: CgMail,
    },
];
