import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    // Disable pinning on mobile to allow scrolling
    if (window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      try {
        const box = document.getElementsByClassName("work-box");
        if (box.length === 0) return;
        const container = document.querySelector(".work-container");
        if (!container) return;
        const rectLeft = container.getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement?.getBoundingClientRect().width || 0;
        let paddingStr = window.getComputedStyle(box[0]).padding;
        let padding: number = parseInt(paddingStr);
        if (isNaN(padding)) padding = 0;
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
        if (isNaN(translateX)) translateX = 0;
      } catch (err) {
        console.error("Error calculating translateX", err);
        translateX = 0;
      }
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Refresh ScrollTrigger after layout settles
    ScrollTrigger.refresh();

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {config.projects.slice(0, 5).map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.technologies}</p>
                <div className="work-action-buttons">
                  {(project as any).link && (
                    <a href={(project as any).link} target="_blank" rel="noopener noreferrer" className="work-live-link-btn" data-cursor="disable">
                      Link ↗
                    </a>
                  )}
                  <button onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)} className="work-about-btn" data-cursor="disable">
                    {expandedProject === project.id ? "Close" : "About Project"}
                  </button>
                </div>
                {expandedProject === project.id && (
                  <div className="work-project-description">
                    <p>{project.description}</p>
                  </div>
                )}
              </div>
              <WorkImage image={project.image} alt={project.title} link={(project as any).link} />
            </div>
          ))}
          {/* See All Works Button */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all of my projects and creations</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                See All Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
