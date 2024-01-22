import React from "react";
import SectionContainer from "../baseComponents/SectionContainer";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import HomeSocialMedia from "../components/HomeSocialMedia";
import heroImage from "../assets/images/undraw_developer_activity_re_39tg(1).svg";

const HomePage: React.FC = () => {
    return (
        <>
            <SectionContainer>
                <h1 className="text-base">
                    Hi! I'm
                    <span className="text-4xl my-2 font-bold text-primary">
                        <Typewriter
                            options={{
                                autoStart: true,
                                strings: [
                                    "Nurfian Qodar",
                                    "Web Developer",
                                    "Farmer",
                                ],
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
                <h2 className="font-light  mb-5">
                    Combining{" "}
                    <span className="font-semibold">sustainable farm</span> with
                    IoT
                </h2>
                <HomeSocialMedia />

                <p className="my-6 text-xl font-light">
                    <strong className="mb-5 font-bold">
                        <span className="text-teal-500">Agriculture</span>{" "}
                        Enthusiast and{" "}
                        <span className="text-primary">Coding</span> Aficionao |
                    </strong>{" "}
                    Cultivating creativity in fields and code. Explore my
                    portfolio, a fusion of love for farming and passion for
                    programming.
                </p>
                <div className="flex gap-8">
                    <Link
                        className="flex item-center py-2 px-3 rounded-full justify-center bg-primary text-light dark:text-dark"
                        to={"/"}
                    >
                        My Resume <BiLinkExternal />
                    </Link>
                    <Link
                        className="flex item-center py-2 px-3 rounded-full justify-center border border-primary"
                        to={"/contact"}
                    >
                        Let's connect
                    </Link>
                </div>
            </SectionContainer>
            <SectionContainer>
                <div className="flex flex-col items-center gap-y-5">
                    <img src={heroImage} alt="" className="max-w-sm w-full" />
                    <h1 className="flex font-mono px-5 py-2 bg-dark rounded-xl text-light self-start dark:bg-light dark:text-dark w-full">
                        <Typewriter
                            options={{
                                autoStart: true,

                                strings: [
                                    "Just Coding >_",
                                    'print("Hello Friends!!")',
                                    "sudo be --my-friend",
                                    "const coffe = new Coffe();",
                                    "sudo rm -rf enemy",
                                ],
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
            </SectionContainer>
        </>
    );
};

export default HomePage;
