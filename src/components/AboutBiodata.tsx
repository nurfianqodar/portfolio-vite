import React from "react";

const AboutBiodata: React.FC = () => {
    interface Biodata {
        k: string;
        c: string;
    }
    const biodata: Biodata[] = [
        {
            k: "Name",
            c: "Nurfian Qodar",
        },
        {
            k: "Address",
            c: "Rancah-Ciamis, West Java",
        },
        {
            k: "DoB",
            c: "27 November 2003",
        },
    ];
    return (
        <ul className="flex flex-wrap gap-2 items-center justify-center my-5">
            {biodata.map((data, index) => {
                return (
                    <li
                        key={index}
                        className="bg-dark text-light dark:bg-light dark:text-dark rounded-xl p-2"
                    >
                        <span className="block text-sm">{data.k}</span>
                        <span className="block text-primary text-base font-semibold">
                            {data.c}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default AboutBiodata;
