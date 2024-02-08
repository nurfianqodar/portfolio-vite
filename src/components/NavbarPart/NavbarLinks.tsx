import React, { ReactNode } from "react";

const NavbarLinks: React.FC<{
  isOpen: boolean;
  children: ReactNode;
}> = ({ children, isOpen }) => {
  return (
    // Nav moible screen
    <nav
      className={`${
        isOpen ? "absolute" : "hidden"
      }  top-full bg-light px-5 py-10 right-3 shadow-md rounded-xl lg:flex lg:shadow-none lg:static lg:py-0 lg:px-0 lg:items-center lg:right-0 lg:bg-transparent lg:dark:bg-transparent dark:bg-slate-900`}
    >
      <div className="flex flex-col items-center lg:flex-row lg:h-full">
        {children}
      </div>
    </nav>
  );
};

export default NavbarLinks;
