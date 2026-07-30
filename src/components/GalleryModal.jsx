import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = ({ album, onClose }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [album]);

  if (!album || !album.photos || album.photos.length === 0) return null;

  const photos = album.photos;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 grid place-items-center rounded-full bg-zinc-800/90 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors border border-zinc-700/50"
          aria-label="Close modal"
        >
          <span className="material-symbols-rounded">close</span>
        </button>

        {/* Main Image Slider */}
        <div className="relative w-full lg:w-3/5 bg-black flex flex-col items-center justify-center min-h-[320px] lg:min-h-[500px]">
          <img
            src={photos[activePhotoIndex]}
            alt={`${album.title} - Photo ${activePhotoIndex + 1}`}
            className="w-full h-full object-contain max-h-[60vh] lg:max-h-full"
          />

          {/* Navigation Arrows (Show only if multiple photos) */}
          {photos.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-zinc-900/80 text-zinc-200 hover:text-yellow-400 hover:bg-zinc-800 transition-all border border-zinc-700/60"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-zinc-900/80 text-zinc-200 hover:text-yellow-400 hover:bg-zinc-800 transition-all border border-zinc-700/60"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Counter Badge */}
              <div className="absolute bottom-3 left-4 bg-zinc-900/90 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 border border-zinc-800">
                Photo {activePhotoIndex + 1} of {photos.length}
              </div>
            </>
          )}
        </div>

        {/* Details & Thumbnails Section */}
        <div className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto bg-zinc-900">
          <div>
            {/* Category Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4">
              <span className="material-symbols-rounded text-sm">photo_library</span>
              {album.category}
            </div>

            {/* Event Title */}
            <h3 className="title-1 font-semibold text-zinc-50 mb-3 leading-snug">
              {album.title}
            </h3>

            {/* Metadata (Date & Location) */}
            <div className="flex flex-wrap gap-4 text-xs text-zinc-400 mb-5">
              {album.date && (
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-rounded text-yellow-400 text-sm">calendar_month</span>
                  <span>{new Date(album.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              )}
              {album.location && (
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-rounded text-yellow-400 text-sm">location_on</span>
                  <span>{album.location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-sm leading-relaxed border-t border-zinc-800 pt-4 mb-6">
              {album.description || 'No description provided for this event album.'}
            </p>
          </div>

          {/* Thumbnail Strip for 4-6 Photos */}
          {photos.length > 1 && (
            <div className="pt-4 border-t border-zinc-800">
              <span className="label text-xs uppercase tracking-wider mb-2">
                Album Photos ({photos.length})
              </span>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {photos.map((url, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activePhotoIndex === idx 
                        ? 'border-yellow-400 scale-105 shadow-md shadow-yellow-400/20' 
                        : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={url} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

GalleryModal.propTypes = {
  album: PropTypes.object,
  onClose: PropTypes.func.isRequired
};

export default GalleryModal;
