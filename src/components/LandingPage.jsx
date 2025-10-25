import { Ticket, BarChart3, CheckCircle } from "lucide-react";

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
              TicketFlow
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Streamline your support workflow with powerful ticket management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => onNavigate("login")}
                className="min-w-[160px] bg-white text-blue-600 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Login
              </button>
              <button
                onClick={() => onNavigate("signup")}
                className="min-w-[160px] bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-blue-400"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-56 h-56 bg-purple-400 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-300 opacity-10 rounded-full blur-xl"></div>
        
        {/* Additional Circular Clip Art */}
        <div className="absolute top-32 left-1/4 w-24 h-24">
          <div className="w-full h-full rounded-full border-4 border-white opacity-20 animate-spin-slow"></div>
        </div>
        <div className="absolute bottom-24 right-1/3 w-16 h-16">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-20 animate-bounce"></div>
        </div>
        <div className="absolute top-40 right-1/2 w-12 h-12">
          <div className="w-full h-full rounded-full border-2 border-dashed border-white opacity-30 animate-spin"></div>
        </div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 animate-float"></div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Ticket className="text-white w-8 h-8" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Easy Ticket Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create, track, and resolve tickets with an intuitive interface designed for efficiency.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BarChart3 className="text-white w-8 h-8" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Real-time Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor ticket status and team performance at a glance with powerful insights.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="text-white w-8 h-8" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Streamlined Workflow
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Boost productivity with automated notifications and seamless updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 TicketFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;