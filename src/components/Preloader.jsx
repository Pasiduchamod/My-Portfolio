import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState('Initializing...');

    useEffect(() => {
        const loadingSequences = [
            'Loading Skills...',
            'Fetching Projects...',
            'Preparing Opportunities...',
            'Almost Ready...',
            'Welcome!'
        ];

        let textIndex = 0;
        const textInterval = setInterval(() => {
            if (textIndex < loadingSequences.length - 1) {
                setLoadingText(loadingSequences[textIndex]);
                textIndex++;
            }
        }, 400);

        const tl = gsap.timeline({
            onComplete: () => {
                clearInterval(textInterval);
                setIsLoading(false);
                document.body.style.overflow = 'auto';
                document.documentElement.style.overflow = 'auto';
            }
        });

        // 1. Zoom in the logo
        tl.fromTo(".preloader-content", 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
        )
        // 2. Progress Bar animation
        .to(".preloader-progress-bar", {
            width: "100%",
            duration: 2.2,
            ease: "none"
        })
        // 3. Slide the whole preloader up to reveal the site
        .to(".preloader-container", {
            y: "-100%",
            duration: 1,
            ease: "expo.inOut",
            delay: 0.2
        });

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
            clearInterval(textInterval);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="preloader-container fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950">
            <div className="preloader-content flex flex-col items-center gap-8">
                
                {/* Logo Container with Spinning Ring */}
                <div className="relative flex items-center justify-center">
                    {/* The Spinning Ring */}
                    <div className="absolute w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full border-2 border-zinc-900 border-t-yellow-400 animate-spin transition-all duration-700 shadow-[0_0_15px_rgba(250,204,21,0.2)]"></div>
                    
                    {/* Pulsing Outer Glow */}
                    <div className="absolute w-[110px] h-[110px] md:w-[140px] md:h-[140px] rounded-full bg-yellow-400/5 animate-pulse blur-xl"></div>

                    {/* Logo */}
                    <div className="preloader-logo w-20 h-20 md:w-28 md:h-28 flex items-center justify-center relative z-10">
                        <img src="/assets/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent tracking-tighter">
                        Pasidu Chamod
                    </h1>
                    
                    {/* The Loading Line */}
                    <div className="w-40 h-[2px] bg-zinc-900 rounded-full mt-2 overflow-hidden border border-zinc-800/30">
                        <div className="preloader-progress-bar h-full bg-yellow-400 w-0 shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
                    </div>

                    <p className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-6 min-h-[1em] text-center">
                        {loadingText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
