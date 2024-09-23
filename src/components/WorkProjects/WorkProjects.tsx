"use client"

import { workprojects } from "../../services/langs/es.json";
import useTranslation from "@/src/hooks/use-translation";
import "./WorkProjects.css";
import Image from "next/image";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiReact, SiCss3, SiNodedotjs, SiZod, SiPostgresql, SiExpress  } from "react-icons/si";
// import

export default function WorkProjects() {
  const { t: translate } = useTranslation()
  const t = (key: string) => translate(key as any);

  const redirectToExternalPage = (url) => {
    window.open(url, "_blank",  "noopener noreferrer");
  };

  return (
    <section className="work-projects">
      <h1>{t("nav.projects")}</h1>
      <ul className="projects">
          {workprojects.map((project, index) => (
            <li className="project" key={project.title}>
            <Image
              src={`/img/${project.img}.png`}
              alt="Estado del tiempo"
              width={500}
              height={300}
              onClick={() => redirectToExternalPage(`${project.url}`)}
              className="cursor-pointer"
            />
            <div className="container-project">
              <div className="description-project">
                <h4 className="offer">{t(`workprojects.${index}.title`)}</h4>
                <p>
                {t(`workprojects.${index}.description`)}
                </p>
              </div>
              <ul className="url-links">
                <li className="urls">
                  <a
                    href={`${project.github}`}
                    target="_blank"
                    className="bi bi-github"
                    rel="noopener noreferrer"
                  ></a>
                  <a
                    href={`${project.url}`}
                    target="_blank"
                    className="bi bi-link"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li className="stack">
                  {typeof project.skill === 'string' && project.skill.includes('Typescript') ?  <SiTypescript/> :  <></>}
                  {typeof project.skill === 'string' && project.skill.includes('Next') ?  <SiNextdotjs/> :  <></>}
                  {typeof project.skill === 'string' && project.skill.includes('Node') ?  <SiNodedotjs /> :  <></>}
                  {typeof project.skill === 'string' && project.skill.includes('Zod') ?  <SiZod/> :  <></>}
                  {typeof project.skill === 'string' && project.skill.includes('Tailwindcss') ?  <SiTailwindcss/> :  <></>}
                  {typeof project.skill === 'string' && project.skill.includes('React') ?  <SiReact /> :  <></>}
                  {typeof project.skill === 'string' && project.skill.includes('Css') ?  <SiCss3/> :  <></>}
                  {typeof project.skill === 'string' && project.skill.includes('Postgresql') ?  <SiPostgresql /> :  <></>}
                  {typeof project.skill === 'string' && project.skill.includes('Express') ?  <SiExpress /> :  <></>}
                </li>
              </ul>
            </div>
          </li>
          ))}
      </ul>
    </section>
  );
}
