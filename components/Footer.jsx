import React from "react";

const Footer = (props) => {
  return (
    <footer
      data-theme={props.theme ? "light" : "dark"}
      className="w-full text-center bg-[var(--bg-gradient)] text-[var(--text-color)] py-4 md:py-6"
    >
      <p className="text-sm md:text-base">
        Made with <span className="animate-pulse text-red-500">❤</span> by <span className="font-semibold">Bhumika</span>
      </p>
    </footer>
  );
};

export default Footer;
