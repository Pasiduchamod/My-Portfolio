import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";
import DevOpsProjects from "./components/DevOpsProjects";

import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import CollaborativeWork from "./components/CollaborativeWork";
import Writing from "./components/Writing";
import MobileApps from "./components/MobileApps";
import AchievementsHighlights from "./components/AchievementsHighlights";
import Education from "./components/Education";
import Volunteering from "./components/Volunteering";
import Preloader from "./components/Preloader";
import FunFacts from "./components/FunFacts";
import EventGallery from "./components/EventGallery";
import AdminPortal from "./components/Admin/AdminPortal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MainPortfolio = () => {
  const lenis = useLenis();

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out'
      });
    });

    const widthElements = gsap.utils.toArray('.reveal-width');
    widthElements.forEach((element) => {
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

    const heightElements = gsap.utils.toArray('.reveal-height');
    heightElements.forEach((element) => {
      gsap.fromTo(element, 
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    window.addEventListener('load', () => ScrollTrigger.refresh());
  });

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, smoothTouch: true }}>
      <Helmet>
        <title>Pasidu Chamod - Portfolio | Web Developer & Cloud DevOps Engineer</title>
        <meta name="description" content="Pasidu Chamod - Passionate web developer and Cloud & DevOps Engineer. Explore my portfolio showcasing full-stack development, cloud-native solutions, and innovative projects." />
        <meta name="keywords" content="Pasidu Chamod, web developer, Cloud DevOps Engineer, full-stack development, cloud-native solutions, CI/CD pipelines, React, portfolio" />
        <meta name="author" content="Pasidu Chamod" />
        <link rel="canonical" href="https://pasidu-chamod.vercel.app" />
      </Helmet>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skill />
        <DevOpsProjects />
        <Work />
        <CollaborativeWork />
        <MobileApps />
        <Writing />
        <AchievementsHighlights />
        <Volunteering />
        <FunFacts />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route 
          path="/gallery" 
          element={
            <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, smoothTouch: true }}>
              <Header />
              <EventGallery />
              <Footer />
            </ReactLenis>
          } 
        />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;