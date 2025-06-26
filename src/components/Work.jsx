import React from 'react'
import ProjectCard from './ProjectCard';


const works = [
    {
      imgSrc: '/assets/images/projects/anupama.png',
      title: 'ZaaraAI',
      tags: ['API', 'Web-design', 'Development'],
      projectLink: 'https://zaaraai.web.app/'
    },
    {
      imgSrc: '/assets/images/projects/zaaraai.png',
      title: 'ZaaraAI',
      tags: ['API', 'Web-design', 'Development'],
      projectLink: 'https://zaaraai.web.app/'
    },
    {
      imgSrc: '/assets/images/projects/evercare.png',
      title: 'Doctor Booking App',
      tags: ['API', 'Web-design', 'Development'],
      projectLink: 'https://github.com/Pasiduchamod/EverCare-Health.git'
    },
    {
      imgSrc: '/assets/images/projects/university.png',
      title: 'University Website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://pasiduchamod.github.io/University-web-site/'
    },
    {
      imgSrc: '/assets/images/projects/passwordgenerator.png',
      title: 'Random Password Generator',
      tags: ['Development'],
      projectLink: 'https://pasiduchamod.github.io/Random-Password/'
    },
    {
      imgSrc: '/assets/images/projects/todo.png',
      title: 'To-Do List App',
      tags: ['Development'],
      projectLink: 'https://pasiduchamod.github.io/to-do-app/'
    },
    {
      imgSrc: '/assets/images/projects/weather-app.png',
      title: 'Weather App',
      tags: ['API', 'Development'],
      projectLink: 'https://pasiduchamod.github.io/weather-app/'
    },
    {
      imgSrc: '/assets/images/projects/agecalculator.png',
      title: 'Age Calculator',
      tags: ['Development'],
      projectLink: 'https://pasiduchamod.github.io/Age-Calculator/'
    },
    {
      imgSrc: '/assets/images/projects/qrgenerator.png',
      title: 'QR Code Generator',
      tags: ['Development'],
      projectLink: 'https://pasiduchamod.github.io/QR-Generator/'
    },
    {
      imgSrc: '/assets/images/projects/quizapp.png',
      title: 'Quiz App',
      tags: [ 'Development'],
      projectLink: 'https://pasiduchamod.github.io/Quiz-App/'
    },
    
  ];

const Work = () => {
  return (
    <section className="section" id='work'>
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({imgSrc,title,tags,projectLink},key) =>(
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work
