"use client";

import Link from "next/link";
import "./NavBar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ButtonIdioma from './Button/ButtonIdioma'
// import {Dropdown} from '@nextui-org/react'
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";




const links = [
  { name: "Home", href: "/" },
  { name: "Portafolio", href: "/WorkProjects" },
  { name: "Habilidades", href: "/Skills" },
  { name: "Contacto", href: "/Contact" },
];

function NavBar() {
  let pathname = usePathname();
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState<number>(0);
  const [padding, setPadding] = useState<number>(30);
  const [boxShadow, setBoxShadow] = useState<number>(0);
  const [menuVisible, setMenuVisible] = useState(false);
  // // const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));
  // const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["text"]));

  // // Función de adaptación
  // const handleSelectionChange = (keys: Set<React.Key>) => {
  //   // Convierte 'keys' al tipo esperado por 'setSelectedKeys'
  //   const newKeys = new Set<string>(Array.from(keys) as string[]);
  //   setSelectedKeys(newKeys);
  // };

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
   const handleToggle = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  const handleMenuItemClick = () => {
    setMenuVisible(false); // Cierra el menú al hacer clic en un elemento de navegación
  };


  return (
    <nav
    className={`nav-links ${menuVisible ? "nav-menu_visible" : " "}`}
      style={{
        position: "sticky",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        width: '100%',
        padding: '0px 12%',
        transition: "all 0.5s ease",
        background: `rgba(1, 22, 31, ${backgroundTransparacy})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        zIndex: 1000, // Asegura que el nav se quede encima de otros elementos
      }}
    >
      <button
            className="nav-toggle"
            aria-label={menuVisible ? "Cerrar menú" : "Abrir menú"}
            onClick={handleToggle}
          >
            <i className="bi bi-list"></i>
          </button>
      <Image src="/img/j2.png" alt="logo de perfil" width={50} height={30} />
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
      <ButtonIdioma/>
    </nav>
  );
}

export default NavBar;
