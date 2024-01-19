import React, { ReactNode } from "react";

const SectionContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <section className=" md:w-1/2 flex justify-center w-full mt-32 p-4">
            {children}
        </section>
    );
};

export default SectionContainer;
