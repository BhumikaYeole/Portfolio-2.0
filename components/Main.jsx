import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const Main = (props) => {
  const roles = [
    "A Full Stack Developer",
    "A Web Developer",
    "A Software Developer",
    "A Learner",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div
      data-theme={props.theme ? "light" : "dark"}
      id="main"
      className="flex flex-col md:flex-row items-center justify-evenly text-[var(--text-color)] m-auto px-6 sm:px-8 md:px-20 py-12 sm:py-16 md:py-20 bg-[var(--bg-gradient )] min-h-[calc(100vh-0px)]"
    >


      <div className="space-y-4 text-center md:text-left flex flex-col gap-6 sm:gap-8 md:gap-10 max-w-[90%] sm:max-w-[80%] md:max-w-none">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
          Hi, 👋🏻 <br />
          I'm <span className="">Bhumika Yeole</span>,<br />
          <span className="text-lg sm:text-xl md:text-3xl font-medium transition-all duration-500">
            {roles[index]} :)
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl">
          I love crafting smooth web experiences!
        </p>
      </div>

      <div className="mt-10 sm:mt-12 md:mt-0 md:ml-10 gap-6 sm:gap-8 md:gap-10 flex flex-col items-center">
        <div className="h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] md:h-[250px] md:w-[250px] overflow-hidden shadow-lg border-4 border-[var(--accent-color)] md:rounded-none">
          <img
            src="profile.jpg"
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-14 mt-4 sm:mt-6 md:mt-4">
          <a
            href="mailto:yeolebhumika@gmail.com"
            target="blank"
          >
            <IoIosMail className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 cursor-pointer hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://linkedin.com/in/bhumikayeole"
            target="blank"
          >
            <FaLinkedin className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 cursor-pointer hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/BhumikaYeole"
            target="blank"
          >
            <FaGithub className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 cursor-pointer hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://leetcode.com/u/Bhumika_Yeole/"
            target="blank"
          >
            <SiLeetcode className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 cursor-pointer hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
