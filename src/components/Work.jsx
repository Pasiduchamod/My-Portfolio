import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
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
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Explore a collection of my personal projects showcasing creativity,
          technical expertise, and continuous learning across modern web
          technologies.
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, links }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              links={links}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
