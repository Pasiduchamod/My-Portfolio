/**
 * Cloudinary API Service & Helper Utilities with Global JSON Manifest Sync
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '';
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '';
const MANIFEST_PUBLIC_ID = 'portfolio_albums_manifest.json';
const STORAGE_KEY = 'portfolio_gallery_albums_cache';

/**
 * Get public URL for the global manifest on Cloudinary
 */
function getManifestUrl() {
  if (!CLOUD_NAME) return null;
  return `https://res.cloudinary.com/${CLOUD_NAME}/raw/upload/${MANIFEST_PUBLIC_ID}?t=${Date.now()}`;
}

/**
 * Fetch all Event Albums globally from Cloudinary Manifest
 */
export async function fetchGalleryAlbums() {
  let globalAlbums = [];

  if (CLOUD_NAME) {
    try {
      const manifestUrl = getManifestUrl();
      const res = await fetch(manifestUrl);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          globalAlbums = data;
        }
      }
    } catch (err) {
      console.warn('Could not load global manifest from Cloudinary:', err);
    }
  }

  // Fallback to local cache if offline or manifest not initialized yet
  const localCache = getLocalCache();
  const sampleAlbums = getInitialSampleAlbums();

  const albumMap = new Map();
  [...sampleAlbums, ...globalAlbums, ...localCache].forEach((album) => {
    if (album && album.id) {
      albumMap.set(album.id, album);
    }
  });

  return Array.from(albumMap.values()).sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
}

/**
 * Upload multiple files for a single Event Album to Cloudinary and update the GLOBAL manifest.
 */
export async function uploadAlbumToCloudinary({ files, title, category, date, location, description }) {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error('Cloudinary credentials missing in .env file. Please check VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET.');
  }

  const albumId = 'album_' + Date.now();

  // 1. Upload all photos for this album to Cloudinary
  const uploadPromises = Array.from(files).map(async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('tags', `portfolio_gallery_event,${albumId}`);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || 'Failed to upload photo to Cloudinary');
    }

    const data = await response.json();
    return data.secure_url;
  });

  const photoUrls = await Promise.all(uploadPromises);

  const newAlbum = {
    id: albumId,
    title,
    category,
    date,
    location,
    description,
    coverUrl: photoUrls[0],
    photos: photoUrls,
    createdAt: new Date().toISOString()
  };

  // 2. Save locally for instant UI feedback
  saveToLocalCache(newAlbum);

  // 3. Fetch existing manifest items, prepend new album, and re-upload global manifest to Cloudinary
  try {
    const currentAlbums = await fetchGalleryAlbums();
    const updatedAlbums = [newAlbum, ...currentAlbums.filter((a) => a.id !== newAlbum.id)];

    await uploadGlobalManifest(updatedAlbums);
  } catch (err) {
    console.warn('Photo uploaded, but updating global JSON manifest failed:', err);
  }

  return newAlbum;
}

/**
 * Upload updated manifest JSON file directly to Cloudinary
 */
async function uploadGlobalManifest(albumsList) {
  const jsonBlob = new Blob([JSON.stringify(albumsList, null, 2)], { type: 'application/json' });
  const formData = new FormData();
  formData.append('file', jsonBlob, MANIFEST_PUBLIC_ID);
  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('public_id', MANIFEST_PUBLIC_ID);
  formData.append('resource_type', 'raw');

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`, {
    method: 'POST',
    body: formData
  });

  if (!res.ok) {
    console.warn('Manifest upload response status:', res.status);
  }
}

/**
 * Delete Album globally and update manifest
 */
export async function deleteAlbumFromCache(id) {
  const local = getLocalCache();
  const updatedLocal = local.filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLocal));

  try {
    const currentAlbums = await fetchGalleryAlbums();
    const updatedGlobal = currentAlbums.filter((a) => a.id !== id);
    await uploadGlobalManifest(updatedGlobal);
  } catch (e) {
    console.warn('Failed to update global manifest on deletion:', e);
  }
}

function saveToLocalCache(newAlbum) {
  const existing = getLocalCache();
  const updated = [newAlbum, ...existing.filter((a) => a.id !== newAlbum.id)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getLocalCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function getInitialSampleAlbums() {
  return [
    {
      id: 'album_sample_1',
      title: 'HackaDev National Winner 2024',
      category: 'Hackathons',
      date: '2024-03-15',
      location: 'Colombo, Sri Lanka',
      description: 'Built an AI-powered smart energy monitoring system with automated anomaly detection. Awarded 1st Runner Up among 45 participating national teams.',
      coverUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      photos: [
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80'
      ],
      createdAt: '2024-03-15T10:00:00Z'
    },
    {
      id: 'album_sample_2',
      title: 'Cloud & DevOps Masterclass Workshop',
      category: 'Organized Events',
      date: '2024-01-20',
      location: 'University of Jaffna',
      description: 'Organized and conducted a hands-on Docker, Kubernetes & CI/CD masterclass for 120+ computer science undergraduates.',
      coverUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      photos: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
      ],
      createdAt: '2024-01-20T14:30:00Z'
    }
  ];
}
