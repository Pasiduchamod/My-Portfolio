import { ButtonOutline, ButtonPrimary } from "./Button";

const Writing = () => {
    return (
        <section id="writing" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">My Writing</h2>
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <figure className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-700/50 bg-zinc-700/50 aspect-video md:aspect-auto">
                            <img 
                                src="/assets/images/blog/devops_series.jpg" 
                                alt="DevOps from a Learner's View Series Cover"
                                className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-105"
                            />
                        </figure>
                        
                        <div className="w-full md:w-1/2 flex flex-col items-start">
                            <h3 className="title-1 mb-4 text-zinc-100">
                                DevOps from a Learner&apos;s View
                            </h3>
                            <p className="text-zinc-400 mb-6 text-lg">
                                A comprehensive 25-day journey documenting my path to mastering DevOps practices. 
                                From Linux fundamentals to CI/CD pipelines with Jenkins and Kubernetes. 
                                This series breaks down complex concepts into digestible, hands-on learning experiences.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 bg-zinc-700/50 rounded-lg text-sm text-zinc-300">DevOps</span>
                                <span className="px-3 py-1 bg-zinc-700/50 rounded-lg text-sm text-zinc-300">Linux</span>
                                <span className="px-3 py-1 bg-zinc-700/50 rounded-lg text-sm text-zinc-300">Jenkins</span>
                                <span className="px-3 py-1 bg-zinc-700/50 rounded-lg text-sm text-zinc-300">Docker</span>
                                <span className="px-3 py-1 bg-zinc-700/50 rounded-lg text-sm text-zinc-300">Kubernetes</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <ButtonOutline 
                                    href="https://medium.com/@pasiduchamod/list/devops-from-a-learners-view-25-days-b63e77b6efe7"
                                    target="_blank"
                                    label="Read the Series"
                                    icon="open_in_new"
                                />
                                <ButtonPrimary 
                                    href="https://medium.com/@pasiduchamod"
                                    target="_blank"
                                    label="Medium Profile"
                                    icon="arrow_outward"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Writing
