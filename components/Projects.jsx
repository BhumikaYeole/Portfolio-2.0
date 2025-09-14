import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
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
    title: "CampusHub",
    description:
      "A Full stack website focusing on centralizing and streamline the management of college clubs and their activities like event registration, club creation, deletion and authoritative queries.",
    image: "../assets/campus-hub.png",
    tools: ["HTML", "CSS", "Express.js", "MongoDB"],
    github: "https://github.com/BhumikaYeole/CampusHub",
    live: "https://college-clubs-cbfc.onrender.com/",
  },
  {
    title: "Polaroid Paradise",
    description:
      "A creative and fun Photostrip Generator web app that allows users to generate virtual photostrips just like a real-world photobooth! ",
    image: "../assets/polaroid.png",
    tools: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/BhumikaYeole/Polaroid-Paradise",
    live: "https://polaroid-paradise.vercel.app",
  },
  {
    title: "Drum Kit",
    description:
      "An interactive virtual drum kit built with HTML, CSS, and JavaScript that lets users play drum sounds using their keyboard or by clicking/tapping on-screen pads.",
    image: "../assets/drumkit.png",
    tools: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/BhumikaYeole",
    live: "https://github.com/BhumikaYeole",
  },
  {
    title: "Sudoku Solver",
    description:
      "A web-based Sudoku Solver that combines my DSA expertise (backtracking algorithm) with web development. This project allows users to input Sudoku puzzles into a 9x9 grid and solve them instantly.",
    image: "../assets/sudoku.png",
    tools: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/BhumikaYeole/SudokuSolver",
    live: "https://bhumikayeole.github.io/SudokuSolver/",
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
    </section>
  );
};

export default Projects;
