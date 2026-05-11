


import { Helmet } from 'react-helmet-async'

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";
import DevOpsProjects from "./components/DevOpsProjects";

import { ReactLenis, useLenis } from 'lenis/react'  
import { useEffect } from "react";

import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { element } from "prop-types";
import CollaborativeWork from "./components/CollaborativeWork";
import Writing from "./components/Writing";
import MobileApps from "./components/MobileApps";
import AchievementsHighlights from "./components/AchievementsHighlights";
import Education from "./components/Education";
import Volunteering from "./components/Volunteering";
import Preloader from "./components/Preloader";

gsap.registerPlugin(useGSAP,ScrollTrigger); 


const App = () =>{
    const lenis = useLenis();

    useGSAP(()=>{
        const elements = gsap.utils.toArray('.reveal-up');
        
        elements.forEach((element)=>{
            gsap.to(element,{
                scrollTrigger:{
                    trigger:element,
                    start:'top 90%',
                    end:'bottom 60%',
                    toggleActions: 'play none none reverse'
                },
                y:0,
                opacity:1,
                duration:1.2,
                ease:'power2.out'
            })
        });

        const widthElements = gsap.utils.toArray('.reveal-width');
        widthElements.forEach((element)=>{
            gsap.fromTo(element, 
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Refresh ScrollTrigger after all content is potentially loaded
        window.addEventListener('load', () => ScrollTrigger.refresh());
    });

    return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, smoothTouch: true }}>
        <Helmet>
            <title>Pasidu Chamod - Portfolio | Web Developer & Cloud DevOps Engineer</title>
            <meta name="description" content="Pasidu Chamod - Passionate web developer and aspiring Cloud & DevOps Engineer. Explore my portfolio showcasing full-stack development, cloud-native solutions, CI/CD pipelines, and innovative projects." />
            <meta name="keywords" content="Pasidu Chamod, web developer, Cloud DevOps Engineer, full-stack development, cloud-native solutions, CI/CD pipelines, React, portfolio, Computer Science" />
            <meta name="author" content="Pasidu Chamod" />
            <meta property="og:title" content="Pasidu Chamod - Portfolio | Web Developer & Cloud DevOps Engineer" />
            <meta property="og:description" content="Explore Pasidu Chamod's portfolio: web development, cloud solutions, DevOps projects, and more. Currently pursuing B.Sc. in Computer Science at University of Jaffna." />
            <meta property="og:image" content="/src/assets/images/logo.png" />
            <meta property="og:url" content="https://yourportfolio.com" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Pasidu Chamod - Portfolio | Web Developer & Cloud DevOps Engineer" />
            <meta name="twitter:description" content="Explore Pasidu Chamod's portfolio: web development, cloud solutions, DevOps projects, and more." />
            <meta name="twitter:image" content="/src/assets/images/logo.png" />
            <link rel="canonical" href="https://yourportfolio.com" />
        </Helmet>
        <Preloader />
        <Header/>
        <main>
            <Hero/>
            <About/>
            <Education/>
            <Skill/>
            <DevOpsProjects/>
            <Work/>
            <CollaborativeWork/>
            <MobileApps/>
            <Writing/>
            <AchievementsHighlights/>
            <Volunteering/>
            <Contact/>
        </main>
        <Footer/>
    </ReactLenis>
    )
}

export default App;