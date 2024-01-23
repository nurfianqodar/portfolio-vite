import React from "react";
import SectionContainer from "../baseComponents/SectionContainer";
import { GrInstagram } from "react-icons/gr";
import AboutBiodata from "../components/AboutBiodata";
import { Link } from "react-router-dom";
import { CgCode } from "react-icons/cg";

const AboutPage: React.FC = () => {
    return (
        <>
            <SectionContainer>
                <h1 className="text-xl font-bold mb-3">Hello There!!!</h1>
                <p className="my-4">
                    <span className="text-4xl mb-5 inline-block">
                        I'm Nurfian Qodar -{" "}
                    </span>
                    Hailing from the charming town of Ciamis. By day I'am a
                    passionate agriculture student nurturing seeds of knowledge.{" "}
                    <span className="text-primary text-2xl font-bold">
                        By night, I transform into a web programming enthusiast,
                        weaving digital landscapes.{" "}
                    </span>
                    Join me on this dynamic journey of growth and code.
                </p>
                <a className=" my-10 flex items-center relative w-fit rounded-full z-10 group mx-auto cursor-pointer">
                    <span className="absolute bg-pink-400 rounded-full -z-10 scale-0 group-hover:scale-100 transition duration-300 left-full p-5 self-start dark:text-dark text-center ">
                        Follow My Instagram
                    </span>

                    <span className="text-4xl hover:text-pink-600">
                        <GrInstagram />
                    </span>
                </a>
            </SectionContainer>
            <SectionContainer>
                <h1 className="text-center font-bold text-4xl text-primary">
                    My Biodata
                </h1>
                <AboutBiodata />
                <button className=" text-4xl mx-auto w-fit bg-primary flex relative group mt-10 hover:scale-95 rounded-2xl p-2">
                    <Link to={"/skill"} className="text-dark ">
                        <CgCode />
                    </Link>
                    <span className="scale-x-0 absolute group-hover:scale-x-100 w-max text-xl top-full right-px transition duration-300 origin-left">
                        See My Coding Skill
                    </span>
                </button>
            </SectionContainer>
        </>
    );
};

export default AboutPage;
