import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, BookOpen } from 'lucide-react';
import { TimelineEntry } from '../types';

interface TimelineCardProps {
    item: TimelineEntry;
}

// Helper to generate random string for placeholder
const generatePlaceholder = (seed: string) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = (hash << 5) - hash + seed.charCodeAt(i);
        hash |= 0;
    }
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for (let i = 0; i < 10; i++) {
        res += chars[Math.abs((hash + i) % 26)];
    }
    return res;
};

const TimelineCard: React.FC<TimelineCardProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const images = item.images || [];
    const hasMultipleImages = images.length > 1;

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hasMultipleImages) {
            setImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    return (
        <motion.div
            className={`group relative border-l-2 transition-all duration-300 ${item.highlight ? 'border-accent bg-accent/5' : 'border-stone-800 hover:border-stone-600'
                }`}
            onClick={() => setIsOpen(!isOpen)}
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
                {isOpen && (
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
                                {images.length > 0 && (
                                    <div className="relative w-full md:w-48 h-72 flex-shrink-0 rounded-sm bg-black group/image z-0 hover:z-20">
                                        <img
                                            src={images[imageIndex]}
                                            alt={item.title}
                                            onClick={handleNextImage}
                                            className={`w-full h-full object-contain transform transition-transform duration-500 ${hasMultipleImages ? 'cursor-pointer' : ''} group-hover/image:scale-150`}
                                            onError={(e) => (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/fallback/200/200'}
                                        />

                                        {/* Indicators */}
                                        {hasMultipleImages && (
                                            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
                                                {images.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-1.5 h-1.5 rounded-full shadow-sm ${idx === imageIndex ? 'bg-white scale-125' : 'bg-white/40'}`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="flex-grow">
                                    <p className="text-secondary text-sm leading-relaxed whitespace-pre-wrap">
                                        {item.description || generatePlaceholder(item.id)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default TimelineCard;
