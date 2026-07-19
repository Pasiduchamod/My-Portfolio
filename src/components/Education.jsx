import React from 'react';

const educationData = [
  {
    year: "2026 - 2027",
    degree: "BSc(Hons). in CS",
    institution: "University of Jaffna",
    image: "/assets/images/Education/DCS_UOJ.png",
    status: "Specialization",
    desc: "Specializing in advanced Computer Science topics, distributed systems, and cutting-edge software engineering methodologies."
  },
  {
    year: "2023 - 2025",
    degree: "BSc. in CS",
    institution: "University of Jaffna",
    image: "/assets/images/Education/DCS_UOJ.png",
    desc: "Acquired a solid foundation in core computer science, database systems, object-oriented programming, and web technologies."
  },
  {
    year: "2018 - 2020",
    degree: "Advanced Level",
    institution: "Maliyadeva Model College",
    image: "/assets/images/Education/maliyadeva_model_college.jpg",
    desc: "Completed secondary education in the Physical Science stream (Combined Mathematics, Physics, and Chemistry)."
  },
  {
    year: "2007 - 2017",
    degree: "Schooling",
    institution: "Athugalpura Prince College",
    image: "/assets/images/Education/athugalpura_prince_college.jpg",
    desc: "Completed primary and secondary schooling, building strong foundational academic skills in STEM subjects."
  }
];

const Education = () => {
  return (
    <section id="education" className="section py-16 md:py-24 overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-16 reveal-up">Academic Pathway</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-zinc-800/80 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-yellow-400 via-amber-500 to-yellow-400 origin-top scale-y-0 reveal-height"></div>
          </div>

          <div className="relative z-10">
            {educationData.map(({ year, degree, institution, image, status, desc }, key) => (
              <div 
                key={key} 
                className="relative w-full mb-16 last:mb-0 flex flex-col md:flex-row reveal-up"
              >
                {/* Marker Node */}
                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 z-20">
                  <div className="relative group">
                    {status && (
                      <span className="absolute -inset-1.5 rounded-full bg-yellow-400/20 animate-ping"></span>
                    )}
                    <figure className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-zinc-900 border-2 border-zinc-700/60 group-hover:border-yellow-400 transition-all duration-300 p-2.5 shadow-[0_0_15px_rgba(24,24,27,0.8)]">
                      <img 
                        src={image} 
                        alt={institution} 
                        className="w-full h-full object-contain rounded-full"
                      />
                    </figure>
                  </div>
                </div>

                {/* Info Card */}
                <div className={`w-full pl-[70px] md:pl-0 md:w-[calc(50%-45px)] ${
                  key % 2 === 0 
                    ? 'md:mr-auto md:ml-0 md:text-right' 
                    : 'md:ml-auto md:mr-0 md:text-left'
                }`}>
                  <div className="bg-zinc-800/10 hover:bg-zinc-800/30 backdrop-blur-md p-6 rounded-2xl border border-zinc-800/80 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_-8px_rgba(250,204,21,0.05)] group relative overflow-hidden">
                    
                    {/* Hover glow line effect */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                    <div className={`flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2 ${
                      key % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>{year}</span>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-black text-zinc-100 mb-1 group-hover:text-yellow-400 transition-colors">
                      {degree}
                    </h3>
                    
                    <p className="text-xs text-zinc-400 font-semibold mb-3">{institution}</p>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal md:max-w-[45ch] inline-block">
                      {desc}
                    </p>

                    {status && (
                      <div className={`flex mt-4 ${key % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="inline-flex items-center gap-1.5 text-[9px] bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full font-extrabold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
                          {status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
