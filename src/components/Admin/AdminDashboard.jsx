import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  uploadAlbumToCloudinary, 
  fetchGalleryAlbums, 
  deleteAlbumFromCache 
} from '../../lib/cloudinary';

const AdminDashboard = ({ onLogout }) => {
  const [albums, setAlbums] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Hackathons');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);

  // UI Status State
  const [isUploading, setIsUploading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const categories = ['Hackathons', 'Organized Events', 'Awards', 'Workshops & Talks'];

  const loadData = async () => {
    setLoadingList(true);
    try {
      const list = await fetchGalleryAlbums();
      setAlbums(list);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setSelectedFiles(files);
      const readPromises = files.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readPromises).then((previews) => setFilePreviews(previews));
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      setStatusMessage({ type: 'error', text: 'Please select at least 1 photo (4-6 recommended) for this event album.' });
      return;
    }

    setIsUploading(true);
    setStatusMessage(null);

    try {
      const createdAlbum = await uploadAlbumToCloudinary({
        files: selectedFiles,
        title,
        category,
        date,
        location,
        description
      });

      setStatusMessage({ 
        type: 'success', 
        text: `Success! Album "${createdAlbum.title}" (${createdAlbum.photos.length} photos) published to Cloudinary!` 
      });

      // Reset form
      setTitle('');
      setLocation('');
      setDescription('');
      setSelectedFiles([]);
      setFilePreviews([]);

      // Refresh list
      loadData();
    } catch (err) {
      setStatusMessage({ 
        type: 'error', 
        text: err.message || 'Cloudinary album upload failed. Check credentials in .env' 
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this album?')) {
      deleteAlbumFromCache(id);
      setAlbums((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50 p-4 sm:p-8 pt-24">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
          <div>
            <span className="label text-yellow-400 font-mono text-xs uppercase tracking-wider">
              Secret Admin Control
            </span>
            <h1 className="headline-2 mb-1">
              Event Albums Manager
            </h1>
            <p className="text-sm text-zinc-400">
              Upload 4-6 event photos per album directly to Cloudinary.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="/gallery" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-rounded">open_in_new</span>
              View Live Gallery
            </a>
            <button
              onClick={onLogout}
              className="btn btn-secondary"
            >
              <span className="material-symbols-rounded">logout</span>
              Log Out
            </button>
          </div>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div className={`p-4 rounded-2xl border text-sm flex items-center gap-3 ${
            statusMessage.type === 'success' 
              ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400' 
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}>
            <span className="material-symbols-rounded text-xl">
              {statusMessage.type === 'success' ? 'check_circle' : 'error'}
            </span>
            <span>{statusMessage.text}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-5 bg-zinc-800/40 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="title-1 font-semibold text-zinc-100 flex items-center gap-2">
              <span className="material-symbols-rounded text-yellow-400">add_photo_alternate</span>
              Create Event Album
            </h2>

            <form onSubmit={handleUploadSubmit} className="space-y-4">
              
              {/* Event Title */}
              <div>
                <label className="label">Event Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HackaDev 2024 Finalist"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-field"
                />
              </div>

              {/* Category & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label">Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="text-field"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="text-field"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="label">Location</label>
                <input
                  type="text"
                  placeholder="e.g. University of Jaffna"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-field"
                />
              </div>

              {/* Description */}
              <div>
                <label className="label">Description & Key Highlights</label>
                <textarea
                  rows={3}
                  placeholder="Details about the event, achievements, or project built..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="text-field resize-none"
                />
              </div>

              {/* Multi-Photo Picker */}
              <div>
                <label className="label">Select Album Photos (4-6 Photos) *</label>
                <div className="relative border-2 border-dashed border-zinc-700 hover:border-yellow-400 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-zinc-900/50">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {filePreviews.length > 0 ? (
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-2 max-h-36 overflow-y-auto">
                        {filePreviews.map((src, i) => (
                          <img key={i} src={src} alt="Preview" className="w-full h-16 object-cover rounded-lg border border-zinc-700" />
                        ))}
                      </div>
                      <span className="inline-block text-xs font-mono text-yellow-400 bg-zinc-900 px-2 py-1 rounded">
                        {filePreviews.length} Photos Selected
                      </span>
                    </div>
                  ) : (
                    <div className="py-4 flex flex-col items-center">
                      <span className="material-symbols-rounded text-3xl text-zinc-500 mb-1">collections</span>
                      <span className="text-sm font-medium text-zinc-300">Click to select 4-6 photos</span>
                      <span className="text-xs text-zinc-500 mt-1">Hold Ctrl/Cmd to choose multiple files</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Button */}
              <button
                type="submit"
                disabled={isUploading}
                className="btn btn-primary w-full justify-center disabled:opacity-50 mt-4"
              >
                <span className="material-symbols-rounded">cloud_upload</span>
                {isUploading ? 'Publishing Album...' : 'Publish Event Album'}
              </button>
            </form>
          </div>

          {/* Existing Albums List */}
          <div className="lg:col-span-7 bg-zinc-800/40 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="title-1 font-semibold text-zinc-100">
                Published Event Albums ({albums.length})
              </h2>
              <button
                onClick={loadData}
                className="btn btn-outline text-xs px-3"
                title="Refresh List"
              >
                <span className="material-symbols-rounded text-base">refresh</span>
              </button>
            </div>

            {loadingList ? (
              <div className="space-y-3">
                {[1, 2].map((n) => (
                  <div key={n} className="h-24 bg-zinc-900/60 rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : albums.length === 0 ? (
              <div className="text-center py-12 bg-zinc-900/40 rounded-2xl border border-zinc-800">
                <p className="text-sm text-zinc-500">No event albums uploaded yet.</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {albums.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-between gap-4 group hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-3.5 overflow-hidden">
                      <img
                        src={item.coverUrl || item.photos[0]}
                        alt={item.title}
                        className="w-16 h-16 rounded-xl object-cover shrink-0 bg-zinc-950 border border-zinc-800"
                      />
                      <div className="overflow-hidden">
                        <h4 className="font-semibold text-sm text-zinc-200 truncate">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                          <span className="px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-400 font-mono text-[10px]">
                            {item.category}
                          </span>
                          <span className="text-zinc-500">
                            • {item.photos?.length || 1} Photos
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors shrink-0"
                      title="Delete Album"
                    >
                      <span className="material-symbols-rounded text-lg">delete</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

AdminDashboard.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default AdminDashboard;
