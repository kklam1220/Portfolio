
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Mail, MapPin, Briefcase, Star, BookOpen, Trophy } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import { BIO_PARAGRAPHS, WORKS_AND_AWARDS, WISHING_STONE_IMAGES, EXPERIENCE } from './constants';

// Helper to generate random string for placeholder
const generatePlaceholder = (seed: string) => {
  // Simple deterministic hash-like string generator
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0; 
  }
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let res = "";
  for(let i=0; i<10; i++) {
    res += chars[Math.abs((hash + i) % 26)];
  }
  return res;
};

function App() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative bg-background">
      <Navbar />
      <Hero />

      {/* About & Experience */}
      <Section id="about" title="About Me" subtitle="Biography & Experience" background="darker">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Bio & Profile */}
          <div className="space-y-8">
             <div className="relative aspect-[3/4] md:aspect-[16/9] lg:aspect-[3/2] bg-surface rounded-sm overflow-hidden border border-stone-800 group mb-8">
               <img 
                src="https://picsum.photos/seed/profile_kk/800/600" 
                alt="Kin Kong Lam" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="space-y-6 text-lg text-secondary leading-relaxed font-light">
              {BIO_PARAGRAPHS.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Tech & Drama overlap highlight */}
            <div className="p-6 bg-surface border border-stone-800 rounded-sm mt-6">
               <div className="flex items-center gap-3 mb-4">
                  <Code className="text-accent" />
                  <h3 className="font-serif text-xl text-primary">Bridging Tech & Art</h3>
               </div>
               <p className="text-sm text-secondary mb-4">
                 Leveraging IT expertise to build subtitle synchronization systems and enhance theatrical accessibility.
               </p>
            </div>
          </div>

          {/* Right Column: Professional Timeline */}
          <div className="relative border-l border-stone-800 pl-8 py-2 space-y-12">
             <h3 className="text-2xl font-serif text-primary mb-8 flex items-center gap-3">
               <Briefcase className="text-accent" size={24}/> 
               Professional Experience
             </h3>
             
             {EXPERIENCE.map((job, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 className="relative"
               >
                 {/* Timeline Dot */}
                 <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-surface border-2 border-accent"></div>
                 
                 <span className="text-accent text-sm font-bold tracking-widest uppercase mb-1 block">
                   {job.year}
                 </span>
                 <h4 className="text-lg font-bold text-primary mb-1 leading-tight">
                   {job.title}
                 </h4>
                 <p className="text-secondary text-sm">
                   {job.company}
                 </p>
               </motion.div>
             ))}
          </div>

        </div>
      </Section>

      {/* Featured Work: The Wishing Stone */}
      <Section id="featured" title="The Wishing Stone" subtitle="Featured Production" background="dark">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-6">
             <p className="text-xl text-secondary max-w-3xl font-light">
              Writer & Organizer. A massive community production attended by over 250 parents and children. 
              Proudly supported by the <span className="text-white">Hong Kong Arts Development Council</span> and <span className="text-white">HK Jockey Club</span>.
            </p>
            <span className="text-5xl font-serif text-stone-800 font-bold">2025</span>
          </div>
          
          {/* Specialized Grid for the 3 specific images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">
            {/* 1. Cat Puppet - Large Feature */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-sm bg-stone-900">
              <img 
                src={WISHING_STONE_IMAGES[0].src} 
                alt={WISHING_STONE_IMAGES[0].alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                onError={(e) => (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/catpuppet/800/600'}
              />
              <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm">
                Puppetry Design
              </div>
            </div>
            
            <div className="grid grid-rows-2 gap-4">
              {/* 2. Crying Girl */}
              <div className="relative group overflow-hidden rounded-sm bg-stone-900">
                 <img 
                  src={WISHING_STONE_IMAGES[1].src} 
                  alt={WISHING_STONE_IMAGES[1].alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/cryinggirl/400/300'}
                />
                 <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  Performance
                </div>
              </div>
              {/* 3. Group Photo */}
              <div className="relative group overflow-hidden rounded-sm bg-stone-900">
                 <img 
                  src={WISHING_STONE_IMAGES[2].src} 
                  alt={WISHING_STONE_IMAGES[2].alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/group/400/300'}
                />
                 <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  250+ Attendees
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Combined Works & Awards List */}
      <Section id="works-awards" title="Works, Honors, Awards & Grants" subtitle="Portfolio & Recognition" background="darker">
        <div className="max-w-5xl mx-auto">
           <div className="space-y-0.5">
              {WORKS_AND_AWARDS.map((item) => (
                <motion.div 
                  key={item.id}
                  className={`group relative border-l-2 transition-all duration-300 ${
                    item.highlight ? 'border-accent bg-accent/5' : 'border-stone-800 hover:border-stone-600'
                  }`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                   {/* Main Row */}
                   <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 cursor-pointer">
                      <div className="flex items-center gap-4 min-w-[140px]">
                        <span className={`font-mono font-bold text-sm whitespace-nowrap ${item.highlight ? 'text-accent' : 'text-stone-500 group-hover:text-primary'}`}>
                          {item.year}
                        </span>
                        {item.type === 'award' && <Trophy className="w-4 h-4 text-yellow-600" />}
                        {item.type === 'grant' && <Star className="w-4 h-4 text-accent" />}
                        {item.type === 'scholarship' && <BookOpen className="w-4 h-4 text-blue-400" />}
                      </div>
                      
                      <div className="flex-grow">
                         <h4 className={`text-lg font-bold transition-colors ${item.highlight ? 'text-white' : 'text-primary group-hover:text-white'}`}>
                           {item.title}
                         </h4>
                         {item.subtitle && (
                           <p className="text-sm text-stone-400 mt-1">{item.subtitle}</p>
                         )}
                      </div>
                      
                      {/* Category Tag */}
                      {item.category && (
                        <div className="hidden md:block text-xs uppercase tracking-widest text-stone-600 group-hover:text-stone-400">
                          {item.category}
                        </div>
                      )}
                   </div>

                   {/* Expanded Content Panel (Between Items) */}
                   <AnimatePresence>
                     {hoveredId === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "circOut" }}
                          className="overflow-hidden bg-stone-900/50"
                        >
                          <div className="px-6 pb-6 md:pl-[188px]">
                             <div className="h-px w-full bg-stone-800 mb-4"></div>
                             <div className="flex flex-col md:flex-row gap-6">
                               {/* Image if exists */}
                               {item.image && (
                                 <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-sm overflow-hidden bg-black">
                                   <img 
                                     src={item.image} 
                                     alt={item.title}
                                     className="w-full h-full object-cover"
                                     onError={(e) => (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/fallback/200/200'}
                                   />
                                 </div>
                               )}
                               
                               <div className="flex-grow">
                                 <p className="text-secondary text-sm leading-relaxed italic">
                                   {item.description || generatePlaceholder(item.id)}
                                 </p>
                               </div>
                             </div>
                          </div>
                        </motion.div>
                     )}
                   </AnimatePresence>
                </motion.div>
              ))}
           </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get In Touch" subtitle="Contact" background="dark">
        <div className="max-w-2xl mx-auto text-center">
           <p className="text-xl text-secondary mb-10 font-light">
             Interested in collaborating on a script, drama workshop, or technical theatre project?
           </p>
           
           <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <a href="mailto:contact@kinkonglam.com" className="flex items-center justify-center gap-3 px-6 py-4 bg-surface hover:bg-stone-800 border border-stone-700 rounded-sm transition-all group">
                <Mail className="text-accent group-hover:scale-110 transition-transform" />
                <span className="text-primary">contact@kinkonglam.com</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 bg-surface hover:bg-stone-800 border border-stone-700 rounded-sm transition-all group">
                <MapPin className="text-accent group-hover:scale-110 transition-transform" />
                <span className="text-primary">Calgary, AB</span>
              </a>
           </div>

           <form className="text-left space-y-4 bg-surface p-8 border border-stone-800 rounded-sm shadow-2xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-background border border-stone-700 text-primary p-3 focus:border-accent outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-background border border-stone-700 text-primary p-3 focus:border-accent outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-background border border-stone-700 text-primary p-3 focus:border-accent outline-none transition-colors"></textarea>
              </div>
              <button className="w-full bg-accent hover:bg-accentHover text-white font-bold py-3 uppercase tracking-widest transition-colors">
                Send Message
              </button>
           </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
