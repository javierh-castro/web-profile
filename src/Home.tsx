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
  SiTypescript,
  SiPython
} from "react-icons/si";
import { RiNextjsLine, RiJavascriptFill } from "react-icons/ri";
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
            <h2 className="text-md font-regular uppercase text-gray-500 dark:text-white mb-4">
              Últimos proyectos:
            </h2>
            <div className="[&>div]:hover:bg-pink-300 [&>div]:dark:hover:bg-cyan-600">
              <a target="_blank" className="text-xl" href="https:/">
                Clima en React
              </a>

              <div className="dark:bg-slate-800 bg-slate-200 h-0.5 w-full my-4">
                <a target="_blank" className="text-xl" href="https:/">
                  Tic Tac Toe
                </a>
              </div>
            </div>
          </div>
        </article>
        {/* <article>
          <div
            className="scroller"
            ref={(el) => {
              if (el) scrollersRef.current[0] = el;
            }}
          >
            <div className="scroller__inner">
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
            </div>
          </div>
        </article> */}
        
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