import React from "react";
import { FaCode, FaLaptopCode, FaServer, FaPaintBrush } from "react-icons/fa";

const About = (props) => {
  const services = [
    {
      icon: <FaCode className="h-6 w-6 inline-block mr-2" />,
      title: "Full Stack Development",
      desc: "End-to-end application development from frontend to backend integration.",
    },
    {
      icon: <FaLaptopCode className="h-6 w-6 inline-block mr-2" />,
      title: "Web Development",
      desc: "Building responsive and interactive websites with modern technologies.",
    },
    {
      icon: <FaServer className="h-6 w-6 inline-block mr-2" />,
      title: "API & Backend",
      desc: "Designing and implementing secure, scalable APIs and server logic.",
    },
    {
      icon: <FaPaintBrush className="h-6 w-6 inline-block mr-2" />,
      title: "UI/UX Design",
      desc: "Crafting user-friendly and visually appealing digital experiences.",
    },
  ];

  return (
    <section
      data-theme={props.theme ? "light" : "dark"}
      id="about"
      className="bg-[var(--bg-gradient)] text-[var(--text-color)] m-auto px-6 sm:px-10 md:px-16 lg:px-20 py-20 min-h-[calc(100vh-0px)] flex flex-col justify-center items-center gap-30"
    >
      <div className="text-center mt-6 mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--text-secondary)] font-extrabold">
          About Me
        </h2>
        <div className="mt-2 w-16 md:w-20 h-1 bg-gradient-to-r from-[var(--text-color)] to-[var(--text-secondary)] rounded-full mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:max-w-6xl w-full md:mx-auto">
        {/* Services Grid with Mobile Spacing */}
        <div className="grid grid-cols-1 gap-6 sm:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              tabIndex={0}
              className="flex flex-wrap items-center justify-center group mx-2 sm:mx-0 border border-[var(--text-secondary)] border-opacity-30 rounded-lg
             hover:border-[var(--text-color)] focus:border-[var(--text-color)]
             hover:shadow-lg focus:shadow-lg cursor-pointer 
             transition-all duration-300 bg-[var(--bg-gradient)] bg-opacity-40"
            >
              <h3 className="text-lg md:text-xl font-semibold flex gap-3 justify-center items-center mb-2">
                <span>{service.icon}</span>
                <span>{service.title}</span>
              </h3>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed
                opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-28
                group-focus-within:opacity-100 group-focus-within:max-h-28
                transition-all duration-300 overflow-hidden text-center px-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Text Content with Mobile Spacing */}
        <div className="flex  flex-col justify-center text-left lg:pl-6 xl:pl-10 space-y-4 md:space-y-6 px-4 sm:px-0">
          <p className="text-base sm:text-md md:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
            Hello! I'm{" "}
            <span className="font-semibold text-[var(--text-color)]">
              Bhumika Yeole
            </span>
            , a passionate Full Stack Developer who enjoys building robust,
            scalable, and user-friendly digital solutions. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
          </p>
          <p className="text-sm md:text-base text-[var(--text-secondary)] opacity-80 italic">
            Hover over the services to learn more about what I do!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;