import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold">Amusan Kayode Silvanus</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2025 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
