import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Lock, Mail, AlertCircle, Eye, EyeOff} from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  /*
  const handleLogin = async () => {
    const user = await apiService.login(email);
    if (user) {
      login(user);
    }
  };
  */
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/');
      } else {
        setError('Invalid credentials. Try "admin@mmumullana.org"');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
/*
  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-mmdu-red px-8 py-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <GraduationCap className="text-mmdu-red w-10 h-10" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">MM(DU)</h2>
          <p className="text-red-100 font-medium">Placement Record Management System</p>
        </div>

        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Secure Login</h3>

          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 flex items-center gap-3">
              <AlertCircle className="text-red-500 w-5 h-5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                  placeholder="username@mmumullana.org"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium shadow-lg transition-all
                ${isSubmitting
                  ? 'bg-red-400 cursor-not-allowed'
                  : 'bg-mmdu-red hover:bg-mmdu-dark hover:shadow-xl active:transform active:scale-95'
                }`}
            >
              {isSubmitting ? 'Authenticating...' : 'Access Dashboard'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Need access? Contact <a href="#" className="text-mmdu-red font-medium hover:underline">TNP Administrator</a>
          </div>
        </div>
      </div>
    </div>
  );
};
*/
  return (
    <div className="relative min-h-screen flex items-center justify-center">

      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/mmdu-college.jpg')",
        }}
      ></div>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* 🔹 Login Card */}
      <div className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-mmdu-red px-8 py-8 text-center">

          <div className="flex justify-center mb-4">
            <img
              src="/mmdu-logo.png"
              // src="/mmdu-logo-black.png"
              // src="/mmdu-logo-white.png"
              // src="/mmdu-logo-red-white.png"
              alt="MMDU Logo"
              // Add Shadow
              // className="w-30 h-20 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              className="w-30 h-20 object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h2 className="text-2xl font-bold text-white">MM(DU)</h2>
          <p className="text-red-100 text-sm">
            Placement Record Management System
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Secure Login
          </h3>

          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 flex items-center gap-3">
              <AlertCircle className="text-red-500 w-5 h-5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                  placeholder="username@mmumullana.org"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              {/*}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
              */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                  placeholder="••••••••"
                />

                {/* 👁 Eye Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-mmdu-red transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium shadow-lg transition-all
              ${isSubmitting
                  ? 'bg-red-400 cursor-not-allowed'
                  : 'bg-mmdu-red hover:bg-mmdu-dark hover:shadow-xl active:scale-95'
                }`}
            >
              {isSubmitting ? 'Authenticating...' : 'Access Dashboard'}
            </button>

          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Need access?{" "}
            <span className="text-mmdu-red font-medium hover:underline cursor-pointer">
              Contact TNP Administrator
            </span>
          </div>
        </div>

      </div>
    </div>
  );

{/*
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/campus-video.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* 🔐 Login Card */}
      <div className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/30">

        {/* 🔴 Header */}
        <div className="bg-mmdu-red px-8 py-8 text-center relative">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="/logo-mmdu.svg"
              alt="MMDU Logo"
              className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            />
          </div>

          {/* Glowing Title */}
          <h2 className="text-2xl font-bold text-white animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
            MM(DU)
          </h2>

          <p className="text-red-100 text-sm tracking-wide">
            Placement Record Management System
          </p>
        </div>

        {/* 📝 Form Section */}
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Secure Login
          </h3>

          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 flex items-center gap-3 rounded-lg">
              <AlertCircle className="text-red-500 w-5 h-5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none bg-white/80"
                  placeholder="username@mmumullana.org"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none bg-white/80"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium shadow-lg transition-all duration-300
            ${isSubmitting
                  ? 'bg-red-400 cursor-not-allowed'
                  : 'bg-mmdu-red hover:bg-mmdu-dark hover:shadow-2xl hover:scale-[1.02] active:scale-95'
                }`}
            >
              {isSubmitting ? 'Authenticating...' : 'Access Dashboard'}
            </button>

          </form>

          <div className="mt-6 text-center text-sm text-gray-200 bg-black/30 py-2 rounded-lg backdrop-blur-md">
            Need access?{" "}
            <span className="text-white font-medium hover:underline cursor-pointer">
              Contact TNP Administrator
            </span>
          </div>
        </div>

      </div>

      {/* 🌫 Footer Blur Strip */}
      <div className="absolute bottom-0 w-full py-3 text-center text-xs text-gray-300 bg-black/50 backdrop-blur-md">
        © 2026 MM(DU) Placement Portal | All Rights Reserved
      </div>

    // </div>
  // );
};