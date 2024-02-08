import React from "react";
import { BiX } from "react-icons/bi";
import { HiViewList } from "react-icons/hi";

const NavbarButton: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  // For handle click
  const handleClick = () => {
    props.setIsOpen(!props.isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => handleClick()}
        className={`${
          props.isOpen ? "text-red-500" : "text-dark dark:text-light"
        } flex items-center justify-center h-full text-2xl`}
      >
        {props.isOpen ? <BiX /> : <HiViewList />}
      </button>
    </div>
  );
};

export default NavbarButton;
