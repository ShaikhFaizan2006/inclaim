'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HealthClaimForm {
  company: string;
  policyNo: string;
  patientName: string;
  hospitalId: string;
  hospitalName: string;
  admissionDate: string;
  dischargeDate: string;
  ailment: string;
  claimAmount: string;
  userStory: string;
  medicalBill: File | null;
  medicalReport: File | null;
}

export default function HealthClaimPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<HealthClaimForm>({
    company: '',
    policyNo: '',
    patientName: '',
    hospitalId: '',
    hospitalName: '',
    admissionDate: '',
    dischargeDate: '',
    ailment: '',
    claimAmount: '',
    userStory: '',
    medicalBill: null,
    medicalReport: null,
  });

  const companies = [
    'Star Health',
    'HDFC ERGO',
    'Care Health',
    'Niva Bupa',
    'ICICI Lombard',
    'Tata AIG',
    'Bajaj Allianz',
    'United India Insurance',
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
    console.log('Health Claim submitted:', formData);
    alert('Health Claim submitted successfully!');
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Health Insurance Claim
          </h1>
          <p className="text-gray-600">
            Please provide treatment and hospital details to process your claim
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Patient Name */}
          <div className="mb-6">
            <label htmlFor="patientName" className="block text-gray-700 font-semibold mb-2">Patient Name</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Hospital ID */}
          <div className="mb-6">
            <label htmlFor="hospitalId" className="block text-gray-700 font-semibold mb-2">Hospital ID</label>
            <input
              type="text"
              id="hospitalId"
              name="hospitalId"
              value={formData.hospitalId}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Hospital Name */}
          <div className="mb-6">
            <label htmlFor="hospitalName" className="block text-gray-700 font-semibold mb-2">Hospital Name</label>
            <input
              type="text"
              id="hospitalName"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Dates Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="admissionDate" className="block text-gray-700 font-semibold mb-2">Admission Date</label>
              <input
                type="date"
                id="admissionDate"
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
              />
            </div>
            <div>
              <label htmlFor="dischargeDate" className="block text-gray-700 font-semibold mb-2">Discharge Date</label>
              <input
                type="date"
                id="dischargeDate"
                name="dischargeDate"
                value={formData.dischargeDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
              />
            </div>
          </div>

          {/* Ailment */}
          <div className="mb-6">
            <label htmlFor="ailment" className="block text-gray-700 font-semibold mb-2">Ailment</label>
            <input
              type="text"
              id="ailment"
              name="ailment"
              value={formData.ailment}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
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
              placeholder="Enter amount in ₹"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* User Story */}
          <div className="mb-6">
            <label htmlFor="userStory" className="block text-gray-700 font-semibold mb-2">User Story</label>
            <textarea
              id="userStory"
              name="userStory"
              value={formData.userStory}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            />
          </div>

          {/* Medical Bill Upload */}
          <div className="mb-6">
            <label htmlFor="medicalBill" className="block text-gray-700 font-semibold mb-2">Medical Bill (Image/PDF)</label>
            <input
              type="file"
              id="medicalBill"
              name="medicalBill"
              onChange={handleFileChange}
              accept="image/*,.pdf"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Medical Report Upload */}
          <div className="mb-8">
            <label htmlFor="medicalReport" className="block text-gray-700 font-semibold mb-2">Medical Report (Image/PDF)</label>
            <input
              type="file"
              id="medicalReport"
              name="medicalReport"
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
            <li>• Original Hospital Discharge Summary</li>
            <li>• Itemized Medical Bills and Receipts</li>
            <li>• Diagnostic Reports (X-Ray, Blood tests, etc.)</li>
            <li>• Prescriptions and Pharmacy Bills</li>
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