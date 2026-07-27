import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TransitOps",
    description:
      "A centralized platform for managing the complete lifecycle of transport operations - vehicle registration, driver management, trip dispatching, maintenance, fuel & expense tracking, and operational analytics, replacing the spreadsheets and manual logbooks most logistics teams still rely on.",
    image: "../assets/transit-ops.png",
    tools: ["MERN", "RBAC", "NeoBrutalism-UI", "JWT"],
    github: "https://github.com/BhumikaYeole/TransitOps",
    live: "https://transit-ops-vert.vercel.app",
  },
  {
    title: "UpSkillr",
    description:
      "A scalable, full-stack Learning Management System designed for coaching institutes and educators that integrates course management, assessments, and digital certificates with a coin-based reward system to boost student engagement, all supported by Docker-based development workflows.",
    image: "../assets/upskillr.png",
    tools: ["MERN", "TailwindCSS", "Docker", "JWT"],
    github: "https://github.com/BhumikaYeole/UpSkillr",
    live: "https://upskillr-iota.vercel.app",
  },
  {
    title: "MoneyPal",
    description:
      "An AI-powered personal finance tracker that helps users manage expenses, set budgets, scan receipts to autofill transaction forms with AI and visualize incomes and expenses in the form of piecharts and graphs.",
    image: "../assets/moneypal.png",
    tools: ["Next", "TailwindCSS", "PostgreSQL", "Gemini AI"],
    github: "https://github.com/BhumikaYeole/MoneyPal",
    live: "https://money-pal.vercel.app",
  },
  {
    title: "PlayOrbit",
    description: 
      "A platform designed to simplify sports turf booking and player matchmaking, enabling turf providers to manage their facilities and bookings while allowing players to discover turfs, reserve slots, create matches, and collaborate with other players through an approval-based matchmaking system.",
    image: "../assets/playorbit.png",
    tools: ["MERN", "TypeScript" , "Three.js"],
    github: "https://github.com/BhumikaYeole/PlayOrbit",
    live: "https://playorbit.vercel.app",
  },

  {
    title: "SpamShield - AI",
    description:
      "A server-rendered, automated email monitoring system that leverages backend automation and ML-integrated background classification to deliver live inbox analysis and real-time spam detection through a dashboard powered by controlled polling.",
    image: "../assets/spamshield.png",
    tools: ["ML Algorithms", "IMAPClient", "Flask", "Jinja2"],
    github: "https://github.com/BhumikaYeole/SpamShield-Dashboard",
    live: "https://drive.google.com/file/d/1X0B6fGd41uokSjRg6fxGu5q-WqqRUNyW/view?usp=sharing",
  },
];

const Projects = (props) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section
      id="projects"
      data-theme={props.theme ? "light" : "dark"}
      className="bg-[var(--bg-gradient)] m-auto px-6 sm:px-10 md:px-16 lg:px-20 
             pt-9 scroll-mt-20 min-h-screen flex flex-col justify-start items-center gap-20"
    >

      <div className="text-center mt-10 mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-secondary)]">
          Projects
        </h2>
        <div className="mt-2 w-16 md:w-20 h-1 bg-gradient-to-r from-[var(--text-color)] to-[var(--text-secondary)] rounded-full mx-auto"></div>
      </div>


      <div className="flex flex-col space-y-20 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center lg:space-x-12 gap-10 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >

            <div className="w-full lg:w-1/2 relative">
              <div
                onMouseMove={(e) => {
                  const imgWrapper = e.currentTarget.nextSibling;
                  handleMouseMove({ ...e, currentTarget: imgWrapper });
                }}
                onMouseLeave={(e) => {
                  const imgWrapper = e.currentTarget.nextSibling;
                  handleMouseLeave({ ...e, currentTarget: imgWrapper });
                }}
                className="absolute inset-0 z-10 cursor-pointer"
              ></div>

              <div
                className="transition-transform duration-200 ease-out relative -z-10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] w-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-[var(--text-secondary)] flex flex-col gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-color)] mb-3">
                  {project.title}
                </h3>
                <div className="w-10 md:w-14 h-1 bg-gradient-to-r from-[var(--text-color)] to-[var(--text-secondary)] rounded-full"></div>
              </div>

              <p className="mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[var(--card-bg)] text-[var(--text-secondary)] text-xs sm:text-sm border rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent-color)] shadow-md hover:scale-105 transition-transform border text-sm sm:text-base"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent-color)] shadow-md hover:scale-105 transition-transform border text-sm sm:text-base"
                  >
                    <FaExternalLinkAlt />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    <div className="w-full max-w-xl mx-auto mt-10 text-center">

  <div className="w-full h-px bg-[var(--card-border)] mb-10" />

  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-color)] mb-3">
    Explore more of my work
  </h3>

  <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-7">
    I’m constantly building and experimenting. Check out my GitHub for more projects and collaborations.
  </p>
  <div className="flex justify-center items-center gap-8 mb-6"> {[["15+", "repos"], ["6", "languages"], ["∞", "curiosity"]].map(([num, label], i) => ( <React.Fragment key={i}> {i > 0 && <div className="w-px h-8 bg-[var(--card-border)]" />} <div className="flex flex-col items-center gap-0.5"> <span className="text-lg font-semibold text-[var(--text-color)]">{num}</span> <span className="text-xs text-[var(--text-secondary)] opacity-60 tracking-wide">{label}</span> </div> </React.Fragment> ))} </div>

  <a
    href="https://github.com/BhumikaYeole"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
               bg-[var(--accent-color)] text-[var(--text-secondary)] font-medium
               hover:scale-105 transition-all duration-300"
  >
    <FaGithub />
    View GitHub
  </a>

  <div className="w-full h-px bg-[var(--card-border)] mt-10" />

</div>
    </section>
  );
};

export default Projects;
