
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
];

const DevOpsProjects = () => {
  return (
    <section className="section" id="devops">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Featured DevOps Projects</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Specialized in automating workflows and ensuring reliable software delivery. 
          Here are key projects that demonstrate my expertise in CI/CD, containerization, and cloud deployment.
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
