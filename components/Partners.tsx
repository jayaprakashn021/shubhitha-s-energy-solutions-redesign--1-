import React from 'react';
import { Award, Users, ShieldCheck, Zap } from 'lucide-react';
import metrics from '../data/metrics';

const Partners: React.FC = () => {
    return (
        <section id="partners" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Component Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 font-bold text-sm mb-6">
                        <Award className="w-4 h-4" />
                        Trusted By The Best
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                        Approvals & Network
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        We are certified by top government agencies and partner with industry-leading
                        component manufacturers to deliver uncompromised quality.
                    </p>
                </div>

                {/* 1. Approvals Banner */}
                <div className="mb-24">
                    <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Recognized Approvals
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {metrics.partners.approvals.map((approval, idx) => (
                            <div key={idx} className="group relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                                <img
                                    src={approval.logo}
                                    alt={approval.name}
                                    className="h-16 md:h-20 object-contain drop-shadow-sm"
                                    title={approval.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* 2. Key Customers */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-brand-100 rounded-xl text-brand-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Esteemed Customers</h3>
                        </div>

                        <ul className="space-y-4">
                            {metrics.partners.customers.map((customer, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700 bg-white p-4 rounded-xl shadow-sm border border-slate-50 transition-all hover:-translate-y-1 hover:shadow-md hover:border-brand-100">
                                    <span className="w-2 h-2 rounded-full bg-brand-500 mt-2 flex-shrink-0"></span>
                                    <span className="font-semibold">{customer}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Trusted Suppliers */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Premium Suppliers</h3>
                        </div>

                        <div className="mb-10">
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Solar Modules</h4>
                            <div className="flex flex-wrap gap-2">
                                {metrics.partners.suppliers.modules.map((module, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-white text-slate-700 font-semibold rounded-lg shadow-sm border border-slate-100 hover:border-brand-300 hover:text-brand-600 transition-colors cursor-default">
                                        {module}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Inverter Brands</h4>
                            <div className="flex flex-wrap gap-2">
                                {metrics.partners.suppliers.inverters.map((inverter, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-white text-slate-700 font-semibold rounded-lg shadow-sm border border-slate-100 hover:border-amber-300 hover:text-amber-600 transition-colors cursor-default">
                                        {inverter}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Partners;
