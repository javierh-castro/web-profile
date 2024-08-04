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
  SiJavascript,
  SiPython,
  SiJest,
  SiAstro,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs, FaGitAlt, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import useTranslation from "@/src/hooks/use-translation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className="head">
        <article className="presentation">
          <span className="blur"></span>
          <div className="titulo">
            <h2>Javier Castro</h2>
            <h3 className="text-animation">
              {t("hello")}
              <span></span>
            </h3>
            <p>{t("presentation")}</p>
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
                href="https://drive.google.com/file/d/175UWPbgDfl-TB--2RW_MTOwGb8SPp2RP/view?usp=drive_link"
                target="_blank"
              >
                <FaRegFileAlt />
              </a>
            </div>
          </div>
          <div className="latest_projects 1g:flex flex-col">
            <h4>{t("last")}</h4>
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
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <SiJavascript className="img" size={70} />
              </div>
              <div className="slide">
                <SiTypescript className="img" size={70} />
              </div>
              <div className="slide">
                <FaNodeJs className="img" size={70} />
              </div>
              <div className="slide">
                <SiExpress className="img" size={70} />
              </div>
              <div className="slide">
                <SiNestjs className="img" size={70} />
              </div>
              <div className="slide">
                <SiPython className="img" size={70} />
              </div>
              <div className="slide">
                <SiCss3 className="img" size={70} />
              </div>
              <div className="slide">
                <SiTailwindcss className="img" size={70} />
              </div>
              <div className="slide">
                <SiReact className="img" size={70} />
              </div>
              <div className="slide">
                <RiNextjsLine className="img" size={70} />
              </div>
              <div className="slide">
                <SiPostgresql className="img" size={70} />
              </div>
              <div className="slide">
                <SiMongodb className="img" size={70} />
              </div>
              <div className="slide">
                <SiMysql className="img" size={70} />
              </div>
              <div className="slide">
                <FaGitAlt className="img" size={70} />
              </div>
              <div className="slide">
                <SiRedux className="img" size={70} />
              </div>
              <div className="slide">
                <SiZod className="img" size={70} />
              </div>
              <div className="slide">
                <SiJest className="img" size={70} />
              </div>
              <div className="slide">
                <SiAstro className="img" size={70} />
              </div>
              <div className="slide">
                <SiJavascript className="img" size={70} />
              </div>
              <div className="slide">
                <SiTypescript className="img" size={70} />
              </div>
              <div className="slide">
                <FaNodeJs className="img" size={70} />
              </div>
              <div className="slide">
                <SiExpress className="img" size={70} />
              </div>
              <div className="slide">
                <SiNestjs className="img" size={70} />
              </div>
              <div className="slide">
                <SiPython className="img" size={70} />
              </div>
              <div className="slide">
                <SiCss3 className="img" size={70} />
              </div>
              <div className="slide">
                <SiTailwindcss className="img" size={70} />
              </div>
              <div className="slide">
                <SiReact className="img" size={70} />
              </div>
              <div className="slide">
                <RiNextjsLine className="img" size={70} />
              </div>
              <div className="slide">
                <SiPostgresql className="img" size={70} />
              </div>
              <div className="slide">
                <SiMongodb className="img" size={70} />
              </div>
              <div className="slide">
                <SiMysql className="img" size={70} />
              </div>
              <div className="slide">
                <FaGitAlt className="img" size={70} />
              </div>
              <div className="slide">
                <SiRedux className="img" size={70} />
              </div>
              <div className="slide">
                <SiZod className="img" size={70} />
              </div>
              <div className="slide">
                <SiJest className="img" size={70} />
              </div>
              <div className="slide">
                <SiAstro className="img" size={70} />
              </div>
            </div>
          </div>
        </article>
      </div>
      <article className="history">
        <h2>{t("about.title")}</h2>
        <p>{t("about.description1")}</p>
        <p>
          {t("about.description2")}
          <span>{t("about.span1")} </span>
          {t("about.description3")}
        </p>
        <p>
          {t("about.description4")}
          <span>{t("about.span2")}</span>
          {t("about.description5", ["IES 9023"])}
        </p>
        <p>
        {t("about.description6")}
        </p>
      </article>
    </section>
  );
}
