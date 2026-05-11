import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/assets/images/projects/ieee_congress.png",
    title: "IEEE SLSWYC '26 Official Website",
    tags: ["Full Stack", "GSAP", "Development"],
    links: { live: "https://ieee-slsywc-2026.vercel.app/", repo: "https://github.com/Pasiduchamod/ieee-slsywc-2026.git" },
    isProduction: true,
  },
  {
    imgSrc: "/assets/images/projects/splitmate.png",
    title: "SplitMate - Smart Boarding Money Manager",
    tags: ["Full Stack", "Data-base", "Slef-Used", "Development"],
    links: {repo: "https://github.com/Pasiduchamod/splitmate.git" },
  },
  {
    imgSrc: "/assets/images/projects/qbox-web.png",
    title: "QBox - Anonymous Q&A Platform",
    tags: ["Full Stack", "Data-base","Web-design", "Development"],
    links: { Website: "https://qbox-web.vercel.app/", MobileApp: "https://play.google.com/store/apps/details?id=com.qbox.anonymousqa&pcampaignid=web_share" },
    isProduction: true,
  },
  {
    imgSrc: "/assets/images/projects/nexora.png",
    title: "nexora Real-Time Chat Application",
    tags: ["API", "Data-base", "Development"],
    links: { live: "https://nexora-plum.vercel.app/", repo: "https://github.com/Pasiduchamod/nexora-chat-app.git" },
  },
  {
    imgSrc: "/assets/images/projects/anupama.png",
    title: "Anupama Collections",
    tags: ["API", "Web-design", "Development", "MERN"],
    links: { live: "https://anupama-frontend.vercel.app/", repo: "https://github.com/Pasiduchamod/Anupama_Full_Stack.git" },
  },
  {
    imgSrc: "/assets/images/projects/zaaraai.png",
    title: "ZaaraAI",
    tags: ["API", "Web-design", "Development"],
    links: { live: "https://zaaraai.web.app/", repo: "https://github.com/Pasiduchamod/Chat-bot.git" },
  },
  {
    imgSrc: "/assets/images/projects/evercare.png",
    title: "Doctor Booking App",
    tags: ["API", "Web-design", "Development", "MERN"],
    links: { repo: "https://github.com/Pasiduchamod/EverCare-Health.git" },
  },
  {
    imgSrc: "/assets/images/projects/university.png",
    title: "University Website",
    tags: ["Web-design", "Development"],
    links: { live: "https://pasiduchamod.github.io/University-web-site/", repo: "https://github.com/Pasiduchamod/University-web-site.git" },
  },
  {
    imgSrc: "/assets/images/projects/passwordgenerator.png",
    title: "Random Password Generator",
    tags: ["Development"],
    links: { live: "https://pasiduchamod.github.io/Random-Password/", repo: "https://github.com/Pasiduchamod/Random-Password.git" },
  },
  {
    imgSrc: "/assets/images/projects/todo.png",
    title: "To-Do List App",
    tags: ["Development"],
    links: { live: "https://pasiduchamod.github.io/to-do-app/", repo: "https://github.com/Pasiduchamod/to-do-app.git" },
  },
  {
    imgSrc: "/assets/images/projects/weather-app.png",
    title: "Weather App",
    tags: ["API", "Development"],
    links: { live: "https://pasiduchamod.github.io/weather-app/", repo: "https://github.com/Pasiduchamod/weather-app.git" },
  },
  {
    imgSrc: "/assets/images/projects/agecalculator.png",
    title: "Age Calculator",
    tags: ["Development"],
    links: { live: "https://pasiduchamod.github.io/Age-Calculator/", repo: "https://github.com/Pasiduchamod/Age-Calculator.git" },
  },
  {
    imgSrc: "/assets/images/projects/qrgenerator.png",
    title: "QR Code Generator",
    tags: ["Development"],
    links: { live: "https://pasiduchamod.github.io/QR-Generator/", repo: "https://github.com/Pasiduchamod/QR-Generator.git" },
  },
  {
    imgSrc: "/assets/images/projects/quizapp.png",
    title: "Quiz App",
    tags: ["Development"],
    links: { live: "https://pasiduchamod.github.io/Quiz-App/", repo: "https://github.com/Pasiduchamod/Quiz-App.git" },
  },
];

const Work = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialItemsCount = 6;
  const visibleWorks = isExpanded ? works : works.slice(0, initialItemsCount);

  return (
    <section className="section" id="work">
      <Helmet>
        <title>Pasidu Chamod - Portfolio Projects | Full-Stack Web Development</title>
        <meta name="description" content="Explore Pasidu Chamod's portfolio projects: full-stack web applications, cloud-native solutions, DevOps implementations, and innovative software development." />
      </Helmet>
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Explore a collection of my personal projects showcasing creativity,
          technical expertise, and continuous learning across modern web
          technologies.
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {visibleWorks.map(({ imgSrc, title, tags, links, isProduction }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              links={links}
              isProduction={isProduction}
              classes=""
            />
          ))}
        </div>

        {works.length > initialItemsCount && (
          <div className="flex justify-center mt-12 reveal-up">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-primary group"
            >
              {isExpanded ? 'View Less' : 'View More Works'}
              <span className={`material-symbols-rounded transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                grid_view
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
