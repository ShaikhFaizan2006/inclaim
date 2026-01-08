// app/claim/vehicle/page.tsx
'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface VehicleClaimForm {
  company: string;
  policyNo: string;
  vehicleType: string;
  incidentDate: string;
  driverName: string;
  driverLicenseNo: string;
  vehicleNumber: string;
  claimAmount: string;
  incidentDescription: string;
  images: File[];
}

export default function VehicleClaimPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<VehicleClaimForm>({
    company: '',
    policyNo: '',
    vehicleType: '',
    incidentDate: '',
    driverName: '',
    driverLicenseNo: '',
    vehicleNumber: '',
    claimAmount: '',
    incidentDescription: '',
    images: [],
  });

  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const companies = [
    'Tata AIG',
    'ICICI Lombard',
    'HDFC ERGO',
    'Bajaj Allianz',
    'Reliance General Insurance',
    'National Insurance',
    'New India Assurance',
    'United India Insurance',
  ];

  const vehicleTypes = [
    '4-Wheeler (Car/Jeep)',
    '2-Wheeler (Bike/Scooter)',
    'Commercial Vehicle',
    'Heavy Vehicle',
    'Auto Rickshaw',
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
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData((prev) => ({
        ...prev,
        images: filesArray,
      }));
      setSelectedFiles(filesArray.map((file) => file.name));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Claim submitted successfully!');
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Vehicle Insurance Claim
          </h1>
          <p className="text-gray-600">
            Please fill in all the required information to process your claim
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8" >
          {/* Company */}
          <div className="mb-6">
            <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
              Company
            </label>
        <select
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
        > 
        <option value="">Select Company</option>
            {companies.map((company) => (
            <option key={company} value={company} className="text-black">
            {company}
            </option>
            ))}
        </select>
          </div>

          {/* Policy No. */}
          <div className="mb-6">
            <label htmlFor="policyNo" className="block text-gray-700 font-semibold mb-2">
              Policy No.
            </label>
           <input
          type="text"
          id="policyNo"
          name="policyNo"
          value={formData.policyNo}
          onChange={handleInputChange}
          required
          placeholder="Enter policy number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
          />
          </div>

          {/* Vehicle Type */}
          <div className="mb-6">
            <label htmlFor="vehicleType" className="block text-gray-700 font-semibold mb-2">
              Vehicle Type
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            >
              <option value="">Select Vehicle Type</option>
              {vehicleTypes.map((type) => (
                <option key={type} value={type} className='text-black'>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Incident Date */}
          <div className="mb-6">
            <label htmlFor="incidentDate" className="block text-gray-700 font-semibold mb-2">
              Incident Date
            </label>
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

          {/* Driver Name */}
          <div className="mb-6">
            <label htmlFor="driverName" className="block text-gray-700 font-semibold mb-2">
              Driver Name
            </label>
            <input
              type="text"
              id="driverName"
              name="driverName"
              value={formData.driverName}
              onChange={handleInputChange}
              required
              placeholder="Enter driver name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Driver License No. */}
          <div className="mb-6">
            <label htmlFor="driverLicenseNo" className="block text-gray-700 font-semibold mb-2">
              Driver License No.
            </label>
            <input
              type="text"
              id="driverLicenseNo"
              name="driverLicenseNo"
              value={formData.driverLicenseNo}
              onChange={handleInputChange}
              required
              placeholder="Enter driver license number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Vehicle Number */}
          <div className="mb-6">
            <label htmlFor="vehicleNumber" className="block text-gray-700 font-semibold mb-2">
              Vehicle Number
            </label>
            <input
              type="text"
              id="vehicleNumber"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleInputChange}
              required
              placeholder="Enter vehicle registration number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Claim Amount */}
          <div className="mb-6">
            <label htmlFor="claimAmount" className="block text-gray-700 font-semibold mb-2">
              Claim Amount
            </label>
            <input
              type="number"
              id="claimAmount"
              name="claimAmount"
              value={formData.claimAmount}
              onChange={handleInputChange}
              required
              placeholder="Enter claim amount in ₹"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Incident Description */}
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
              rows={6}
              placeholder="Please describe the incident in detail..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black" 
            />
          </div>

          {/* Images Upload */}
          <div className="mb-8">
            <label htmlFor="images" className="block text-gray-700 font-semibold mb-2">
              Images (Damage/Accident Photos)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleFileChange}
              multiple
              accept="image/*,.pdf"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {selectedFiles.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-gray-600 mb-1">Selected files: {selectedFiles.length}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {selectedFiles.map((fileName, index) => (
                    <li key={index} className="truncate">• {fileName}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Submit Button */}
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
            <li>• Clear photos of vehicle damage</li>
            <li>• Copy of FIR (if applicable)</li>
            <li>• Driver license copy</li>
            <li>• Vehicle registration certificate</li>
          </ul>
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