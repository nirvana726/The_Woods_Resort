import axios from "axios";
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/UserContext";
import about1 from '../assets/about/about1.jpg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/api/login`,
        {
          email,
          password,
        }
      );
      toast.success("Login successful");
      setAuth({
        ...auth,
        user: res.data?.user,
        token: res.data.token,
      });
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] flex flex-col">
      {/* Background image for resort feel */}
      <img
        src={about1}
        alt="Login Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70 -z-10"
      />
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 -z-10" />
      {/* Centered login card */}
      <div className="flex flex-1 items-center justify-center py-24">
        <div className="w-full max-w-md bg-white/90 border border-black/10 rounded-2xl shadow-2xl p-10 backdrop-blur-md mt-16">
          <div className="flex flex-col items-center mb-8">
            <img src="/logo.avif" alt="The Woods Charikot Resort Logo" className="h-16 w-16 rounded-full shadow mb-2" />
            <h2 className="text-3xl font-bold text-[var(--heading)] font-playfair mb-1">Admin Login</h2>
            <p className="text-gray-600 text-center text-base">Sign in to manage The Woods Charikot Resort</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--heading)] mb-1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition"
                placeholder="admin@example.com"
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--heading)] mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[var(--accent)] focus:ring-[var(--accent)] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Keep me signed in</span>
              </label>
              <a href="#" className="text-sm text-[var(--accent)] hover:underline">Forgot password?</a>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-[var(--heading)] font-bold py-3 rounded-lg shadow hover:bg-green-400 transition-colors text-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
