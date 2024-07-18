"use client";

import Link from "next/link";
import "./NavBar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ButtonIdioma from "./Button/ButtonIdioma";
import NavBarResponsive from "./NavBarResponsive/NavBarResponsive";
// import {Dropdown} from '@nextui-org/react'
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const links = [
  { name: "Home", href: "/" },
  { name: "Servicios", href: "/ServicesPage" },
  { name: "Proyectos", href: "/WorkProjects" },
  { name: "Habilidades", href: "/Skills" },
];

function NavBar() {
  let pathname = usePathname();
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState<number>(0);
  const [padding, setPadding] = useState<number>(30);
  const [boxShadow, setBoxShadow] = useState<number>(0);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };

    setClientWindowHeight(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  //Control de menu responsive
  // const handleToggle = () => {
  //   setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  // };

  const handleMenuItemClick = () => {
    setMenuVisible(false); // Cierra el menú al hacer clic en un elemento de navegación
  };

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
        <Image className="logo" src="/img/Logo2.png" alt="logo de perfil" width={50} height={50}/>
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
        <ButtonIdioma />
      </nav>
    </>
  );
}

export default NavBar;
