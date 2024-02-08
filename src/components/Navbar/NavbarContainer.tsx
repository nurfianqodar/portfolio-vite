import React, { ReactNode } from "react";

const NavbarContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center z-10 bg-transparent backdrop-blur-md justify-center px-5  dark:text-light`}
    >
      <div className="container">
        <div className="flex justify-between relative">{children}</div>
      </div>
    </header>
  );
};

export default NavbarContainer;
