'use client'

import Link from "next/link";
import "./NavBar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/"},
  { name: "Portafolio", href: "/WorkProjects"},
  { name: "Habilidades", href: "/Skills"},
  { name: "Contacto", href: "/Contact"},
];

function NavBar() {
  let pathname = usePathname();
 console.log(links)
  return (
    <nav className="nav">
          <Image
            src="/img/j2.png"
            alt="logo de perfil"
            width={50}
            height={30}
          />
          <ul className="nav_links">
          {links.map((link) => (
            <li>
              <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href ? "bg-sky-100 text-blue-600" : ""}`}
            >
              <p className="">{link.name}</p>
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
