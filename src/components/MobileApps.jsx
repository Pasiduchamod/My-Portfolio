
import ProjectCard from "./ProjectCard";

const mobileApps = [
  {
    imgSrc: "/assets/images/apps/QBox.png",
    title: "QBox - Teamwork & Communication",
    tags: ["Mobile App", "Education", "Real-time"],
    links: { playstore: "https://play.google.com/store/apps/details?id=com.qbox.anonymousqa&pcampaignid=web_share", Website: "https://qbox-web.vercel.app/",watchDemo: "https://youtu.be/dyw-YJM8ziA" },
  },
  {
    imgSrc: "/assets/images/apps/CompareShop.png",
    title: "CompareShop - Find Best Value",
    tags: ["Mobile App", "Shopping", "Utility"],
    links: { playstore: "https://play.google.com/store/apps/details?id=lk.pasiduchamod.compareshop&pcampaignid=web_share" , watchDemo: "https://youtu.be/d-zdgkrjXpU" },
  },
];

const MobileApps = () => {
  return (
    <section className="section" id="mobile-apps">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Mobile Applications</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Released applications on the Google Play Store, designed to solve 
          real-world problems with a focus on user experience and performance.
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {mobileApps.map(({ imgSrc, title, tags, links }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              links={links}
              classes="reveal-up"
              imgClass="img-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileApps;
