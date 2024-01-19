import React from "react";

import { CgClose, CgMenu } from "react-icons/cg";

const MobileButton: React.FC<{
    // Props type
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    // Function
}> = (props) => {
    const handleClick = () => {
        props.setIsOpen(!props.isOpen);
    };
    return (
        <button onClick={() => handleClick()} className="text-2xl lg:hidden">
            {props.isOpen ? <CgClose className="text-red-500" /> : <CgMenu />}
        </button>
    );
};

export default MobileButton;
