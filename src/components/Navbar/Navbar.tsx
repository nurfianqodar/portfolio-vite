import React from "react";
import NavbarContainer from "./NavbarContainer";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarLinkItem from "./NavbarLinkItem";
import { linkData } from "../../libs/LinkData";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarLogo brand="Kang Joki" />
      <NavbarLinks isOpen={true}>
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
