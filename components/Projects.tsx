import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import metrics from '../data/metrics';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-100 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Featured Installations</h2>
            <p className="text-slate-500 text-lg">Witness the transition to clean energy across homes and industries.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors group">
            View All Projects 
            <span className="bg-brand-50 p-2 rounded-full group-hover:bg-brand-100 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[400px]">
          {metrics.projects.map((project, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-3xl cursor-pointer ${project.cols}`}>
              {project.image.endsWith('.mp4') ? (
                 <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 >
                    <source src={project.image} type="video/mp4" />
                 </video>
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-brand-300 text-sm font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 font-medium">{project.type}</p>
                
                <div className="h-0 group-hover:h-8 transition-all duration-500 overflow-hidden">
                   <p className="text-white/60 text-sm pt-4">Click to view case study &rarr;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;