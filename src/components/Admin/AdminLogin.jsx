import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AdminLogin = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const expectedPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      if (password === expectedPassword) {
        sessionStorage.setItem('portfolio_admin_auth', 'true');
        onLoginSuccess();
      } else {
        setError('Invalid admin passkey. Access denied.');
      }
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-800/40 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        
        {/* Top return link */}
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-yellow-400 mb-6 transition-colors"
        >
          <span className="material-symbols-rounded text-sm">arrow_back</span> Return to Portfolio Home
        </a>

        {/* Lock Icon */}
        <div className="w-14 h-14 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl flex items-center justify-center mb-6 text-yellow-400">
          <span className="material-symbols-rounded text-2xl">lock</span>
        </div>

        <h1 className="headline-2 mb-2 text-3xl">Admin Portal</h1>
        <p className="text-sm text-zinc-400 mb-6">
          Enter your admin passkey to publish event photo albums to Cloudinary.
        </p>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3">
            <span className="material-symbols-rounded">error</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Admin Passkey</label>
            <div className="relative">
              <span className="material-symbols-rounded absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-lg">
                key
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="text-field pl-10"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full justify-center mt-2 disabled:opacity-50"
          >
            <span className="material-symbols-rounded">lock_open</span>
            {isSubmitting ? 'Authenticating...' : 'Unlock Admin Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

AdminLogin.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired
};

export default AdminLogin;
