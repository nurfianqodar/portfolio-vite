import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { SiInternetcomputer } from "react-icons/si";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <div className="h-full w-full mx-auto">
            <h1 className="text-5xl flex gap-3">
                404 PAGE NOT FOUND <SiInternetcomputer />
            </h1>
            <Link className="" to={"/"}>
                Back to home
                <span className="text-7xl">
                    <BiHomeCircle />
                </span>
            </Link>
        </div>
    );
};

export default NotFoundPage;
