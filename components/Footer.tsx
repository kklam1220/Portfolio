import React from 'react';

const Footer: React.FC = () => {
  // Get current date and time
  const lastUpdated = new Date().toLocaleString('zh-HK', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="mb-4 font-serif text-xl text-slate-300">Kin Kong Lam</p>
        <div className="flex justify-center space-x-6 mb-8 text-sm">
           <a href="#about" className="hover:text-accent transition-colors">About</a>
           <a href="#writing" className="hover:text-accent transition-colors">Writing</a>
           <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
        <p className="text-xs opacity-50 mb-2">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
        <p className="text-xs opacity-50">
          Last Updated: {lastUpdated}
        </p>
      </div>
    </footer>
  );
};

export default Footer;