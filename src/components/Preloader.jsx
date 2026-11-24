import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing...');
    const progressBarRef = useRef(null);
    const progressValRef = useRef({ value: 0 });

    useEffect(() => {
        // Prevent background scrolling while loading
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Animate initial logo appearance
        gsap.fromTo(
            ".preloader-content",
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
        );

        // List of critical above-the-fold assets to preload
        const criticalImages = [
            '/assets/images/logo.png',
            '/assets/images/hero-banner-new.png',
            '/assets/images/avatar-1.jpg',
            '/assets/images/Tools_icons/aws.png',
            '/assets/images/Tools_icons/docker.svg',
            '/assets/images/Tools_icons/kubernetes.png'
        ];

        // Trackable tasks:
        // 1. Fonts readiness (document.fonts.ready)
        // 2. Window / document load state
        // 3. Each critical image
        const totalItems = criticalImages.length + 2;
        let loadedItems = 0;
        let isDone = false;
        const startTime = Date.now();
        const minDisplayDuration = 600; // Small threshold to avoid jarring 10ms flash if cached

        const updateProgress = (targetPercent, statusMessage) => {
            if (statusMessage) {
                setLoadingText(statusMessage);
            }

            gsap.to(progressValRef.current, {
                value: targetPercent,
                duration: 0.35,
                ease: 'power2.out',
                onUpdate: () => {
                    const rounded = Math.round(progressValRef.current.value);
                    setProgress(rounded);
                    if (progressBarRef.current) {
                        progressBarRef.current.style.width = `${rounded}%`;
                    }
                }
            });
        };

        const onItemLoaded = (statusMessage) => {
            if (isDone) return;
            loadedItems += 1;
            const target = Math.min(Math.round((loadedItems / totalItems) * 100), 99);
            updateProgress(target, statusMessage);

            if (loadedItems >= totalItems) {
                finishLoading();
            }
        };

        const finishLoading = () => {
            if (isDone) return;
            isDone = true;

            const elapsed = Date.now() - startTime;
            const remainingDelay = Math.max(0, minDisplayDuration - elapsed);

            setTimeout(() => {
                // Animate progress to 100%
                updateProgress(100, 'Ready!');

                // Smooth exit transition
                gsap.to(".preloader-container", {
                    opacity: 0,
                    scale: 1.05,
                    duration: 0.7,
                    delay: 0.25,
                    ease: "power3.inOut",
                    pointerEvents: 'none',
                    onComplete: () => {
                        setIsLoading(false);
                        document.body.style.overflow = '';
                        document.documentElement.style.overflow = '';
                        if (onComplete) {
                            onComplete();
                        }
                    }
                });
            }, remainingDelay);
        };

        // 1. Preload Fonts
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready
                .then(() => onItemLoaded('Loaded Typography & Fonts...'))
                .catch(() => onItemLoaded('Styles Ready...'));
        } else {
            onItemLoaded('Typography Ready...');
        }

        // 2. Preload Window / Document Load
        if (document.readyState === 'complete') {
            onItemLoaded('Core Document Ready...');
        } else {
            window.addEventListener('load', () => onItemLoaded('Page Core Loaded...'), { once: true });
        }

        // 3. Preload Critical Images
        criticalImages.forEach((src) => {
            const img = new Image();
            img.src = src;

            const handleImageDone = () => {
                const filename = src.split('/').pop().replace(/\.[^/.]+$/, '');
                onItemLoaded(`Loaded ${filename}...`);
            };

            if (img.complete) {
                handleImageDone();
            } else {
                img.onload = handleImageDone;
                img.onerror = handleImageDone; // Don't block loading if an image fails
            }
        });

        // 4. Safety Timeout: Ensure preloader never hangs indefinitely (e.g., slow or blocked network)
        const safetyTimeout = setTimeout(() => {
            if (!isDone) {
                finishLoading();
            }
        }, 3500);

        return () => {
            clearTimeout(safetyTimeout);
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [onComplete]);

    if (!isLoading) return null;

    return (
        <div className="preloader-container fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950">
            <div className="preloader-content flex flex-col items-center gap-6">
                
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
                    <div className="w-44 h-[3px] bg-zinc-900 rounded-full mt-3 overflow-hidden border border-zinc-800/40 relative">
                        <div 
                            ref={progressBarRef}
                            className="preloader-progress-bar h-full bg-yellow-400 w-0 shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-none"
                        ></div>
                    </div>

                    {/* Numerical Percentage */}
                    <div className="text-yellow-400/90 text-xs font-mono font-semibold tracking-wider mt-2">
                        {progress}%
                    </div>

                    {/* Dynamic Real-Time Status Text */}
                    <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase mt-2 min-h-[1.2em] text-center max-w-[280px] truncate">
                        {loadingText}
                    </p>
                </div>
            </div>
        </div>
    );
};

Preloader.propTypes = {
    onComplete: PropTypes.func
};

export default Preloader;
