import React, { useState } from 'react';
import { Camera, ZoomIn, X } from 'lucide-react';
import metrics from '../data/metrics';

const categories = ["All", ...Array.from(new Set(metrics.gallery.map(item => item.category)))];

const Gallery: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredGallery = activeCategory === "All"
        ? metrics.gallery
        : metrics.gallery.filter(item => item.category === activeCategory);

    return (
        <section id="gallery" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 font-bold text-sm mb-6">
                        <Camera className="w-4 h-4" />
                        Our Impact in Pictures
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                        Visualizing Clean Energy
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Browse through our portfolio of successful installations and witness
                        firsthand the quality and scale of our solar solutions across different sectors.
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                                    ? "bg-brand-600 text-white shadow-lg shadow-brand-500/30"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {filteredGallery.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500"
                            onClick={() => setSelectedImage(item.src)}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="inline-block px-3 py-1 mb-3 rounded-full bg-brand-500/20 backdrop-blur-md border border-brand-400/30 text-brand-100 text-xs font-bold uppercase tracking-wider">
                                        {item.category}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 leading-snug">{item.title}</h3>
                                </div>

                                {/* Center Zoom Icon */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100">
                                        <ZoomIn className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 md:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-[101]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <img
                        src={selectedImage}
                        alt="Expanded view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;
