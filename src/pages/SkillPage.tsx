import React from "react";
import { programmingLanguageData } from "../libs/programmingLanguageData";

import AnimatedModal from "../components/AnimatedModal";
import AnimateDivContainer from "../baseComponents/AnimateDivContainer";

const SkillPage: React.FC = () => {
  return (
    <AnimateDivContainer>
      <div
        className={`text-center w-full text-primary font-bold text-3xl pt-10`}
      >
        My Programming <br /> Skill
      </div>
      <AnimatedModal datas={programmingLanguageData} />
    </AnimateDivContainer>
  );
};

export default SkillPage;
