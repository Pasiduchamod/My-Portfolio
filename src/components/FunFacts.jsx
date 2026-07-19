import React from 'react';

const stats = [
  {
    metric: "50+",
    title: "Technical Articles & Blogs",
    desc: "Published extensively on Medium, daily.dev, and IEEE newsletters, sharing cloud architectural designs and DevOps best practices.",
    icon: "history_edu"
  },
  {
    metric: "50+",
    title: "GitHub Repositories",
    desc: "Active open-source contributor with public repositories showcasing automated CI/CD pipelines, containerized apps, and IaC templates.",
    icon: "terminal"
  },
  {
    metric: "KodeKloud",
    title: "DevOps Practical Training",
    desc: "Actively training and solving production-level DevOps scenarios in KodeKloud's advanced sandbox environments to master pipeline automation.",
    icon: "workspace_premium"
  }
];

const FunFacts = () => {
  return (
    <section id="metrics" className="section py-16 md:py-24">
      <div className="container">
        <h2 className="headline-2 mb-3 reveal-up">Technical Impact & Metrics</h2>
        <p className="text-zinc-400 mt-3 mb-12 max-w-[50ch] reveal-up">
          Key performance metrics highlighting my contributions to open-source development, cloud blogging, and hands-on DevOps engineering.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ metric, title, desc, icon }, key) => (
            <div 
              key={key}
              className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/80 hover:border-yellow-400/20 shadow-md hover:shadow-lg transition-all duration-300 group reveal-up flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800/50 flex items-center justify-center text-yellow-400 mb-4 group-hover:border-yellow-400/20 transition-all">
                  <span className="material-symbols-rounded text-2xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
                </div>
                
                <div className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2 tracking-tight">
                  {metric}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
