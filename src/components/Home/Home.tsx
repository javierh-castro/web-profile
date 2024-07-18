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
        <div className="titulo">
          <h1>Javier Castro</h1>
          <h3 className="text-animation">
            Yo soy <span></span>
          </h3>
          <p>
            Explora mis proyectos destacados, competencias adquiridas y logros
            importantes que reflejan mi compromiso y pasión por mi profesión.
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
          <div className="flex flex-col gap-y-4 ">
            <div className="[&>div]:hover:bg-pink-300 [&>div]:dark:hover:bg-cyan-600">
              <a target="_blank" className="text-xl" href="https:/">
                Clima en React
              </a>
              <div className="dark:bg-slate-800 bg-slate-200 h-0.5 w-full my-4"></div>
            </div>
          </div>
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
            <SiNestjs size={70} color="#E0234E" />
          </div>
        </div>
      </article>
      </div>
      <article className="history">
        <h1>Sobre mí</h1>
        <p>
        La tecnología ha sido una pasión desde que era niño. Me encantaban mis primeros encuentros con computadoras, el descubrimiento de cómo funcionaban los programas y las aplicaciones, y la manera en que interactuaban entre sí. Así, apenas siendo un niño, supe que la computación sería algo que me atraería en los años posteriores.
        </p>
        <p>
        Al crecer, mi pasión por la tecnología se volvió cada vez más fuerte. Empecé a explorar la arquitectura y los detalles técnicos, desde la simulación por computadoras hasta la configuración de hardware. Pasaba horas desmantelando y ensamblando computadoras, intentando averiguar cada componente diferente y su propósito.
        </p>
        <p>
        Se convirtió en la motivación para mi educación y aprendí sobre problemas informáticos más complicados como la programación y la creación de software. Pude trabajar en varios proyectos y aplicar y desarrollar mi conocimiento en esta área. Cada uno de ellos es un nuevo desafío y una opción de crecimiento como persona y profesional. Espero que en el futuro pueda seguir mi carrera joven y emocionante, adquirir nuevas habilidades y, con suerte, deber una diferencia usando mi conocimiento y habilidades.
        </p>
      </article>
    </section>
  );
}
