"use client";

import Link from "next/link";
import "./NavBar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavBarResponsive from "./NavBarResponsive/NavBarResponsive";
import SwitchMode from "./Button/SwitchMode";
import ButtonCv from "./Button/ButtonCv";
import LangDropdown from "./Button/LangDropdown";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/ServicesPage" },
  { name: "Proyectos", href: "/WorkProjects" },
  { name: "Habilidades", href: "/Skills" },
];

function NavBar() {
  let pathname = usePathname();
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };

    setClientWindowHeight(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="NavBarResponsive">
        <NavBarResponsive />
      </div>
      <nav className="nav nav-menu_visible">
        <Image
          className="logo"
          src="/img/jc.png"
          alt="logo de perfil"
          width={50}
          height={50}
        />
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
        <div className="flex gap-2 items-center">
          <ButtonCv />
          <SwitchMode />
          <LangDropdown />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
