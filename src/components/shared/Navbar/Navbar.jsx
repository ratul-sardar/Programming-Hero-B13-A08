"use client";

import { Button } from "@heroui/react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

const NavLinks = [
  { name: "Home", link: "/" },
  { name: "All Animal", link: "/animals" },
];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleMobileNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav className="bg-white border-b border-t-mauve-700">
      <div className="relative w-11/12 max-w-360 mx-auto flex items-center justify-between py-4">
        {/* Logo area*/}
        <h3 className="text-lg md:text-2xl font-semibold">Gorur Hatt</h3>

        {/* Deskto Navbar*/}
        <ul className="flex gap-4 items-center max-md:hidden">
          <NavLinkComponent></NavLinkComponent>
        </ul>

        {/* Desktop CTA*/}
        <div className="max-md:hidden">
          <Cta></Cta>
        </div>

        {/* Mobile HamburgerMenu*/}
        <span onClick={handleMobileNav} className="md:hidden text-2xl">
          {isNavOpen ? <IoMdClose /> : <CiMenuFries></CiMenuFries>}
        </span>

        {/* Mobile Menu*/}
        {isNavOpen && (
          <div className="absolute top-[120%] w-full mx-auto space-y-8 border border-gray-600/30 bg-white p-4 rounded-2xl">
            <ul className="space-y-4">
              <NavLinkComponent></NavLinkComponent>
            </ul>
            <Cta></Cta>
          </div>
        )}
      </div>
    </nav>
  );
}

// CTA Buttons
function Cta() {
  return (
    <div className={`flex gap-4 items-center `}>
      <Button variant="outline">
        <Link href={"/login"}>Login</Link>
      </Button>

      <Button variant="primary">
        <Link href={"/register"}>Register</Link>
      </Button>
    </div>
  );
}

// NavLink Components
function NavLinkComponent() {
  return (
    <>
      {NavLinks.map((item) => (
        <li key={item.name}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}
