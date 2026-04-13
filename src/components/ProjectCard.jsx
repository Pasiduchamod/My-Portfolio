import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    links, // Changed from projectLink
    isProduction,
    classes,
    imgClass = 'img-cover'
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  // Helper to handle card click
  const handleCardClick = (e) => {
    const linkKeys = Object.keys(links || {});
    
    // If only one link, let the default anchor handle it
    if (linkKeys.length === 1) {
      window.open(links[linkKeys[0]], '_blank');
      return;
    }
    
    // If multiple links, show overlay
    if (linkKeys.length > 1) {
      e.preventDefault();
      setShowOverlay(true);
    }
  };

  const getLinkIcon = (key) => {
    switch (key.toLowerCase()) {
      case 'repo':
      case 'github': return 'code';
      case 'live':
      case 'site': return 'language';
      case 'playstore':
      case 'app': return 'shop';
      default: return 'open_in_new';
    }
  };

  const getLinkLabel = (key) => {
    switch (key.toLowerCase()) {
      case 'repo':
      case 'github': return 'Repository';
      case 'live':
      case 'site': return 'Live Demo';
      case 'playstore': return 'Play Store';
      default: return key.charAt(0).toUpperCase() + key.slice(1);
    }
  };

  return (
    <div 
        className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors group cursor-pointer " + classes}
        onClick={handleCardClick}
    >
        <figure className='img-box aspect-square rounded-lg mb-4 relative overflow-hidden'>
            <img src={imgSrc} loading='lazy' className={imgClass}></img>
            
            {isProduction && (
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-950/40 backdrop-blur-md border border-yellow-400/20 shadow-sm">
                <span className='relative w-1.5 h-1.5 rounded-full bg-yellow-400'>
                  <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping"></span>
                </span>
                <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-[0.15em]">Production</span>
              </div>
            )}
        </figure>
        <div className='flex items-center justify-between gap-4'>
            <div>
                <h3 className="title-1 mb-3">{title}</h3>
                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label,key)=>(
                        <span key={key} className='h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg'>{label}</span>
                    ))}
                </div>
            </div>
            <div className="w-11 h-11 rounded-lg grid place-items-center bg-yellow-500 text-zinc-950 shrink-0">
                <span className='material-symbols-rounded' aria-hidden="true">arrow_outward</span>
            </div>
        </div>

        {/* Overlay for multiple links */}
        <div className={`project-overlay ${showOverlay ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button 
                className="close-overlay"
                onClick={() => setShowOverlay(false)}
            >
                <span className="material-symbols-rounded">close</span>
            </button>
            <h4 className="text-xl font-semibold mb-2 text-zinc-100">{title}</h4>
            <p className="text-sm text-zinc-400 mb-4">Choose a link to visit:</p>
            
            <div className="flex flex-col gap-3 w-full items-center">
                {Object.entries(links || {}).map(([key, url]) => (
                    <a 
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`overlay-btn ${key === 'live' || key === 'playstore' ? 'primary' : ''}`}
                    >
                        <span className="material-symbols-rounded">{getLinkIcon(key)}</span>
                        {getLinkLabel(key)}
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    tags:PropTypes.array.isRequired,
    links:PropTypes.object,
    isProduction:PropTypes.bool,
    classes:PropTypes.string,
    imgClass:PropTypes.string
}

export default ProjectCard
