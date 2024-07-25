"use client";

import "./Home.css";
import { useEffect, useRef } from "react";
import {
  SiNestjs,
  SiZod,
  SiPostgresql,
  SiExpress,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { RiNextjsLine, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoPython } from "react-icons/io5";
import { FaNodeJs, FaGitAlt, FaLinkedin, FaRegFileAlt } from "react-icons/fa";

export default function Home() {
  const scrollersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const scrollers = scrollersRef.current;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers: HTMLDivElement[]) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(
        ".scroller__inner"
      ) as HTMLDivElement;
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <section className="home">
      <div className="head">
        <article className="presentation">
          <span className="blur"></span>
          <div className="titulo">
            <h2>Javier Castro</h2>
            <h3 className="text-animation">
              Yo soy <span></span>
            </h3>
            <p>
              Explora mis proyectos destacados, las competencias que he
              adquirido y los logros importantes que reflejan mi compromiso y
              pasión por mi profesión.
            </p>
            <div className="links-perfil">
              <a
                className="git"
                href="https://github.com/javierh-castro"
                target="_blank"
              >
                <SiGithub />
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/javierhcc"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                className="cv"
                href="https://docs.google.com/document/d/1teIMery5jQU2oLm9xv59Ly5G0Phe0HHErQqQmOmBs14/edit"
                target="_blank"
              >
                <FaRegFileAlt />
              </a>
            </div>
          </div>
          <div className="latest_projects 1g:flex flex-col">
            <h4>Últimos proyectos:</h4>
            <ul className="flex flex-column  align-items-center">
              <a
                target="_blank"
                className="text-xl"
                href="https://cheery-cat-44c418.netlify.app"
              >
                Estado del tiempo
              </a>
              <a
                target="_blank"
                className="text-xl"
                href="https://github.com/javierh-castro/tic-tac-toe"
              >
                Tic Tac Toe
              </a>
            </ul>
          </div>
        </article>
        <article>
          <div
            className="scroller"
            ref={(el) => {
              if (el) scrollersRef.current[0] = el;
            }}
          >
            <div className="scroller__inner">
              <FaGitAlt size={70} />
              <SiCss3 size={70} />
              <SiTailwindcss size={70} />
              <SiReact size={70} />
              <SiRedux size={70} />
              <FaNodeJs size={70} />
              <SiExpress size={70} />
              <IoLogoPython size={70} />
              <BiLogoTypescript size={70} />
              <RiJavascriptFill size={70} />
              <SiPostgresql size={70} />
              <SiMongodb size={70} />
              <SiMysql size={70} />
              <SiZod size={70} />
              <RiNextjsLine size={70} />
              <SiNestjs size={70} />
            </div>
          </div>
        </article>
      </div>
      <article className="history">
        <h2>Sobre mí</h2>
        <p>
          Desde niño, la tecnología ha sido mi pasión. Mis primeros encuentros
          con computadoras y la fascinación por cómo funcionaban los programas
          me guiaron hacia la computación.
        </p>
        <p>
          Con el tiempo, mi interés creció y comencé a explorar la{" "}
          <span>arquitectura y los detalles técnicos</span>, desde la simulación
          por computadora hasta la
          <span> configuración de hardware</span>. Pasaba horas desmantelando y
          ensamblando computadoras, entendiendo el propósito de cada componente.
        </p>
        <p>
          Esta pasión me llevó a estudiar{" "}
          <span> programación y creación de software</span> en el Instituto de
          IES 9023. He trabajado en diversos proyectos, aplicando y ampliando
          mis conocimientos. Cada proyecto es un nuevo desafío y una oportunidad
          para crecer personal y profesionalmente.
        </p>
        <p>
          Espero seguir desarrollando mi carrera, adquiriendo nuevas habilidades
          y contribuyendo con mi conocimiento y experiencia.
        </p>
      </article>
    </section>
  );
}
