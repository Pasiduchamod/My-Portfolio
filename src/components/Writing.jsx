import React from "react";
import { ButtonOutline, ButtonPrimary } from "./Button";

const officialPublications = [
  {
    type: "Official Publication",
    title: "IEEE CIS Newsletter 2026",
    subtitle: "University of Jaffna",
    imgSrc: "/assets/images/blog/IEEE CIS Newsletter 2026.png", 
    desc: "Proud to share my research and insights published in the official IEEE CIS Newsletter. This article explores emerging trends in computational intelligence within the academic community.",
    tags: ["Research", "IEEE", "Academic"],
    links: [
      {
        label: "Download Article",
        href: "/assets/images/articles/IEEE CIS Newsletter 2026.pdf",
        type: "primary",
        icon: "description"
      }
    ]
  }
];

const blogSeries = [
  {
    type: "Digital Series",
    title: "DevOps from a Learner's View",
    imgSrc: "/assets/images/blog/devops_series.jpg",
    desc: "A comprehensive journey documenting my path to mastering DevOps practices. From Linux fundamentals to CI/CD pipelines with Jenkins and Kubernetes.",
    tags: ["DevOps", "CI/CD", "Cloud"],
    links: [
      {
        label: "Read Series",
        href: "https://medium.com/@pasiduchamod/list/devops-from-a-learners-view-25-days-b63e77b6efe7",
        type: "outline",
        icon: "open_in_new"
      }
    ]
  }
];

const PublicationCard = ({ item }) => (
    <div className="bg-zinc-800/50 p-6 rounded-2xl md:p-10 reveal-up border border-zinc-700/30 hover:border-yellow-400/20 transition-colors mb-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <figure className="w-full md:w-2/5 rounded-xl overflow-hidden shadow-2xl bg-zinc-700/50 aspect-video">
                <img 
                    src={item.imgSrc} 
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
            </figure>
            
            <div className="w-full md:w-3/5 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-950/40 backdrop-blur-md border border-yellow-400/20 shadow-sm">
                        <span className='relative w-1.5 h-1.5 rounded-full bg-yellow-400'>
                            <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping"></span>
                        </span>
                        <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-[0.15em]">
                            {item.type}
                        </span>
                    </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-1 text-zinc-100 italic">
                    {item.title}
                </h3>
                {item.subtitle && <p className="text-zinc-500 mb-4 font-medium">{item.subtitle}</p>}
                
                <p className="text-zinc-400 mb-6 text-base md:text-lg leading-relaxed">
                    {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-900/50 rounded-lg text-xs text-zinc-400 border border-zinc-700/50">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {item.links.map((link, i) => (
                        link.type === "primary" ? (
                            <ButtonPrimary 
                                key={i}
                                href={link.href}
                                target="_blank"
                                label={link.label}
                                icon={link.icon}
                            />
                        ) : (
                            <ButtonOutline 
                                key={i}
                                href={link.href}
                                target="_blank"
                                label={link.label}
                                icon={link.icon}
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Writing = () => {
    return (
        <section id="writing" className="section">
            <div className="container">
                <h2 className="headline-2 mb-12 reveal-up text-center md:text-left">Publications & Articles</h2>
                
                {/* Official Publications Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8 reveal-up">
                        <div className="h-[1px] flex-grow bg-zinc-800"></div>
                        <h3 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap">Official Publications</h3>
                        <div className="h-[1px] flex-grow bg-zinc-800"></div>
                    </div>
                    {officialPublications.map((item, index) => (
                        <PublicationCard key={index} item={item} />
                    ))}
                </div>

                {/* Digital Blog Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8 reveal-up">
                        <div className="h-[1px] flex-grow bg-zinc-800"></div>
                        <h3 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap">Technical Blog Series</h3>
                        <div className="h-[1px] flex-grow bg-zinc-800"></div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 reveal-up">
                        <ButtonPrimary 
                            href="https://medium.com/@pasiduchamod"
                            target="_blank"
                            label="Medium Profile"
                            icon="arrow_outward"
                        />
                        <ButtonOutline 
                            href="https://app.daily.dev/pasiduchamod"
                            target="_blank"
                            label="daily.dev Profile"
                            icon="rss_feed"
                        />
                    </div>
                    {blogSeries.map((item, index) => (
                        <PublicationCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Writing;
