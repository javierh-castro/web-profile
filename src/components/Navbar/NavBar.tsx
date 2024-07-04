"use client";

import Link from "next/link";
import "./NavBar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  return (
    <nav className="fixed-top "
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '60px',
      width: '100%',
      padding: '0px 10%',
      transition: 'all 0.5s ease',
    }}
      // style={{
      //   background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
      //   padding: `${padding}px 0px`,
      //   boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      // }}
    >
        <Image src="/img/j2.png" alt="logo de perfil" width={50} height={30} />
        <ul className="nav_links">
          {links.map((link) => (
            <li>
              <Link key={link.name} href={link.href}>
                <p className={`${pathname === link.href ? "active_link" : ""}`}>
                  {link.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <aside>
          <button>Idioma</button>
          <button>Modo</button>
        </aside>
    </nav>
  );
}

export default NavBar;
