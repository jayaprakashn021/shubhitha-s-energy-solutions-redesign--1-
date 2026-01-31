import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import metrics from '../data/metrics';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
            
            {/* Info Side */}
            <div className="bg-slate-900 p-12 md:p-16 text-white relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-20"></div>
               <div className="absolute bottom-12 left-12 w-32 h-32 bg-blue-500 rounded-full blur-[60px] opacity-20"></div>

              <div className="relative z-10">
                <h2 className="text-4xl font-display font-bold mb-6">Let's Discuss Your Solar Project</h2>
                <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                  Our engineers are ready to design the perfect system for your energy needs. Get a free site survey today.
                </p>

                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Call Us</h4>
                      <p className="text-slate-400">{metrics.company.phone}</p>
                      <p className="text-slate-500 text-sm mt-1">Mon-Sat, 9am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                      <p className="text-slate-400">{metrics.company.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Visit Office</h4>
                      <p className="text-slate-400">
                        {metrics.company.address.line1}<br />
                        {metrics.company.address.line2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 md:p-16 bg-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">Your Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder-slate-400" placeholder="John Doe" />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder-slate-400" placeholder="+91" />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">Interested Service</label>
                  <div className="relative">
                    <select className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all appearance-none text-slate-600 cursor-pointer">
                      {metrics.services.map((service, index) => (
                        <option key={index} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">Message</label>
                  <textarea rows={4} className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder-slate-400 resize-none" placeholder="Tell us about your property type and average bill..."></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-slate-900 hover:bg-brand-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 group">
                  Send Request
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;