import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Toast from './Toast';
import { storage } from '../utils/storage';

const AuthPage = ({ mode, onNavigate, onAuth }) => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (mode === 'signup' && !formData.name) newErrors.name = 'Name is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (mode === 'login') {
      const users = storage.get('ticketapp_users') || [];
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        const token = 'token_' + Date.now();
        storage.set('ticketapp_session', { token, user: { email: user.email, name: user.name } });
        onAuth();
      } else {
        setToast({ message: 'Invalid credentials. Please try again.', type: 'error' });
      }
    } else {
      const users = storage.get('ticketapp_users') || [];
      if (users.find(u => u.email === formData.email)) {
        setToast({ message: 'Email already exists', type: 'error' });
        return;
      }
      users.push({ email: formData.email, password: formData.password, name: formData.name });
      storage.set('ticketapp_users', users);
      setToast({ message: 'Account created! Please login.', type: 'success' });
      setTimeout(() => onNavigate('login'), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-8">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      
      {/* Go Back Button */}
      <button
        onClick={() => onNavigate('landing')}
        className="fixed top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors group"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md group-hover:shadow-lg transition-all group-hover:-translate-x-1">
          <ArrowLeft size={20} />
        </div>
        <span className="hidden sm:inline">Back to Home</span>
      </button>
      
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600">
              {mode === 'login' 
                ? 'Enter your credentials to access your account' 
                : 'Sign up to get started with TicketFlow'}
            </p>
          </div>
          
          {/* Form */}
          <div className="space-y-5">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                    <span>⚠</span> {errors.name}
                  </p>
                )}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <span>⚠</span> {errors.email}
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <span>⚠</span> {errors.password}
                </p>
              )}
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </div>
          
          {/* Toggle Mode */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => onNavigate(mode === 'login' ? 'signup' : 'login')}
                className="text-blue-600 font-bold hover:text-blue-700 hover:underline transition-colors"
              >
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
        
        {/* Additional Info */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By continuing, you agree to TicketFlow's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default AuthPage;