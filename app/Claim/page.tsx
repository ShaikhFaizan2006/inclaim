// app/claim/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type InsuranceType = 'health' | 'vehicle' | 'travel' | null;

export default function ClaimPage() {
  const [selectedType, setSelectedType] = useState<InsuranceType>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (selectedType) {
      router.push(`/Claim/${selectedType}`);
    }
  };

  const insuranceOptions = [
    {
      id: 'health' as InsuranceType,
      title: 'Health Insurance',
      description: 'File claims for medical expenses, hospitalization, and healthcare services',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      hoverColor: 'hover:border-red-600',
    },
    {
      id: 'vehicle' as InsuranceType,
      title: 'Vehicle Insurance',
      description: 'Submit claims for accidents, damages, theft, or vehicle-related incidents',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      hoverColor: 'hover:border-blue-600',
    },
    {
      id: 'travel' as InsuranceType,
      title: 'Travel Insurance',
      description: 'File claims for trip cancellations, lost baggage, or travel emergencies',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      hoverColor: 'hover:border-green-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold tracking-wide hover:text-blue-200 transition">
              InsureCare
            </Link>
            <Link href="/" className="hover:text-blue-200 transition">
              ← Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Select Insurance Type
          </h1>
          <p className="text-xl text-gray-600">
            Choose the type of insurance claim you would like to file
          </p>
        </div>

        {/* Insurance Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {insuranceOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedType(option.id)}
              className={`
                relative p-8 rounded-xl border-4 transition-all duration-300 transform hover:scale-105
                ${selectedType === option.id 
                  ? `${option.borderColor} shadow-2xl scale-105` 
                  : `border-gray-200 ${option.hoverColor} hover:shadow-xl`
                }
                ${option.bgColor} text-left
              `}
            >
              {/* Selection Indicator */}
              {selectedType === option.id && (
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-full p-1">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${option.color} text-white mb-4`}>
                {option.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {option.description}
              </p>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedType}
            className={`
              px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform
              ${selectedType
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:scale-105 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            Continue to Claim Form →
          </button>

          {!selectedType && (
            <p className="text-gray-500 mt-4 text-sm">
              Please select an insurance type to continue
            </p>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">📞 Call Us</h3>
              <p>1-800-INSURE-CARE</p>
              <p className="text-sm">(24/7 Support Available)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">💬 Live Chat</h3>
              <p>Chat with our support team</p>
              <p className="text-sm">Average response time: 2 minutes</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 InsureCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}