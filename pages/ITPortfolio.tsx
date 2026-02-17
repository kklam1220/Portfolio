import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Database, Cloud, Terminal, Laptop, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 to-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background z-10"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          </div>
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to Main Portfolio</span>
            </Link>

            <h2 className="text-accent font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base">
              IT & Technical Portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-primary">
              Bridging Tech & Art
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto font-light">
              Leveraging IT expertise to build innovative solutions for the theatrical industry
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-4 mt-12">
              <div className="inline-flex bg-stone-800 rounded-sm p-1 border border-stone-700">
                <span className="px-6 py-2 bg-accent text-white font-semibold rounded-sm">
                  Overview
                </span>
                <Link
                  to="/it-portfolio/cv"
                  className="px-6 py-2 text-secondary hover:text-white transition-colors"
                >
                  Resume / CV
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Project: SurtitleLive */}
      <section className="py-20 px-6 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Project Image */}
            <div className="relative aspect-video rounded-sm overflow-hidden bg-stone-800 border border-stone-700">
              <img
                src="/images/surtitlelive/surtitlelive.png"
                alt="SurtitleLive"
                className="w-full h-full object-contain p-8"
              />
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/surtitlelive/surtitlelive.png"
                  alt="SurtitleLive logo"
                  className="w-12 h-12 object-contain"
                />
                <h2 className="text-4xl font-serif font-bold text-primary">SurtitleLive</h2>
              </div>

              <p className="text-lg text-secondary leading-relaxed">
                A cloud-based subtitle synchronization system designed to enhance theatrical accessibility. 
                SurtitleLive enables real-time multilingual subtitle delivery for live performances, 
                making theatre more inclusive and accessible to diverse audiences.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-accent">Key Features</h3>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Real-time subtitle synchronization for live theatre performances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Multi-language support for diverse audiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Cloud-based infrastructure for reliable delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Intuitive operator interface for seamless control</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://www.surtitlelive.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accentHover text-white font-bold rounded-sm transition-colors"
              >
                Visit SurtitleLive.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12">
              Technical Expertise
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Full-Stack Development */}
              <div className="p-6 bg-surface border border-stone-800 rounded-sm hover:border-accent transition-colors group">
                <Code className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Full-Stack Development</h3>
                <p className="text-secondary text-sm">
                  Expertise in building scalable web applications using modern frameworks and technologies
                </p>
              </div>

              {/* Cloud Infrastructure */}
              <div className="p-6 bg-surface border border-stone-800 rounded-sm hover:border-accent transition-colors group">
                <Cloud className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Cloud Infrastructure</h3>
                <p className="text-secondary text-sm">
                  Experience with cloud platforms and services for deploying reliable, secure applications
                </p>
              </div>

              {/* Database Design */}
              <div className="p-6 bg-surface border border-stone-800 rounded-sm hover:border-accent transition-colors group">
                <Database className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Database Design</h3>
                <p className="text-secondary text-sm">
                  Proficient in designing and optimizing database schemas for performance and scalability
                </p>
              </div>

              {/* Real-Time Systems */}
              <div className="p-6 bg-surface border border-stone-800 rounded-sm hover:border-accent transition-colors group">
                <Terminal className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Real-Time Systems</h3>
                <p className="text-secondary text-sm">
                  Building responsive systems with WebSocket and real-time synchronization capabilities
                </p>
              </div>

              {/* Frontend Development */}
              <div className="p-6 bg-surface border border-stone-800 rounded-sm hover:border-accent transition-colors group">
                <Laptop className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Modern Frontend</h3>
                <p className="text-secondary text-sm">
                  Creating intuitive, responsive user interfaces with React, TypeScript, and modern CSS
                </p>
              </div>

              {/* Backend Architecture */}
              <div className="p-6 bg-surface border border-stone-800 rounded-sm hover:border-accent transition-colors group">
                <Server className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">Backend Architecture</h3>
                <p className="text-secondary text-sm">
                  Designing robust backend systems with proper separation of concerns and best practices
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-stone-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Whether you need technical consultation for a theatrical production or want to discuss innovative tech solutions for the arts, I'd love to connect.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accentHover text-white font-bold rounded-sm transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-stone-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Kin Kong Lam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ITPortfolio;
