"use client";

import Link from "next/link";
import "./NavBar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ButtonIdioma from "./Button/ButtonIdioma";
import SwitchMode from "./Button/SwitchMode";
import NavBarResponsive from "./NavBarResponsive/NavBarResponsive";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/ServicesPage" },
  { name: "Projects", href: "/WorkProjects" },
  { name: "Skills", href: "/Skills" },
];

function NavBar() {
  let pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };

    setClientWindowHeight(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const darkMode = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);


  return (
    <>
      <div className="NavBarResponsive">
      <NavBarResponsive/>
      </div>
      <nav
        className="nav nav-menu_visible"
        style={{
        }}
        >
        <Image className="logo" src="/img/jc.png" alt="logo de perfil" width={50} height={50}/>
        <ul className="nav_links">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <p className={`${pathname === link.href ? "active_link" : ""}`}>
                  {link.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <div className="hidden">
        <ButtonIdioma />
          </div>
        <SwitchMode onClick ={darkMode}/>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
