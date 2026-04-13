import React, { useState } from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/assets/images/Tools_icons/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/assets/images/Tools_icons/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/assets/images/Tools_icons/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/assets/images/Tools_icons/react.svg",
    label: "React",
    desc: "Library",
  },

  // Backend
  {
    imgSrc: "/assets/images/Tools_icons/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/assets/images/Tools_icons/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/assets/images/Tools_icons/firebase.svg",
    label: "Firebase",
    desc: "Backend & Database",
  },

  // Database
  {
    imgSrc: "/assets/images/Tools_icons/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL Database",
  },
  {
    imgSrc: "/assets/images/Tools_icons/mysql.svg",
    label: "MySQL",
    desc: "Relational Database",
  },

  // DevOps & Cloud
  {
    imgSrc: "/assets/images/Tools_icons/docker.svg",
    label: "Docker",
    desc: "Containerization",
  },
  {
    imgSrc: "/assets/images/Tools_icons/aws.png",
    label: "AWS",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/assets/images/Tools_icons/salesforce.png",
    label: "Salesforce",
    desc: "CRM Platform",
  },
  {
    imgSrc: "/assets/images/Tools_icons/jenkins.svg",
    label: "Jenkins",
    desc: "CI/CD",
  },
  {
    imgSrc: "/assets/images/Tools_icons/kubernetes.png",
    label: "Kubernetes",
    desc: "Container Orchestration",
  },
  {
    imgSrc: "/assets/images/Tools_icons/terraform.webp",
    label: "Terraform",
    desc: "Infrastructure as Code",
  },
  {
    imgSrc: "/assets/images/Tools_icons/sonarqube.png",
    label: "SonarQube",
    desc: "Code Quality",
  },

  // Tools
  {
    imgSrc: "/assets/images/Tools_icons/postman.svg",
    label: "Postman",
    desc: "API Testing",
  },
  {
    imgSrc: "/assets/images/Tools_icons/Minikube.png",
    label: "Minikube",
    desc: "Local Kubernetes",
  },
  {
    imgSrc: "/assets/images/Tools_icons/azure.png",
    label: "Azure",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/assets/images/Tools_icons/gcp.png",
    label: "GCP",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/assets/images/Tools_icons/selenium.png",
    label: "Selenium",
    desc: "Automation Testing",
  },
  {
    imgSrc: "/assets/images/Tools_icons/laravel.jpg",
    label: "Laravel",
    desc: "PHP Framework",
  },
];

const Skill = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Define how many items to show initially (e.g., 2 rows of 4 = 8)
  const initialItemsCount = 8;
  const visibleSkills = isExpanded ? skillItem : skillItem.slice(0, initialItemsCount);

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {visibleSkills.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes=""
            />
          ))}
        </div>

        {skillItem.length > initialItemsCount && (
          <div className="flex justify-center mt-10 reveal-up">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-primary group"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
              <span className={`material-symbols-rounded transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;
