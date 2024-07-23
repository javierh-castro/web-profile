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

export default function NavBarResponsive() {
  let pathname = usePathname();
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/ServicesPage" },
    { name: "Projects", href: "/WorkProjects" },
    { name: "Skills", href: "/Skills" },
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-blue-500 bg-opacity-50">
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

      <NavbarMenu className="bg-blue-500 bg-opacity-50">
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
