import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import ContactForm from './components/ContactForm';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundAnimation />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <nav className="absolute top-0 w-full flex justify-between items-center p-6">
          <div className="flex items-center">
            <img 
              src="logo.png" 
              alt="Opp Studio" 
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            />
          </div>
        </nav>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6 text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
            Independent record label &<br />distributor.
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 opacity-90 max-w-2xl mx-auto mb-8">
            Opp Studio uncovers hidden potential in music, turning legal challenges into opportunities for both artists and brands. Join our team of 10+ talented artists today!
          </p>

          <div className="mb-4 inline-block px-4 py-1.5 bg-gray-800 bg-opacity-50 rounded-full text-gray-200 text-sm">
            Established 2024 · London
          </div>

          <div>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="group relative inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-20 duration-300 transform -skew-x-12 group-hover:skew-x-12 transition-all"></span>
              <Mail className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium relative z-10">Contact Us</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 text-gray-400 text-sm">
          © 2024 Opp Studio LLC.
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  );
}

export default App;