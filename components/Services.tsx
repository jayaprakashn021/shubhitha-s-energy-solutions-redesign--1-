import React from 'react';
import { Sun, Home, Factory, Wrench, Battery, Lightbulb, ArrowUpRight } from 'lucide-react';
import metrics from '../data/metrics';

// Map icon keys from JSON to React Components
const iconMap: { [key: string]: React.ReactNode } = {
  home: <Home className="w-6 h-6" />,
  factory: <Factory className="w-6 h-6" />,
  sun: <Sun className="w-6 h-6" />,
  lightbulb: <Lightbulb className="w-6 h-6" />,
  wrench: <Wrench className="w-6 h-6" />,
  battery: <Battery className="w-6 h-6" />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#268a5b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-bold tracking-wider text-xs uppercase bg-brand-50 px-3 py-1 rounded-full border border-brand-100">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4 leading-tight">
              Comprehensive <br/> Energy Solutions
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-lg leading-relaxed">
            From small residential setups to mega-watt industrial plants, we provide end-to-end solar energy services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Dynamic Gradient Background from string class */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color.replace('bg-', 'from-').replace('500', '50')} to-transparent rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 ${service.color.replace('bg-', 'text-')} bg-white border border-slate-100 shadow-lg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {iconMap[service.iconKey] || <Sun className="w-6 h-6" />}
                </div>
                
                <h3 className="text-2xl font-bold font-display text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors cursor-pointer">
                  Learn More 
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;