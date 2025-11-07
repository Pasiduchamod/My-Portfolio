import React from "react";
import ProjectCard from "./ProjectCard";

const collaborativeWorks = [
  {
    imgSrc: "/assets/images/projects/creatorsspace.png",
    title: "Creators-Space E-Learning Management System",
    tags: ["Team Project", "Open Source"],
    projectLink: "https://github.com/PamudaUposath/Creators-Space-GroupProject",
  },
  {
    imgSrc: "/assets/images/projects/uniconnect.png",
    title: "AgentForce Chatbot System",
    tags: ["Hackathon", "AI", "Team Project"],
    projectLink: "https://universityofjaffna4-dev-ed.develop.my.site.com/s/?language=en_US",
  },
  {
    imgSrc: "/assets/images/projects/blooddonation.png",
    title: "Blood Donation Tracking System",
    tags: ["Hackathon", "Ballerina", "Team Project"],
    projectLink: "https://github.com/PamudaUposath/iwb25-296-genalphaz",
  },
];



const CollaborativeWork = () => {
  return (
    <section className="section" id="collaborative-work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Collaborative Projects</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          A showcase of team-based and hackathon projects where collaboration,
          innovation, and problem-solving came together to build impactful
          solutions.
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {collaborativeWorks.map(
            ({ imgSrc, title, desc, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                desc={desc}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CollaborativeWork;
