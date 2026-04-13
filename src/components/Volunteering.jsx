import React, { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const volunteeringExperiences = [
  {
    role: "IEEE Member",
    organization: "IEEE",
    duration: "2025 - Present",
    desc: "Active member contributing to technical and community activities, fostering growth in the tech ecosystem.",
    imgSrc: "/assets/images/volunteering/ieee.png"
  },
  {
    role: "Technical Lead",
    organization: "AWS CloudClubs - University of Jaffna",
    duration: "Jan 2026 - Present",
    desc: "Leading technical initiatives and fostering cloud learning within the student community through workshops.",
    imgSrc: "/assets/images/volunteering/aws_cloud_club_university_of_jaffna_logo.jpg"
  },
  {
    role: "Webmaster",
    organization: "Member Activities - IEEE Sri Lanka Section",
    duration: "Feb 2026 - Present",
    desc: "Managing and maintaining web platforms for IEEE member activities, ensuring seamless digital communication.",
    imgSrc: "/assets/images/volunteering/IEEE_sri_lanka_section.jpg"
  },
  {
    role: "Student Engagement Lead",
    organization: "AWS Community Day 2026",
    duration: "March 2026",
    desc: "Coordinated student outreach and engagement for the national community day event.",
    imgSrc: "/assets/images/volunteering/aws_cloud_club_community_day.png"
  },
  {
    role: "Member",
    organization: "CSSL GenzChapter",
    duration: "March 2026 - Present",
    desc: "Active member of the Computer Society of Sri Lanka's youth chapter.",
    imgSrc: "/assets/images/volunteering/CSSL_UOJ.jpg"
  },
  {
    role: "IEEE Xtreme Ambassador",
    organization: "University of Jaffna (UOJ)",
    duration: "2026",
    desc: "Representing and promoting the IEEE Xtreme programming competition at UOJ.",
    imgSrc: "/assets/images/volunteering/ieee_xtream.png"
  }
];

const Volunteering = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    // Animate the timeline line
    gsap.to(lineRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      scaleY: 1,
      ease: "none"
    });

    // Animate each card with advanced effects
    itemsRef.current.forEach((item, index) => {
      const isEven = index % 2 === 0;
      
      gsap.fromTo(item, 
        {
          opacity: 0,
          x: isEven ? 100 : -100, // Slide from right if even (actually even is on the left side in my logic because of flex-row-reverse, let me double check)
          // Wait, in my code: key % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
          // If key % 2 === 0, it is flex-row-reverse, so content is on the LEFT side of the line.
          // So if index is even, it should slide from the LEFT (-100).
          x: isEven ? -100 : 100,
          scale: 0.8,
          rotate: isEven ? -5 : 5
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            end: "center center",
            scrub: 1,
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section className="section" id="volunteering">
      <div className="container" ref={containerRef}>
        <h2 className="headline-2 mb-3 reveal-up">Volunteering Experience</h2>
        <p className="text-zinc-400 mt-3 mb-16 max-w-[50ch] reveal-up">
          Building community and leadership through technical contributions and student engagement.
        </p>

        <div className="relative mt-8">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2"></div>
          
          {/* Animated Growing Line */}
          <div 
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-yellow-400 -translate-x-1/2 origin-top scale-y-0"
          ></div>

          {/* Start and End Decorative Dots */}
          <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
          <div className="absolute left-4 md:left-1/2 bottom-0 w-3 h-3 bg-zinc-700 rounded-full -translate-x-1/2 translate-y-1/2 z-10 group-hover:bg-yellow-400 transition-colors duration-500 shadow-[0_0_10px_rgba(250,204,21,0.4)]"></div>

          <div className="space-y-28">
            {volunteeringExperiences.map(({ role, organization, duration, desc, imgSrc }, key) => (
              <div 
                key={key} 
                className={`relative flex items-center w-full group/timeline ${key % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                ref={el => itemsRef.current[key] = el}
              >
                {/* Timeline Dot with smooth hover effect */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full -translate-x-1/2 z-20 flex items-center justify-center transition-all duration-500">
                  <div className="absolute inset-0 rounded-full border-2 border-zinc-700 bg-zinc-900 group-hover/timeline:border-yellow-400 transition-colors duration-500 shadow-xl"></div>
                  <div className="w-2 h-2 bg-zinc-700 rounded-full group-hover/timeline:bg-yellow-400 transition-colors duration-500 group-hover/timeline:shadow-[0_0_15px_rgba(250,204,21,0.8)]"></div>
                </div>

                {/* Horizontal Connection Line (Desktop Only) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-[2px] bg-gradient-to-r ${key % 2 === 0 ? 'from-transparent to-yellow-400 right-1/2 group-hover/timeline:w-16' : 'from-yellow-400 to-transparent left-1/2 group-hover/timeline:w-16'} transition-all duration-700 opacity-0 group-hover/timeline:opacity-100 z-10`} style={{ pointerEvents: 'none' }}></div>

                {/* Content Card container */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${key % 2 === 0 ? 'md:pr-20 lg:pr-32' : 'md:pl-20 lg:pl-32'} relative`}>
                  {/* Floating Number */}
                  <span className={`absolute -top-16 opacity-5 text-9xl font-black text-white select-none pointer-events-none group-hover/timeline:opacity-10 group-hover/timeline:-translate-y-4 transition-all duration-700 ${key % 2 === 0 ? 'right-0 md:right-20' : 'left-0 md:left-20'}`}>
                    0{key + 1}
                  </span>

                  {/* Gradient Border Card Wrapper */}
                  <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-zinc-700/40 to-zinc-800/10 hover:from-yellow-400/60 hover:to-yellow-400/10 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.2)]">
                    
                    {/* Inner Card */}
                    <div className="relative bg-zinc-950 rounded-[calc(1.5rem-1px)] p-8 md:p-10 overflow-hidden z-10 h-full flex flex-col gap-6">

                      {/* Spotlight Overlay */}
                      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-yellow-400/20 blur-[4rem] rounded-full opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                      <div className="relative z-10 flex flex-col gap-6">
                        {/* Header: Icon + Title Group */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div className="flex flex-col gap-1 order-2 sm:order-1">
                            <span className="text-yellow-400/90 text-xs font-bold tracking-[0.2em] uppercase mb-1 block">
                              {organization}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-100 leading-tight group-hover/timeline:text-yellow-400 transition-colors duration-300">
                              {role}
                            </h3>
                          </div>
                          
                          <div className="w-16 h-16 bg-zinc-100 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover/timeline:border-yellow-400/50 group-hover/timeline:-translate-y-1 transition-all duration-500 shadow-lg shrink-0 order-1 sm:order-2 overflow-hidden p-1.5">
                            <img src={imgSrc} alt={organization} className="w-full h-full object-contain group-hover/timeline:scale-110 transition-transform duration-500 rounded-xl" />
                          </div>
                        </div>

                        {/* Date Badge */}
                        <div className="flex items-center gap-2 self-start bg-zinc-900/80 px-4 py-2 rounded-full border border-zinc-800 group-hover/timeline:border-yellow-400/30 transition-colors">
                          <span className="material-symbols-rounded text-sm text-yellow-400">schedule</span>
                          <span className="text-xs text-zinc-300 font-semibold tracking-wide uppercase">{duration}</span>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-400 text-[15px] md:text-base leading-relaxed font-medium group-hover/timeline:text-zinc-300 transition-colors duration-300">
                          {desc}
                        </p>

                        {/* Bottom Decoration Bar */}
                        <div className="w-8 h-1.5 bg-zinc-800 rounded-full group-hover/timeline:w-20 group-hover/timeline:bg-gradient-to-r group-hover/timeline:from-yellow-400 group-hover/timeline:to-yellow-200 transition-all duration-700 ease-out"></div>
                      </div>
                    </div>
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

export default Volunteering;
