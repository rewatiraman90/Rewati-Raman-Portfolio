import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "AI Legal Bodyguard",
    category: "AI Legal Defense",
    tools: "Next.js, OpenAI, RBI Legal Framework",
    description: "An AI-powered system designed to handle aggressive debt recovery calls automatically, citing RBI regulations and legal directions to protect borrowers from harassment.",
    image: "/images/legals hield.png",
    link: "https://github.com/rewatiraman90/AI-legal-Bodyguard",
  },
  {
    title: "Toli (Lumina)",
    category: "Conscious Social Platform",
    tools: "Next.js, Supabase, Semantic Matching",
    description: "A conscious connection platform focusing on meaningful interactions through context-based social graphs, matching people based on their wavelength.",
    image: "/images/toli.png",
    link: "https://toli-beryl.vercel.app/",
  },
  {
    title: "AI-Polemic",
    category: "Generative AI Web App",
    tools: "OpenAI API, Custom Prompts, Firebase, Netlify",
    description: "The internet's most perpetually annoyed AI — a sarcastic debater equipped with high-level sarcasm, voice enablement, and rudeness levels.",
    image: "/images/Solidx.png",
    link: "https://ai-polemic.online/",
  },
  {
    title: "The Same Vibe",
    category: "Semantic Matching Platform",
    tools: "React, AI Matching, Daily Prompts",
    description: "A platform that matches people based on their thoughts and responses to daily prompts, prioritizing intellectual and emotional compatibility.",
    image: "/images/thesamevibe.png",
    link: "https://thesamevibe.online/",
  },
  {
    title: "Heavy Renter (Big-Tool)",
    category: "B2P Equipment Marketplace",
    tools: "React, RBAC Admin Panel, Full-Stack",
    description: "A comprehensive marketplace for renting construction equipment across India, featuring a robust role-based access control (RBAC) admin and team management system.",
    image: "/images/bond.png",
    link: "https://heavyrenter.com/",
  },
  {
    title: "Asset Circle",
    category: "P2P Asset Marketplace",
    tools: "Vite, React, Firebase, Tailwind CSS",
    description: "A trusted marketplace for high-end equipment. Rent, sell, swap, or donate premium assets like cameras and drones with verified users.",
    image: "/images/assetcircle.png",
    link: "https://rent-my-stuff1.web.app/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-description">
                           <p>{project.description}</p>
                        </div>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link !== "#" && (
                          <div className="carousel-link">
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="live-link-btn"
                              data-cursor="disable"
                            >
                              Live Project <MdArrowForward />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
