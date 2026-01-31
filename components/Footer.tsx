import React from 'react';
import { Sun, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import metrics from '../data/metrics';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-20 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Sun className="text-white w-6 h-6 fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-xl leading-none">{metrics.company.name}</span>
                <span className="text-[10px] text-brand-500 font-bold uppercase tracking-widest">{metrics.company.suffix}</span>
              </div>
            </div>
            <p className="text-sm leading-7 mb-8 text-slate-400">
              Empowering a sustainable future through innovative solar energy solutions. Join us in making the world greener, one roof at a time.
            </p>
            <div className="flex gap-4">
              <SocialLink href={metrics.company.socials.facebook} icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href={metrics.company.socials.twitter} icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href={metrics.company.socials.instagram} icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href={metrics.company.socials.linkedin} icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="#">Home</FooterLink></li>
              <li><FooterLink href="#about">About Us</FooterLink></li>
              <li><FooterLink href="#services">Services</FooterLink></li>
              <li><FooterLink href="#projects">Projects</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Our Services</h4>
            <ul className="space-y-4 text-sm">
              {metrics.services.slice(0, 5).map((service, index) => (
                 <li key={index}><FooterLink href="#services">{service.title}</FooterLink></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Stay Updated</h4>
            <p className="text-sm mb-6 leading-6">Subscribe to our newsletter for the latest updates on solar technology and government subsidies.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Enter your email" className="bg-slate-900 border border-slate-800 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-brand-500/50 w-full text-sm transition-all" />
              <button className="bg-white hover:bg-brand-50 text-slate-900 px-5 py-3 rounded-xl text-sm font-bold transition-colors shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {metrics.company.name} {metrics.company.suffix}. All rights reserved.</p>
          <div className="flex gap-8">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a href={href} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 border border-slate-800 hover:border-brand-500">
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string, children?: React.ReactNode }) => (
  <a href={href} className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
    <span className="w-1 h-1 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
    {children}
  </a>
);

export default Footer;