import React from 'react';

const educationData = [
  {
    year: "2026 - 2027",
    degree: "BSc(Hons). in CS",
    institution: "University of Jaffna",
    image: "/assets/images/Education/DCS_UOJ.png",
    status: "Specialization"
  },
  {
    year: "2023 - 2025",
    degree: "BSc. in CS",
    institution: "University of Jaffna",
    image: "/assets/images/Education/DCS_UOJ.png"
  },
  {
    year: "2018 - 2020",
    degree: "Advanced Level",
    institution: "Maliyadeva Model College",
    image: "/assets/images/Education/maliyadeva_model_college.jpg"
  },
  {
    year: "2007 - 2017",
    degree: "Schooling",
    institution: "Athugalpura Prince College",
    image: "/assets/images/Education/athugalpura_prince_college.jpg"
  }
];

const Education = () => {
  return (
    <section id="education" className="section py-16 md:py-24">
      <div className="container">
        <h2 className="headline-2 mb-12 reveal-up">Academic Pathway</h2>

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-zinc-800 hidden lg:block overflow-hidden">
            <div className="h-full bg-yellow-400 origin-left reveal-width"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {educationData.map(({ year, degree, institution, image, status }, key) => (
              <div 
                key={key}
                className="relative z-10 flex flex-col items-center text-center reveal-up"
              >
                {/* Icon/Image Container with pulsing effect if it's the current one */}
                <div className="relative mb-6">
                  <figure className="relative w-16 h-16 rounded-2xl overflow-hidden bg-zinc-900 border-2 border-zinc-700/50 group hover:border-yellow-400 transition-all duration-300 p-2 z-10">
                    <img 
                      src={image} 
                      alt={institution} 
                      className="w-full h-full object-contain"
                    />
                  </figure>
                  {/* Dot on line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-900 border-2 border-zinc-700 rounded-full -z-10 hidden lg:block"></div>
                </div>

                <div className="bg-zinc-800/30 backdrop-blur-sm p-4 rounded-2xl border border-zinc-700/30 hover:border-yellow-400/20 transition-all hover:bg-zinc-800/50 w-full group">
                  <span className="text-yellow-400 font-bold text-[10px] uppercase tracking-widest mb-1 block">{year}</span>
                  <h3 className="text-sm font-extrabold text-zinc-100 mb-1 group-hover:text-yellow-400 transition-colors">
                    {degree}
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-medium mb-2">{institution}</p>
                  {status && (
                    <span className="inline-block text-[8px] bg-yellow-400/10 text-yellow-500 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                      {status}
                    </span>
                  )}
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
