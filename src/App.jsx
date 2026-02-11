


import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";
import DevOpsProjects from "./components/DevOpsProjects";

import { ReactLenis } from 'lenis/react'  

import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { element } from "prop-types";
import CollaborativeWork from "./components/CollaborativeWork";
import Writing from "./components/Writing";
import MobileApps from "./components/MobileApps";
import AchievementsHighlights from "./components/AchievementsHighlights";

gsap.registerPlugin(useGSAP,ScrollTrigger); 


const App = () =>{

    useGSAP(()=>{
        const elements = gsap.utils.toArray('.reveal-up');
        
        
        elements.forEach((element)=>{
            gsap.to(element,{
                scrollTrigger:{
                    trigger:element,
                    start:'-200 bottom',
                    end:'bottom 80%',
                    scrub:true
                },
                y:0,
                opacity:1,
                duration:1,
                ease:'power2.out'
            })
        });
    });

    return (
    <ReactLenis root>
        <Header/>
        <main>
            <Hero/>
            <About/>
            <Skill/>
            <DevOpsProjects/>
            <Work/>
            <CollaborativeWork/>
            <MobileApps/>
            <Writing/>
            <AchievementsHighlights/>
            <Contact/>
        </main>
        <Footer/>
    </ReactLenis>
    )
}

export default App;