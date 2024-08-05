"use client";

import Link from "next/link";
import "./NavBar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavBarResponsive from "./NavBarResponsive/NavBarResponsive";
import SwitchMode from "./Button/SwitchMode";
import ButtonCv from "./Button/ButtonCv";
import LangDropdown from "./Button/LangDropdown";
import useTranslation from "@/src/hooks/use-translation";

type NavLinkName = "nav.home" | "nav.services" | "nav.projects" | "nav.skills";

interface NavLink {
  name: NavLinkName;
  href: string;
}


function NavBar() {
  let pathname = usePathname();
  const { t } = useTranslation();

  const links: NavLink[] = [
    { name: "nav.home", href: "/" },
    { name: "nav.services", href: "/ServicesPage" },
    { name: "nav.projects", href: "/WorkProjects" },
    { name: "nav.skills", href: "/Skills" },
  ];

  return (
    <>
      <nav className="NavBarResponsive">
        <NavBarResponsive />
      </nav>
      <nav className="nav nav-menu-visible">
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
                  {t(link.name)}
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
