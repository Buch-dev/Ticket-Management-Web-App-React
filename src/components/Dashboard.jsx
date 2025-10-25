import React from 'react';
import { LogOut, ArrowLeft } from 'lucide-react';
import { storage } from '../utils/storage';

const Dashboard = ({ onNavigate, onLogout, user }) => {
  const tickets = storage.get('ticketapp_tickets') || [];
  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in_progress').length,
    closed: tickets.filter(t => t.status === 'closed').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-all">
                <ArrowLeft size={20} />
              </div>
            </button>
            <h1 className="text-2xl font-bold text-blue-600">TicketFlow</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user.name}</span>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600 text-sm mb-2">Total Tickets</h3>
            <p className="text-4xl font-bold text-blue-600">{stats.total}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600 text-sm mb-2">Open</h3>
            <p className="text-4xl font-bold text-green-600">{stats.open}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600 text-sm mb-2">In Progress</h3>
            <p className="text-4xl font-bold text-amber-600">{stats.inProgress}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600 text-sm mb-2">Closed</h3>
            <p className="text-4xl font-bold text-gray-600">{stats.closed}</p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('tickets')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Manage Tickets
        </button>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 TicketFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;