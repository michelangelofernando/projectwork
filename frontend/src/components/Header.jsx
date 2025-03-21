import React, { useState } from 'react';
import '../styles/style.css';
import { Login } from './Login';
import { Register } from './Register';
import { Contatti } from './Contatti';

export const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContatti, setShowContatti] = useState(false);

  return (
    <>
      <header className="bg-gray-100 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 ms-50">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <img src="/assets/react.svg" alt="logo" className="w-10 h-10" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 font-medium text-gray-700 ms-6">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">Shop</a>
            <a href="#" className="hover:text-black " onClick={() => setShowContatti(true)}>Contatti</a>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex flex-shrink-0 space-x-2">
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Login
            </button>
            <button
              onClick={() => setShowRegister(true)}
              className="px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
            >
              Register
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-100 px-6 py-4 space-y-2 text-gray-700 font-medium">
            <a href="#" className="block hover:text-black">Home</a>
            <a href="#" className="block hover:text-black">Shop</a>
            <a href="#" className="block hover:text-black">Contatti</a>
            <div className="pt-4 space-y-2">
              <button
                onClick={() => {
                  setShowLogin(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowRegister(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modale Login */}
      {showLogin && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div>
            <Login />
            <div className="text-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowLogin(false)}>
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modale Register */}
      {showRegister && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div>
            <Register />
            <div className="text-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowRegister(false)}>
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modale Contatti */}
      {showContatti && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div>
            <Contatti />
            <div className="text-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowContatti(false)}>
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
