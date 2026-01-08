'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface TravelClaimForm {
  company: string;
  policyNo: string;
  travelType: string;
  incidentDate: string;
  returnDate: string;
  claimAmount: string;
  incidentDescription: string;
  travelTicket: File | null;
  passportCopy: File | null;
  boardingPass: File | null;
}

export default function TravelClaimPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<TravelClaimForm>({
    company: '',
    policyNo: '',
    travelType: '',
    incidentDate: '',
    returnDate: '',
    claimAmount: '',
    incidentDescription: '',
    travelTicket: null,
    passportCopy: null,
    boardingPass: null,
  });

  const companies = [
    'Tata AIG',
    'Digit Insurance',
    'HDFC ERGO',
    'Reliance General',
    'ICICI Lombard',
    'Bajaj Allianz',
  ];

  const travelTypes = [
    'Domestic (Within Country)',
    'International (Overseas)',
    'Flight Delay / Cancellation',
    'Loss of Baggage / Personal Effects',
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Travel Claim submitted:', formData);
    alert('Travel Claim submitted successfully!');
    router.push('/claim/success');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold tracking-wide hover:text-blue-200 transition">
              InsureCare
            </Link>
            <Link href="/Claim" className="hover:text-blue-200 transition">
              ← Back to Selection
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-4">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Travel Insurance Claim
          </h1>
          <p className="text-gray-600">
            Provide details of your trip and the incident to initiate your claim
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8" >
          {/* Company */}
          <div className="mb-6">
            <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">Company</label>
            <select
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            >
              <option value="">Select Insurance Company</option>
              {companies.map((company) => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>
          </div>

          {/* Policy No */}
          <div className="mb-6">
            <label htmlFor="policyNo" className="block text-gray-700 font-semibold mb-2">Policy No.</label>
            <input
              type="text"
              id="policyNo"
              name="policyNo"
              value={formData.policyNo}
              onChange={handleInputChange}
              required
              placeholder="e.g. TRV-12345678"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Travel Type */}
          <div className="mb-6">
            <label htmlFor="travelType" className="block text-gray-700 font-semibold mb-2">Travel Type</label>
            <select
              id="travelType"
              name="travelType"
              value={formData.travelType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            >
              <option value="">Select Travel Category</option>
              {travelTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Date Range Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="incidentDate" className="block text-gray-700 font-semibold mb-2">Incident Date</label>
              <input
                type="date"
                id="incidentDate"
                name="incidentDate"
                value={formData.incidentDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
              />
            </div>
            <div>
              <label htmlFor="returnDate" className="block text-gray-700 font-semibold mb-2">Scheduled Return Date</label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
              />
            </div>
          </div>

          {/* Claim Amount */}
          <div className="mb-6">
            <label htmlFor="claimAmount" className="block text-gray-700 font-semibold mb-2">Claim Amount</label>
            <input
              type="number"
              id="claimAmount"
              name="claimAmount"
              value={formData.claimAmount}
              onChange={handleInputChange}
              required
              placeholder="Enter amount in ₹ or $"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Incident Description (User Story) */}
          <div className="mb-6">
            <label htmlFor="incidentDescription" className="block text-gray-700 font-semibold mb-2">
              Incident Description (User Story)
            </label>
            <textarea
              id="incidentDescription"
              name="incidentDescription"
              value={formData.incidentDescription}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="E.g., Lost Samsonite suitcase, Black hard-shell, Large size, with a red ribbon on the handle..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Uploads: Travel Ticket (Mandatory for all) */}
          <div className="mb-6">
            <label htmlFor="travelTicket" className="block text-gray-700 font-semibold mb-2">Travel Ticket (Image/PDF)</label>
            <input
              type="file"
              id="travelTicket"
              name="travelTicket"
              onChange={handleFileChange}
              accept="image/*,.pdf"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Conditional Uploads based on Travel Type */}
          {formData.travelType.includes('International') && (
            <div className="mb-6">
              <label htmlFor="passportCopy" className="block text-gray-700 font-semibold mb-2">Passport Copy (Stamps/Visa)</label>
              <input
                type="file"
                id="passportCopy"
                name="passportCopy"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          )}

          <div className="mb-8">
            <label htmlFor="boardingPass" className="block text-gray-700 font-semibold mb-2">Boarding Pass / Baggage Tag</label>
            <input
              type="file"
              id="boardingPass"
              name="boardingPass"
              onChange={handleFileChange}
              accept="image/*,.pdf"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105 shadow-lg"
            >
              Submit Claim
            </button>
            <Link
              href="/claim"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </Link>
          </div>
        </form>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">📋 Required Documents</h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Travel tickets and boarding passes</li>
            <li>• Property Irregularity Report (PIR) for baggage loss</li>
            <li>• Cancellation proof from Airline (if applicable)</li>
            <li>• Passport copies with entry/exit stamps (for International)</li>
          </ul>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 InsureCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}