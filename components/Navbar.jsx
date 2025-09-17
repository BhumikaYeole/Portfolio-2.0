import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        data-theme={props.theme ? "light" : "dark"}
        className="fixed w-full bg-[var(--nav-bg)] h-20 shadow-md flex items-center justify-around px-6 md:px-12"
      >
        <a
          href="#main"
          className="text-[var(--text-color)] text-xl font-semibold hover:underline underline-offset-4 transition"
        >
            Portfolio
        </a>

        <nav className="hidden md:flex gap-10 text-[var(--text-color)] text-lg font-[600] items-center">
          <div className="flex gap-10">
            <a
              href="#about"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all after:duration-300 
               hover:after:w-full"
            >
              About
            </a>
            <a href="#skills" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all after:duration-300 
               hover:after:w-full">
              Skills
            </a>
            <a href="#projects" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all after:duration-300 
               hover:after:w-full">
              Projects
            </a>
            <a href="#contact" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all after:duration-300 
               hover:after:w-full">
              Contact
            </a>
          </div>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--text-color)] text-2xl"
        >
          ☰
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-20 right-0 w-3/6 bg-[var(--nav-bg)] shadow-md flex flex-col items-center py-6 gap-6 text-[var(--text-color)] text-lg font-medium md:hidden"
            >
              <a
                href="#about"
                className="hover:underline underline-offset-4 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:underline underline-offset-4 transition"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:underline underline-offset-4 transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:underline underline-offset-4 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  props.setTheme(!props.theme);
                  setIsOpen(false);
                }}
                className="px-3 py-1"
              >
                {props.theme ? "🌙" : "☀️"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => props.setTheme(!props.theme)}
          className="ml-4 px-3 py-1 hidden text-[var(--text-color)] md:block  "
        >
          {props.theme ? "🌙" : "☀️"} Mode
        </button>
      </div>
    </>
  );
};

export default Navbar;
