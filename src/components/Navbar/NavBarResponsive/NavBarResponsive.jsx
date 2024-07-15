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
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { usePathname } from "next/navigation";

export default function NavBarResponsive() {
  // const menuItems = [
  //   "Home",
  //   "Servicios",
  //   "Proyectos",
  //   "Habilidades",
  //   "Salir",
  // ];
  let pathname = usePathname();
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Servicios", href: "/ServicesPage" },
    { name: "Proyectos", href: "/WorkProjects" },
    { name: "Habilidades", href: "/Skills" },
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-gray-100 shadow-lg fixed w-full top-0 z-50">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>


      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/Home">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Modo/Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((link, index) => (
          <NavbarMenuItem key={`${link}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 1 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
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
