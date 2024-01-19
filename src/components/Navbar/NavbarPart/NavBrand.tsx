import React from "react";
import { Link } from "react-router-dom";

const NavBrand: React.FC<{ brand: string }> = (props) => {
    return (
        <div className="px-4">
            <Link
                to={"/"}
                className="font-bold text-lg text-primary block py-6"
            >
                {props.brand}
            </Link>
        </div>
    );
};

export default NavBrand;
