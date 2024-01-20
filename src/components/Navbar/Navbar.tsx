import React, { useState } from "react";
import NavBrand from "./NavbarPart/NavBrand";
import MobileButton from "./NavbarPart/NavButton";
import NavLinks from "./NavbarPart/NavLinks";
// Nav link part

// Mobile button part

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className={`fixed top-0 left-0 w-full flex items-center z-10 bg-transparent backdrop-blur-md justify-center px-5  dark:text-light`}
        >
            <div className="container">
                <div className="flex justify-between relative">
                    {/* Navbar brand */}
                    <NavBrand brand="imfynn" />

                    <div className="flex items-center px-4">
                        {/* Navbar mobile button */}
                        <MobileButton isOpen={isOpen} setIsOpen={setIsOpen} />
                        {/* Navbar Links */}
                        <NavLinks isOpen={isOpen} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
