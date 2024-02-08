import React, { useState } from "react";
import NavbarContainer from "./NavbarPart/NavbarContainer";
import NavbarLogo from "./NavbarPart/NavbarLogo";
import NavbarLinks from "./NavbarPart/NavbarLinks";
import NavbarLinkItem from "./NavbarPart/NavbarLinkItem";
import { linkData } from "../libs/LinkData";
import NavbarButton from "./NavbarPart/NavbarButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  return (
    <NavbarContainer>
      <NavbarLogo brand="ImFynn" />
      <NavbarButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavbarLinks isOpen={isOpen}>
        {linkData.map((data, key) => {
          return (
            <NavbarLinkItem
              href={data.href}
              icon={data.icon}
              name={data.name}
              key={key}
            />
          );
        })}
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
