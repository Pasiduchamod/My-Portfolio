import React, { useEffect, useState } from 'react';
import { fetchGalleryAlbums } from '../lib/cloudinary';
import GalleryModal from './GalleryModal';

const EventGallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalAlbum, setActiveModalAlbum] = useState(null);

  const categories = ['All', 'Hackathons', 'Organized Events', 'Awards', 'Workshops & Talks'];

  const loadAlbums = async () => {
    setLoading(true);
    try {
      const data = await fetchGalleryAlbums();
      setAlbums(data);
    } catch (err) {
      console.error('Failed to load gallery albums:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  const filteredAlbums = albums.filter((album) => {
    const matchesCategory = selectedCategory === 'All' || album.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = 
      album.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.location?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen pt-28 pb-20 bg-zinc-900 text-zinc-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Header & Navigation back to home */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-yellow-400 font-medium hover:underline mb-3"
            >
              <span className="material-symbols-rounded text-base">arrow_back</span> Return to Portfolio Home
            </a>
            <h1 className="headline-2 mb-2">
              Event & Hackathon Gallery
            </h1>
            <p className="text-zinc-400 max-w-xl text-base">
              Explore photo albums from national hackathons I participated in, developer workshops I organized, and key tech achievements.
            </p>
          </div>

          <button
            onClick={loadAlbums}
            className="btn btn-outline self-start md:self-auto"
            title="Refresh Gallery"
          >
            <span className="material-symbols-rounded">refresh</span>
            Refresh
          </button>
        </div>

        {/* Category Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 pb-6 border-b border-zinc-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-yellow-400 text-zinc-950 font-semibold shadow-md shadow-yellow-400/10'
                    : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 ring-1 ring-zinc-50/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <span className="material-symbols-rounded absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">
              search
            </span>
            <input
              type="text"
              placeholder="Search albums..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-field pl-10"
            />
          </div>
        </div>

        {/* Gallery Albums Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="h-80 rounded-2xl bg-zinc-800/40 animate-pulse" />
            ))}
          </div>
        ) : filteredAlbums.length === 0 ? (
          <div className="text-center py-20 bg-zinc-800/30 rounded-3xl border border-zinc-800/80 my-8">
            <span className="material-symbols-rounded text-5xl text-zinc-600 mb-2">collections</span>
            <h3 className="text-lg font-medium text-zinc-300">No albums found</h3>
            <p className="text-sm text-zinc-500 mt-1 max-w-md mx-auto">
              {searchQuery ? `No matches for "${searchQuery}".` : 'No event albums uploaded in this category yet.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlbums.map((album) => (
              <div
                key={album.id}
                onClick={() => setActiveModalAlbum(album)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-800/50 border border-zinc-800 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/5 cursor-pointer flex flex-col"
              >
                {/* Album Cover Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={album.coverUrl || album.photos[0]}
                    alt={album.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Photo Count Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-zinc-900/90 text-yellow-400 border border-zinc-700/80 shadow-lg flex items-center gap-1">
                      <span className="material-symbols-rounded text-xs">collections</span>
                      {album.photos?.length || 1} Photos
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-900/90 text-zinc-200 border border-zinc-700/60 shadow-lg">
                      {album.category}
                    </span>
                  </div>
                </div>

                {/* Album Metadata Card Bottom */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="title-1 font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors line-clamp-1">
                      {album.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {album.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-zinc-800 text-xs text-zinc-400 font-mono">
                    {album.date && (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-rounded text-sm text-yellow-400">calendar_month</span>
                        {new Date(album.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    )}
                    {album.location && (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-rounded text-sm text-yellow-400">location_on</span>
                        {album.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Album Modal Lightbox */}
      <GalleryModal
        album={activeModalAlbum}
        onClose={() => setActiveModalAlbum(null)}
      />
    </section>
  );
};

export default EventGallery;
