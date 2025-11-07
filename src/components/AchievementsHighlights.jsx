import React from "react";

const achievements = [
  {
    imgSrc: "/assets/images/achievements/hackforce.jpg",
    title: "HackForce Winner",
    desc: "Secured first place at the HackForce hackathon by developing UniConnect — an academic management system powered by AgentForce on Salesforce.",
  },
  {
    imgSrc: "/assets/images/achievements/google-arcade.jpg",
    title: "Google Arcade Legend Tier",
    desc: "Achieved the Legend Tier in Google Arcade by mastering advanced Google Cloud and development challenges that tested real-world problem-solving skills.",
  },
];

const AchievementsHighlights = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <h2 className="headline-2 mb-3 reveal-up">Achievements & Highlights</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Recognitions and milestones that showcase my dedication to innovation,
          teamwork, and continuous learning in the tech field.
        </p>

        <div className="grid gap-x-6 gap-y-8 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {achievements.map(({ imgSrc, title, desc }, key) => (
            <div
              key={key}
              className="bg-zinc-900/50 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 reveal-up"
            >
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsHighlights;
