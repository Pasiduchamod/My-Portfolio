import React from 'react'
import { ButtonOutline, ButtonPrimary } from './button'

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div className='lg:block'>
                <figure className="w-full max-w-[480px] mr-auto rounded-full border-[15px] border-yellow-300 shadow-[0px_4px_35px_rgba(255,255,0,0.5)] overflow-hidden">
                    <img src='/assets/images/hero-banner-new.png' width={656} height={800} className='w-full'></img>
                </figure>
            </div>
            <div className='ml-auto'>
                <div className="flex items-center gap-3">
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src='/assets/images/avatar-1.jpg' width={40} height={40} className='img-cover'></img>
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className='relative w-2 h-2 rounded-full bg-orange-400'>
                            <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping"></span>
                        </span>
                        Currently expanding my skills and knowledge.<br/>Available for opportunities soon!
                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                Designing the Future of Web Experiences
                </h2>
                <div className="flex items-center gap-3">
                <ButtonPrimary
                    label="Download CV"
                    icon="download"
                    href="https://res.cloudinary.com/dwbvthjie/image/upload/v1738776762/Resume_smjbkk.jpg?fl_attachment=true"
                />
                <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
