import React, { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const Card = ({ title, description, tech, link, github, image, theme }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-sm mx-auto transition-all duration-300 ease-out border rounded-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
      data-theme = {theme ? 'light' : 'dark'}
      onMouseLeave={handleMouseLeave}
    >

      <div className="flex justify-end p-4 pb-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1 rounded-full transition-all duration-200 hover:scale-110 `}
            aria-label="View on GitHub"
          >
            <Github size={20} />
          </a>
        )}
      </div>

      <div className="px-4 pb-3">
        <h3 className={`text-xl font-bold leading-tight `}>
          {title}
        </h3>
      </div>

      {image && (
        <>
          <div className={` mb-4 p-2 `}>
            <img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className={`mx-4 h-px mb-4`} />
        </>
      )}
      <div className="px-4 mb-4">
        <p className={`text-sm leading-relaxed`}>
          {description}
        </p>
      </div>
      <div className={`mx-4 h-px mb-4 `} />
      {tech && tech.length > 0 && (
        <div className="px-4 mb-4">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 `}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {link && (
        <>
          <div className={`mx-4 h-px mb-4 `} />
          
          <div className="p-4 pt-0">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] `}
            >
              View Project
              <ExternalLink size={16} />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;