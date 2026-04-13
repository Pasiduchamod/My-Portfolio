
import ProjectCard from "./ProjectCard";

const devOpsWorks = [
  {
    imgSrc: "/assets/images/devops_projects/pr_1.png",
    title: "End-to-End Jenkins CI/CD Pipeline",
    tags: ["Jenkins", "Docker", "SonarQube", "AWS", "GitHub"],
    links: { repo: "https://github.com/Pasiduchamod/Jenkins-CI-CD-Pipeline---SonarQube-Docker-Github-Webhooks-on-AWS", }, 
  },
  {
    imgSrc: "/assets/images/devops_projects/pr_2.png",
    title: "Deploying a React App on Kubernetes using Minikube and Docker",
    tags: ["Docker", "Kubernetes", "AWS", "Minikube", "Dockerhub"],
    links: { repo: "https://github.com/Pasiduchamod/react-kubernetes-deployment", }, 
  },
  {
    imgSrc: "/assets/images/devops_projects/pr_3.png",
    title: "Automated AWS 3-Tier Infrastructure with CloudFormation",
    tags: ["AWS", "CloudFormation", "IaC", "3-Tier Architecture"],
    links: { repo: "https://github.com/Pasiduchamod/Production-Ready-3-Tier-Architecture.git", }, 
  },
];

const DevOpsProjects = () => {
  return (
    <section className="section" id="devops">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Cloud & DevOps Projects</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Specialized in architecting cloud-native solutions and automating workflows for high availability. 
          These projects showcase my expertise in CI/CD, cloud infrastructure, and reliable software delivery.
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {devOpsWorks.map(({ imgSrc, title, tags, links }, key) => (
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

export default DevOpsProjects;
