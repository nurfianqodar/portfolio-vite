import React from "react";
import SectionContainer from "../baseComponents/SectionContainer";
import { GrInstagram } from "react-icons/gr";
import AboutBiodata from "../components/AboutBiodata";

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
                <a className="my-10">
                    Follow my instagram <GrInstagram />
                </a>
            </SectionContainer>
            <SectionContainer>
                <h1 className="text-center font-bold text-xl">My Biodata</h1>
                <AboutBiodata />
            </SectionContainer>
        </>
    );
};

export default AboutPage;
