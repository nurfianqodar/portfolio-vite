import React from "react";
import { GrInstagram } from "react-icons/gr";

const InstagramButton: React.FC = () => {
    return (
        <a className=" my-10 flex items-center relative w-fit rounded-full z-10 group mx-auto cursor-pointer">
            <span className="absolute bg-pink-400 rounded-full -z-10 scale-0 group-hover:scale-100 transition duration-300 left-full p-5 self-start dark:text-dark text-center ">
                Follow My Instagram
            </span>

            <span className="text-4xl hover:text-pink-600">
                <GrInstagram />
            </span>
        </a>
    );
};

export default InstagramButton;
