
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Mail, MapPin, Briefcase, Star, BookOpen, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import TimelineCard from './components/TimelineCard';
import { BIO_PARAGRAPHS, WORKS_AND_AWARDS, WISHING_STONE_IMAGES, EXPERIENCE, EDUCATION } from './constants';



function App() {
  const [wishingStoneIndex, setWishingStoneIndex] = useState(0);

  const nextWishingStoneImage = () => {
    setWishingStoneIndex((prev) => (prev + 1) % WISHING_STONE_IMAGES.length);
  };

  const prevWishingStoneImage = () => {
    setWishingStoneIndex((prev) => (prev - 1 + WISHING_STONE_IMAGES.length) % WISHING_STONE_IMAGES.length);
  };

  return (
    <div className="min-h-screen relative bg-background">
      <Navbar />
      <Hero />

      {/* About & Experience */}
      <Section id="about" title="About Me" subtitle="Biography & Experience" background="darker">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Bio & Profile */}
          <div className="space-y-8">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden group mb-8">
              <img
                src="/images/Me/new_pic.jpg"
                alt="Kin Kong Lam"
                className="w-full h-full object-contain transition-all duration-700"
              />
            </div>

            <div className="space-y-6 text-lg text-secondary leading-relaxed font-light">
              {BIO_PARAGRAPHS.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Tech & Drama overlap highlight */}
            <a
              href="https://www.surtitlelive.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white border border-stone-200 rounded-sm mt-6 hover:border-accent transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <img
                    src="/images/surtitlelive/surtitlelive.png"
                    alt="surtitlelive logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-900 group-hover:text-accent transition-colors">Bridging Tech & Art</h3>
                  <div className="flex items-center gap-2 text-xs text-accent uppercase tracking-widest font-bold">
                    <span>surtitlelive.com</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-stone-600">
                Leveraging IT expertise to build subtitle synchronization systems and enhance theatrical accessibility.
              </p>
            </a>

            {/* Link to IT version */}
            <a
              href="/it-portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-sm text-accent hover:text-white border border-accent hover:bg-accent rounded-sm transition-colors group"
            >
              <Code size={16} />
              <span>View IT & Technical Portfolio</span>
            </a>
          </div>

          {/* Right Column: Professional Timeline */}
          <div className="relative border-l border-stone-800 pl-8 py-2 space-y-12">
            <h3 className="text-2xl font-serif text-primary mb-8 flex items-center gap-3">
              <Briefcase className="text-accent" size={24} />
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

            <h3 className="text-2xl font-serif text-primary mb-8 flex items-center gap-3 pt-8">
              <BookOpen className="text-accent" size={24} />
              Education
            </h3>

            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={`edu-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-surface border-2 border-blue-400"></div>

                <span className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-1 block">
                  {edu.year}
                </span>
                <h4 className="text-lg font-bold text-primary mb-1 leading-tight">
                  {edu.title}
                </h4>
                <p className="text-secondary text-sm">
                  {edu.company}
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

          {/* Carousel UI */}
          <div className="relative flex items-center justify-center gap-4 md:gap-8 h-[300px] md:h-[500px]">

            {/* Left Button */}
            <button
              onClick={prevWishingStoneImage}
              className="p-2 md:p-3 rounded-full bg-stone-800 hover:bg-accent text-white transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Prev Image (Hidden on mobile) */}
            <div className="hidden md:block w-1/4 h-3/4 opacity-40 hover:opacity-60 transition-opacity cursor-pointer bg-black rounded-sm overflow-hidden" onClick={prevWishingStoneImage}>
              <img
                src={WISHING_STONE_IMAGES[(wishingStoneIndex - 1 + WISHING_STONE_IMAGES.length) % WISHING_STONE_IMAGES.length].src}
                alt="Previous"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Main Image */}
            <div className="w-full md:w-1/2 h-full relative group shadow-2xl bg-black rounded-sm overflow-hidden">
              <img
                src={WISHING_STONE_IMAGES[wishingStoneIndex].src}
                alt={WISHING_STONE_IMAGES[wishingStoneIndex].alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-sm md:text-base font-light">
                  {wishingStoneIndex + 1} / {WISHING_STONE_IMAGES.length}
                </p>
              </div>
            </div>

            {/* Next Image (Hidden on mobile) */}
            <div className="hidden md:block w-1/4 h-3/4 opacity-40 hover:opacity-60 transition-opacity cursor-pointer bg-black rounded-sm overflow-hidden" onClick={nextWishingStoneImage}>
              <img
                src={WISHING_STONE_IMAGES[(wishingStoneIndex + 1) % WISHING_STONE_IMAGES.length].src}
                alt="Next"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Button */}
            <button
              onClick={nextWishingStoneImage}
              className="p-2 md:p-3 rounded-full bg-stone-800 hover:bg-accent text-white transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

          </div>
        </div>
      </Section>

      {/* Combined Works & Awards List */}
      <Section id="works-awards" title="Works, Honors, Awards & Grants" subtitle="Portfolio & Recognition" background="darker">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-0.5">
            {WORKS_AND_AWARDS.map((item) => (
              <TimelineCard key={item.id} item={item} />
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
            <a href="mailto:hello@kklamdrama.com" className="flex items-center justify-center gap-3 px-6 py-4 bg-surface hover:bg-stone-800 border border-stone-700 rounded-sm transition-all group">
              <Mail className="text-accent group-hover:scale-110 transition-transform" />
              <span className="text-primary">hello@kklamdrama.com</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 bg-surface hover:bg-stone-800 border border-stone-700 rounded-sm transition-all group">
              <MapPin className="text-accent group-hover:scale-110 transition-transform" />
              <span className="text-primary">Calgary, AB</span>
            </a>
          </div>

          {/* FormBold Contact Form */}
          <form
            action="https://formbold.com/s/9xlNj"
            method="POST"
            className="text-left space-y-4 bg-surface p-8 border border-stone-800 rounded-sm shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-background border border-stone-700 text-primary p-3 focus:border-accent outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-background border border-stone-700 text-primary p-3 focus:border-accent outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-background border border-stone-700 text-primary p-3 focus:border-accent outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Type your message"
                className="w-full bg-background border border-stone-700 text-primary p-3 focus:border-accent outline-none transition-colors"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accentHover text-white font-bold py-3 uppercase tracking-widest transition-colors"
            >
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
