import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 py-16 border-t border-white/[0.04] relative z-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-electric-300 transition-colors flex items-center gap-2">
                <div className="w-2 h-2 bg-electric-500 rounded-sm"></div>
                glidescale
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-1 text-xs text-gray-600 font-medium">
            <span>© {new Date().getFullYear()} GlideScale AI Inc.</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Privacy & Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};