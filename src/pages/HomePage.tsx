import React from "react";
import PageContainer from "../baseComponents/PageContainer";
import SectionContainer from "../baseComponents/SectionContainer";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import HomeSocialMedia from "../components/HomeSocialMedia";
import heroImage from "../assets/images/undraw_developer_activity_re_39tg(1).svg";

const HomePage: React.FC = () => {
    return (
        <PageContainer>
            <SectionContainer>
                <h1 className="text-lg">
                    Hi! I'm
                    <span className="text-3xl my-2 font-bold text-primary">
                        <Typewriter
                            options={{
                                autoStart: true,
                                strings: [
                                    "Nurfian Qodar",
                                    "Web Developer",
                                    "Agriculture Student",
                                ],
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
                <h2 className="font-light text-sm mb-5">
                    Combining{" "}
                    <span className="font-semibold">sustainable farm</span> with
                    IoT
                </h2>
                <HomeSocialMedia />

                <p className="my-5 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempore consectetur illum quidem accusamus sunt totam itaque
                    recusandae officiis animi quod veritatis
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
        </PageContainer>
    );
};

export default HomePage;
