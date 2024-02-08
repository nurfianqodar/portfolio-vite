import React, { ReactNode, ReducerAction } from "react";

const NavbarButton: React.FC<{
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: ReducerAction<React.SetStateAction<boolean>>;
}> = ({ children }) => {
  const handleClick = () => {};
  return (
    <div>
      <button onClick={() => handleClick()}>{children}</button>
    </div>
  );
};

export default NavbarButton;
