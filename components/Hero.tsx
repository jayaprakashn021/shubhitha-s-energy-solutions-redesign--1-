import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, BatteryCharging, Leaf, TrendingUp, IndianRupee, Sun, Thermometer } from 'lucide-react';
import metrics from '../data/metrics';

const Hero: React.FC = () => {
  const [temp, setTemp] = useState<string>('30°C');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Warangal coordinates: 17.9689° N, 79.5941° E
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=17.9689&longitude=79.5941&current=temperature_2m');
        const data = await response.json();
        if (data?.current?.temperature_2m) {
           setTemp(`${Math.round(data.current.temperature_2m)}${data.current_units?.temperature_2m || '°C'}`);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://shubhithasenergysolutions.com/assets/videos/125%20kW%20Grid%20Connected%20Rooftop%20Solar%20PV%20Power%20Plant.mp4" type="video/mp4" />
        </video>
        
        {/* Complex Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-md animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse box-shadow-glow"></span>
              The Future of Energy is Here
            </div>
            
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-100">
              {metrics.hero.titleLine1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-accent-300 to-white">
                {metrics.hero.titleLine2}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200">
              {metrics.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
              <a href="#calculator" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-brand-900/20 hover:shadow-brand-500/30 hover:-translate-y-1 flex items-center justify-center gap-3 group">
                Calculate Savings
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold text-lg transition-all hover:-translate-y-1 flex items-center justify-center">
                View Gallery
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-500">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-white">{metrics.hero.installations}</span>
                <span className="text-sm text-slate-400 uppercase tracking-wider">Installations</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-white">{metrics.hero.warrantyYears}<span className="text-brand-400 text-lg align-top">yrs</span></span>
                <span className="text-sm text-slate-400 uppercase tracking-wider">Warranty</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-white">{metrics.hero.emiRate}</span>
                <span className="text-sm text-slate-400 uppercase tracking-wider">EMI Available</span>
              </div>
            </div>
          </div>

          {/* Abstract Floating UI Elements (Decorative) */}
          <div className="hidden lg:block relative h-[650px] w-full animate-in fade-in duration-1000 delay-700 pointer-events-none select-none">
             
             {/* Badge 1: Daily Production (Top Right) */}
             <div className="absolute top-[15%] right-0 w-72 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl animate-float" style={{animationDelay: '0s'}}>
                <div className="flex items-center gap-4 mb-3">
                   <div className="p-2 bg-accent-400/20 rounded-lg">
                      <Zap className="w-6 h-6 text-accent-300" />
                   </div>
                   <div>
                      <div className="text-xs text-slate-300">Daily Production</div>
                      <div className="text-xl font-bold text-white">{metrics.hero.floatingBadges.dailyProduction}</div>
                   </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                   <div className="bg-accent-400 h-1.5 rounded-full" style={{width: '78%'}}></div>
                </div>
             </div>

             {/* Badge 2: Battery Status (Top Left - Offset) */}
             <div className="absolute top-[25%] left-10 w-auto bg-slate-900/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-float" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <BatteryCharging className="w-8 h-8 text-blue-400" />
                    <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Storage</span>
                    <span className="text-lg font-bold text-white">{metrics.hero.floatingBadges.batteryLevel} Charged</span>
                  </div>
                </div>
             </div>

             {/* Badge 3: Grid Export (Middle Right) */}
             <div className="absolute top-[55%] -right-4 bg-brand-500/90 backdrop-blur-md border border-white/20 pl-4 pr-6 py-3 rounded-l-full flex items-center gap-3 shadow-xl animate-float" style={{animationDelay: '3s'}}>
                 <div className="bg-white/20 p-1.5 rounded-full">
                    <TrendingUp className="w-4 h-4 text-white" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] text-brand-50 uppercase font-bold tracking-wider">Selling to Grid</span>
                    <span className="text-white font-bold leading-none">{metrics.hero.floatingBadges.gridExport}</span>
                 </div>
             </div>

             {/* Badge 4: System Health (Bottom Left) */}
             <div className="absolute bottom-[20%] left-0 w-64 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-3 mb-2">
                   <ShieldCheck className="w-5 h-5 text-brand-400" />
                   <div className="text-sm font-semibold text-white">System Healthy</div>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                   Real-time monitoring active. Efficiency at {metrics.hero.floatingBadges.systemHealthEfficiency}.
                </div>
             </div>

             {/* Badge 5: Enviro Impact (Bottom Right) */}
             <div className="absolute bottom-[10%] right-12 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-float" style={{animationDelay: '4s'}}>
                <div className="bg-green-500/20 p-3 rounded-xl">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-white">{metrics.hero.floatingBadges.treesPlanted}</div>
                  <div className="text-xs text-slate-300">Trees Planted</div>
                </div>
             </div>

             {/* Badge 6: Lifetime Savings (Middle Left) */}
             <div className="absolute top-[52%] left-0 bg-emerald-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-float flex items-center gap-3" style={{animationDelay: '2.5s'}}>
                <div className="bg-emerald-500/20 p-2.5 rounded-xl">
                   <IndianRupee className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                   <div className="text-xs text-emerald-200/80 uppercase tracking-wider font-bold">Lifetime Savings</div>
                   <div className="text-lg font-bold text-white">{metrics.hero.floatingBadges.lifetimeSavings}</div>
                </div>
             </div>

             {/* Badge 7: Solar Efficiency (Top Center) */}
             <div className="absolute top-[5%] left-[35%] bg-amber-500/10 backdrop-blur-md border border-amber-500/20 py-2 px-4 rounded-full shadow-lg animate-float flex items-center gap-2" style={{animationDelay: '3.5s'}}>
                 <Sun className="w-4 h-4 text-amber-400" />
                 <div className="flex flex-col">
                    <span className="text-[10px] text-amber-200 font-bold uppercase">{metrics.hero.floatingBadges.uvIndexStatus}</span>
                    <span className="text-white text-xs font-semibold leading-none">{metrics.hero.floatingBadges.efficiencyStatus}</span>
                 </div>
             </div>

             {/* Badge 8: Live Temp (Warangal) */}
             <div className="absolute top-[8%] left-[0%] bg-orange-500/10 backdrop-blur-md border border-orange-500/20 py-2 px-4 rounded-full shadow-lg animate-float flex items-center gap-2" style={{animationDelay: '1s'}}>
                 <Thermometer className="w-4 h-4 text-orange-400" />
                 <div className="flex flex-col">
                    <span className="text-[10px] text-orange-200 font-bold uppercase">Warangal</span>
                    <span className="text-white text-xs font-semibold leading-none">{temp}</span>
                 </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;