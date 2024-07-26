import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { usePathname } from "next/navigation";
import ButtonIdioma from "../Button/ButtonIdioma";
import SwitchMode from "../Button/SwitchMode";
import ButtonCv from "../Button/ButtonCv";

export default function NavBarResponsive() {
  let pathname = usePathname();
  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/ServicesPage" },
    { name: "Proyectos", href: "/WorkProjects" },
    { name: "Habilidades", href: "/Skills" },
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-blue-500 bg-opacity-50">
      <NavbarContent className="sm:hidden p-0 m-0" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden p-0 m-0" justify="center">
        <NavbarBrand>
          <div className="flex gap-2">
            <div className="hidden">
              <ButtonIdioma />
            </div>
            <ButtonCv />
            {/* <SwitchMode /> */}
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-blue-500 bg-opacity-50">
        <AcmeLogo/>
        {menuItems.map((link, index) => (
          <NavbarMenuItem key={`${link}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 1
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={link.href}
              size="lg"
            >
              <p className={`${pathname === link.href ? "active_link" : ""}`}>
                {link.name}
              </p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
