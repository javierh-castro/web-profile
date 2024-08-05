"use client";

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
import ButtonCv from "../Button/ButtonCv.jsx";
import LangDropdown from "../Button/LangDropdown.tsx";
import useTranslation from "@/src/hooks/use-translation.tsx";

export default function NavBarResponsive() {
  let pathname = usePathname();
  const { t } = useTranslation();

  const links = [
    { name: "nav.home", href: "/" },
    { name: "nav.services", href: "/ServicesPage" },
    { name: "nav.projects", href: "/WorkProjects" },
    { name: "nav.skills", href: "/Skills" },
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-blue-500 bg-opacity-50">
      <NavbarContent className="sm:hidden p-0 m-0" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden p-0 m-0" justify="center">
        <NavbarBrand>
          <div className="flex gap-2 items-center">
            <ButtonCv />
            <LangDropdown />
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-blue-500 bg-opacity-50">
        <AcmeLogo />
        {links.map((link, index) => (
          <NavbarMenuItem key={`${link}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 1
                  ? "warning"
                  : index === links.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={link.href}
              size="lg"
            >
              <p className={`${pathname === link.href ? "active_link" : ""}`}>
                {t(`${link.name}`)}
              </p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
