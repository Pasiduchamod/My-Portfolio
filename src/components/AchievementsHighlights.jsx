import React from "react";

const achievements = [
  {
    imgSrc: "/assets/images/achievements/hackforce.jpg",
    title: "HackForce Winner",
    desc: "Secured first place at the HackForce hackathon by developing UniConnect — an academic management system powered by AgentForce on Salesforce.",
    fit: "cover"
  },
  {
    imgSrc: "/assets/images/achievements/aws_cloud_practitioner.png",
    title: "AWS Certified Cloud Practitioner",
    desc: "Successfully earned the AWS Certified Cloud Practitioner certification, validating foundational cloud expertise, AWS services, and core architectural principles.",
    link: "https://www.credly.com/badges/8608be02-2031-4e29-b6d3-6fcc4fddbe03/public_url",
    fit: "contain"
  },
  {
    imgSrc: "/assets/images/achievements/google-arcade.jpg",
    title: "Google Arcade Legend Tier",
    desc: "Achieved the Legend Tier in Google Arcade by mastering advanced Google Cloud and development challenges that tested real-world problem-solving skills.",
    fit: "contain"
  },
];

const AchievementsHighlights = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <h2 className="headline-2 mb-3 reveal-up">Achievements & Highlights</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          A curated showcase of prestigious hackathon victories, top-tier technical honors, and select milestones that define my engineering journey.
        </p>

        <div className="flex flex-wrap gap-4 mb-10 reveal-up">
          <a 
            href="https://www.credly.com/users/pasidu-chamod" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-yellow-400 text-zinc-950 font-bold hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] group"
          >
            <span className="material-symbols-rounded">verified</span>
            View All Badges on Credly
            <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">chevron_right</span>
          </a>

          <a 
            href="https://www.skills.google/public_profiles/b731129d-c7aa-431d-a9e3-83526d424238" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-800/40 hover:bg-zinc-800/80 border border-zinc-700/50 text-zinc-100 font-bold transition-all shadow-[0_0_20px_rgba(0,0,0,0.15)] group"
          >
            <span className="material-symbols-rounded text-yellow-400">workspace_premium</span>
            View Google Skills Profile
            <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">chevron_right</span>
          </a>
        </div>

        <div className="grid gap-x-6 gap-y-8 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {achievements.map(({ imgSrc, title, desc, link, fit }, key) => (
            <div
              key={key}
              className="bg-zinc-900/50 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 reveal-up border border-zinc-800/80 hover:border-yellow-400/20 group/card flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-40 rounded-xl mb-4 overflow-hidden bg-zinc-950 flex items-center justify-center border border-zinc-800/50 group-hover/card:border-yellow-400/10">
                  <img
                    src={imgSrc}
                    alt={title}
                    className={`w-full h-full group-hover/card:scale-105 transition-transform duration-500 ${
                      fit === 'contain' ? 'object-contain p-4' : 'object-cover'
                    }`}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-yellow-400 transition-colors">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>

              {link && (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-yellow-400 text-xs font-bold mt-4 hover:text-yellow-300 transition-colors group/link self-start"
                >
                  Verify Credential
                  <span className="material-symbols-rounded text-sm group-hover/link:translate-x-0.5 transition-transform">open_in_new</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsHighlights;
