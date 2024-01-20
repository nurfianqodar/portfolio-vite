import React, { ReactNode } from "react";

const SectionContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <section className=" md:w-1/2 w-full mt-12 p-4">{children}</section>;
};

export default SectionContainer;
