// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClaimClick = () => {
    // Navigate to claim form or handle claim action
    window.location.href = '/Claim';
  };

  const router = useRouter();

  const insuranceoptions = () => {
      router.push('/Claim');
  };
 
  const Admin = () => {
      router.push('/Admin');
  };
 

  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold tracking-wide">
              InsureCare
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-200 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-200 transition">About</Link>
              <Link href="/services" className="hover:text-blue-200 transition">Services</Link>
              <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <Link href="/" className="block py-2 hover:text-blue-200 transition">Home</Link>
              <Link href="/about" className="block py-2 hover:text-blue-200 transition">About</Link>
              <Link href="/services" className="block py-2 hover:text-blue-200 transition">Services</Link>
              <Link href="/contact" className="block py-2 hover:text-blue-200 transition">Contact</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            File Your Insurance Claim
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Quick, simple, and secure claim processing. Get your compensation faster with our streamlined digital platform.
          </p>
          <button 
            onClick={insuranceoptions}
            className="bg-white text-blue-900 px-10 py-4 rounded-lg text-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition duration-300 shadow-xl"
          >
            User Login
          </button>
          <br></br>
          <br></br>
          <button 
            onClick={Admin}
            className="bg-white text-blue-900 px-10 py-4 rounded-lg text-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition duration-300 shadow-xl"
          >
            Admin Login
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose InsureCare?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Fast Processing</h3>
              <p className="text-gray-600">Claims processed within 24-48 hours with our advanced digital system.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Secure & Safe</h3>
              <p className="text-gray-600">Bank-level encryption to protect your personal and financial information.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to help you through every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to File Your Claim?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust InsureCare for their insurance needs.
          </p>
          <button 
            onClick={handleClaimClick}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 InsureCare. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition">Terms of Service</Link>
            <Link href="/faq" className="hover:text-blue-400 transition">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}