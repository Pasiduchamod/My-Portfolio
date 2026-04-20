


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

    useEffect(() => {
        function update(time) {
          lenis?.raf(time * 1000)
        }
        gsap.ticker.add(update)
        return () => gsap.ticker.remove(update)
    }, [lenis])

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