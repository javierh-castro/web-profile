"use client";

import "./Home.css";
import { useEffect, useRef } from "react";
import { SiNestjs, SiZod, SiPostgresql, SiExpress, SiReact, SiRedux, SiTailwindcss, SiCss3, SiMongodb, SiMysql, SiGithub  } from "react-icons/si";
import { RiNextjsLine, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoPython } from "react-icons/io5";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";


export default function Home() {
  const scrollersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const scrollers = scrollersRef.current;

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers: HTMLDivElement[]) => {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", "true");

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(
        ".scroller__inner"
      ) as HTMLDivElement;
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <section className="home">
      <article className="presentation">
        <div className="titulo">
          <h2>Javier Castro</h2>
          <h3 className="text-animation">
            Yo soy <span></span>
          </h3>
          <p>
            Explora mis proyectos destacados, competencias adquiridas y logros
            importantes que reflejan mi compromiso y pasión por mi profesión.
          </p>
          <div className="links-perfil">
            <p className="git">
            <SiGithub />
            </p>
            <p>
              <a
                className="github"
                href="https://github.com/javierh-castro"
                target="_blank"
              >
                <svg
                  viewBox="0 0 496 512"
                  height="1em"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>{" "}
              </a>
            </p>
            <p>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/javierhcc"
                target="_blank"
              >
                <svg
                  fill="#fff"
                  viewBox="0 0 448 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>{" "}
              </a>
            </p>
            <p>
              <a
                className="cv"
                href="https://docs.google.com/document/d/1teIMery5jQU2oLm9xv59Ly5G0Phe0HHErQqQmOmBs14/edit"
                target="_blank"
              >
                cv
              </a>
            </p>
          </div>
        </div>
        <div className="latest_projects 1g:flex flex-col">
          <h2 className="text-md font-regular uppercase text-gray-500 dark:text-white mb-4">
            Últimos proyectos:
          </h2>
          <div className="flex flex-col gap-y-4 ">
            <div className="[&>div]:hover:bg-pink-300 [&>div]:dark:hover:bg-cyan-600">
              <a
                target="_blank"
                className="text-xl"
                href="https:/"
              >
                Amynogym Tienda-Ecommerce
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
            <FaGitAlt size={70}/>
            <SiCss3 size={70}/>
            <SiTailwindcss size={70}/>
            <SiReact size={70}/>
            <SiRedux size={70}/>
            <FaNodeJs size={70}/>
            <SiExpress size={70}/>
            <IoLogoPython size={70}/>
            <BiLogoTypescript size={70}/>
            <RiJavascriptFill size={70}/>
            <SiPostgresql size={70}/>
            <SiMongodb size={70}/>
            <SiMysql size={70}/>
            <SiZod size={70}/>
            <RiNextjsLine size={70}/>
            <SiNestjs size={70} color="#E0234E"/>
          </div>
        </div>
      </article>
    </section>
  );
}