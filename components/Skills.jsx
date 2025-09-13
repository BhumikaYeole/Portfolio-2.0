import React from "react";
import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaReact,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { MdUnfoldMore } from "react-icons/md";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiDjango,
  SiFlask,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

const Skills = (props) => {
  const categories = [
    {
      title: "Languages",
      icon: <FaCode className="text-[var(--text-color)] text-xl" />,
      items: [
        { icon: <FaJava />, name: "Java" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <SiJavascript />, name: "JavaScript" },
      ],
    },
    {
      title: "Frontend",
      icon: <FaLaptopCode className="text-[var(--text-color)] text-xl" />,
      items: [
        { icon: <SiHtml5 />, name: "HTML" },
        { icon: <SiCss3 />, name: "CSS" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "TailwindCSS" },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="text-[var(--text-color)] text-xl" />,
      items: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiFirebase />, name: "Firebase" },
        {icon : <SiPrisma /> , name : "Prisma"},
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-[var(--text-color)] text-xl" />,
      items: [
        {icon : <SiPostgresql /> , name : "PostgreSQL"},
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiSqlite />, name: "SQLite" },
      ],
    },
    {
      title: "Others",
      icon: <FaTools className="text-[var(--text-color)] text-xl" />,
      items: [
        {icon : <SiGit /> , name : "Git"},
        { icon: <SiGithub />, name: "Github" },
        { icon: <LuBrainCircuit />, name: "AI - ML" },
      ],
    },

  ];

  return (
    <section
      id="skills"
      data-theme = {props.theme ? 'light' : 'dark'}
      className="py-16 px-6 mb-10  bg-[var(--bg-gradient)] text-center flex flex-col justify-center items-center min-h-[calc(100vh+80px)] gap-4"
    >
      <div className="text-center mt-6 mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--text-secondary)] font-extrabold">
          My Skills
        </h2>
        <div className="mt-2 w-16 md:w-20 h-1 bg-gradient-to-r from-[var(--text-color)] to-[var(--text-secondary)] rounded-full mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative">

        {categories.map((cat, idx) => (
          <div key={idx} className="flex items-start gap-4 relative">

            <div className="relative p-2 z-10 bg-[var(--bg-gradient)] rounded-full">
              {cat.icon}
            </div>

            <div className="text-left flex-1">
              <h3 className="text-xl font-semibold mb-6 text-[var(--text-color)]">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center gap-3 bg-[var(--card-bg)] text-[var(--text-secondary)] 
                 border border-[var(--card-border)] px-6 py-3 h-9 w-45
                 shadow-md text-base font-medium active:bg-[var(--text-secondary)] active:text-[var(--cloud-bg)]
                 hover:bg-[var(--text-secondary)] hover:text-[var(--cloud-bg)] transition-colors"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="">{item.name}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
