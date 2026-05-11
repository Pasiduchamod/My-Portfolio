import React from 'react';
import { Helmet } from 'react-helmet-async';

const aboutItems = [
  {
    label: 'Projects Completed',
    number: 20
  },
  {
    label: 'Years of Experience',
    number: 3
  },
  {
    label: 'Current GPA',
    number: 3.85
  }
];

const About = () => {
  return (
    <section id='about' className='section'>
      <Helmet>
        <title>Pasidu Chamod - About | Web Developer & Cloud DevOps Engineer</title>
        <meta name="description" content="Learn about Pasidu Chamod: passionate web developer and aspiring Cloud & DevOps Engineer. B.Sc. in Computer Science student specializing in scalable cloud solutions and CI/CD pipelines." />
      </Helmet>
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">About Me</h2>
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello! I'm Pasidu, a passionate web developer and aspiring Cloud & DevOps Engineer currently pursuing a B.Sc. in Computer Science at the University of Jaffna. I specialize in architecting scalable cloud-native solutions and designing automated CI/CD pipelines. I thrive on bridging the gap between development and operations to build highly available and resilient systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">{number}</span>
                  {label !== 'Current GPA' && (
                    <span className="text-yellow-400 font-semibold md:text-3xl">+</span>
                  )}
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src='/assets/images/logo.png'
              width={30}
              className='ml-auto md:w-[40px] md:h-[40px]'
              alt="Pasidu Chamod's portfolio logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
