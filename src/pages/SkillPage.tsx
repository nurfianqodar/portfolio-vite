import React from "react";
import { programmingLanguageData } from "../libs/programmingLanguageData";

import AnimatedModal from "../components/AnimatedModal";

const SkillPage: React.FC = () => {
  return (
    <>
      <div
        className={`text-center w-full text-primary font-bold text-3xl pt-10`}
      >
        My Programming <br /> Skill
      </div>
      <AnimatedModal datas={programmingLanguageData} />
    </>
  );
};

export default SkillPage;
