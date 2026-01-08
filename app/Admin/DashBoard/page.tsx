'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ClaimRequest {
  _id: string;
  userId: string;
  insuranceType: string;
  riskScore: 'Low' | 'Medium' | 'High';
  severity: 'Normal' | 'Urgent' | 'Critical';
  status: 'Pending' | 'Approved' | 'Rejected';
  documentUrl: string;
}

export default function UnifiedAdminDashboard() {
  const [activeTab, setActiveTab] = useState<'Travel' | 'Health' | 'Vehicle'>('Travel');
  const [requests, setRequests] = useState<ClaimRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const adminName = "Admin User";

  // Mock data fetching logic - replace with your actual backend URL
  const fetchRequests = async (type: string) => {
    setLoading(true);
    try {
      // Example: const res = await fetch(`/api/claims?type=${type.toLowerCase()}`);
      // For now, we use a timeout to simulate a backend call
      setTimeout(() => {
        const mockData: ClaimRequest[] = [
          { 
            _id: '1', 
            userId: 'Faizan_1247P9', 
            insuranceType: `${type} Insurance`, 
            riskScore: 'Medium', 
            severity: 'Normal', 
            status: 'Pending',
            documentUrl: '#' 
          }
        ];
        setRequests(mockData);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Fetch error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchRequests(activeTab);
  }, [activeTab]);

  const handleAction = async (id: string, action: 'Approved' | 'Rejected') => {
    try {
      /* Backend Connection Example:
      const res = await fetch(`/api/claims/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: action })
      });
      */
      setRequests(prev => prev.filter(req => req._id !== id));
      alert(`Request ${action} successfully`);
    } catch (error) {
      alert("Action failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-800">
          InsureCare <span className="text-blue-400">Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {['Travel', 'Health', 'Vehicle'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type as never)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                activeTab === type ? 'bg-blue-600' : 'hover:bg-slate-800'
              }`}
            >
              <span>{type} Insurance</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center justify-center space-x-2 p-3 bg-red-600 hover:bg-red-700 rounded-lg transition font-semibold">
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">{activeTab} Requests</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">Welcome, <span className="text-blue-600">{adminName}</span></span>
          </div>
        </header>

        <div className="p-8 overflow-y-auto">
          {loading ? (
            <div className="text-center py-10 text-gray-500">Loading {activeTab} requests...</div>
          ) : (
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <table className="w-full text-left">
                <thead className="bg-gray-800 text-white text-sm uppercase">
                  <tr>
                    <th className="px-6 py-4">User ID</th>
                    <th className="px-6 py-4">Insurance Type</th>
                    <th className="px-6 py-4">Document Details</th>
                    <th className="px-6 py-4">Risk Score</th>
                    <th className="px-6 py-4">Severity</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-black">
                  {requests.length > 0 ? (
                    requests.map((req) => (
                      <tr key={req._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{req.userId}</td>
                        <td className="px-6 py-4">{req.insuranceType}</td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 underline">preview</button>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            req.riskScore === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>{req.riskScore}</span>
                        </td>
                        <td className="px-6 py-4">{req.severity}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center space-x-2">
                            <button 
                              onClick={() => handleAction(req._id, 'Approved')}
                              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold"
                            >Approve</button>
                            <button 
                              onClick={() => handleAction(req._id, 'Rejected')}
                              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold"
                            >Reject</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-10 text-center text-gray-500">No pending {activeTab} requests found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}