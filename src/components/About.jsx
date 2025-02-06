import React from 'react'

const aboutItems = [
    {
      label: 'Project done',
      number: 8
    },
    {
      label: 'Years of experience',
      number: 1
    }
  ];

const About = () => {
  return (
    <section id='about' className='section'>
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Hello! I'm Pasidu, a passionate web developer dedicated to creating visually captivating and seamlessly functional websites. With a perfect blend of creativity and technical skill, I bring your ideas to life, delivering digital masterpieces that shine in both design and performance.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({label,number},key)=>(<div key={key}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-bold md:text--4xl">{number}</span>
                            <span className="text-yellow-400 font-semibold md:text-3xl">+</span>
                        </div>
                        <p className="text-sm text-zinc-400">{label}</p>
                    </div>))}
                    <img src='/assets/images/logo.png' width={30} className='ml-auto md:w-[40px] md:h-[40px]'></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
