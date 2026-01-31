import React, { useState } from 'react';
import { calculateSolarPotential } from '../services/geminiService';
import { SolarCalculationResult } from '../types';
import { Calculator, Zap, Loader2, Leaf, IndianRupee, TrendingUp, SunMedium, MapPin } from 'lucide-react';
import metrics from '../data/metrics';

const AICalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number | ''>('');
  const [location, setLocation] = useState<string>(metrics.calculator.defaultLocation);
  const [result, setResult] = useState<SolarCalculationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!billAmount) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await calculateSolarPotential(Number(billAmount), location);
      setResult(data);
    } catch (err) {
      setError("Unable to calculate at the moment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 px-4 bg-white/5 border border-white/10 rounded-full text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Powered by Google Gemini AI
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            {metrics.calculator.title}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {metrics.calculator.subtitle}
          </p>
        </div>

        <div className="bg-slate-950/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-4 md:p-8 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Input Section */}
            <div className="lg:col-span-5 flex flex-col justify-center p-4 md:p-6">
              <form onSubmit={handleCalculate} className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-3 ml-1">
                    Monthly Electricity Bill (Average)
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <IndianRupee className="h-5 w-5 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                    </div>
                    <input
                      type="number"
                      value={billAmount}
                      onChange={(e) => setBillAmount(Number(e.target.value))}
                      className="block w-full pl-12 pr-4 py-5 bg-slate-900/50 border border-slate-800 rounded-2xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-lg font-medium"
                      placeholder={metrics.calculator.placeholderBill}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-3 ml-1">
                    Property Location
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                    </div>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="block w-full pl-12 pr-4 py-5 bg-slate-900/50 border border-slate-800 rounded-2xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-lg font-medium"
                      placeholder={metrics.calculator.placeholderLocation}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-brand-900/20 hover:shadow-brand-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing Roof Data...
                    </>
                  ) : (
                    <>
                      Generate Estimate
                      <Zap className="w-5 h-5 fill-white/20 group-hover:fill-white transition-colors" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:col-span-1 relative">
               <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent"></div>
            </div>

            {/* Output Section */}
            <div className="lg:col-span-6 bg-slate-900 rounded-[2rem] p-6 md:p-8 border border-slate-800 relative min-h-[400px] flex flex-col">
              {result ? (
                <div className="animate-in fade-in slide-in-from-right-8 duration-700 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Estimated System Size</div>
                      <div className="text-4xl font-display font-bold text-white tracking-tight">{result.estimatedSystemSize}</div>
                    </div>
                    <div className="p-3 bg-brand-500/10 rounded-xl border border-brand-500/20">
                      <SunMedium className="w-8 h-8 text-brand-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50">
                       <div className="flex items-center gap-2 mb-2 text-green-400">
                          <IndianRupee className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Monthly Savings</span>
                       </div>
                       <div className="text-2xl font-bold text-white">{result.monthlySavings}</div>
                    </div>
                    <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50">
                       <div className="flex items-center gap-2 mb-2 text-blue-400">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">ROI Period</span>
                       </div>
                       <div className="text-2xl font-bold text-white">{result.roiPeriod}</div>
                    </div>
                  </div>

                  <div className="mb-8">
                     <div className="flex items-center gap-2 mb-3 text-emerald-400">
                        <Leaf className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Environmental Impact</span>
                     </div>
                     <p className="text-slate-300 text-lg">{result.environmentalImpact}</p>
                  </div>

                  <div className="mt-auto bg-brand-900/20 border border-brand-500/20 rounded-xl p-5">
                    <p className="text-brand-200 text-sm leading-relaxed italic">
                      "<span className="font-semibold not-italic">AI Insight:</span> {result.recommendation}"
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <Calculator className="w-10 h-10 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Detailed Analysis Awaits</h3>
                  <p className="text-slate-500 max-w-xs mx-auto">
                    Fill in your details to receive a comprehensive solar estimation powered by Gemini AI.
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.93735 15.5L12 21L14.0626 15.5L19.5 13.4374L14.0626 11.3747L12 5.87469L9.93735 11.3747L4.5 13.4374L9.93735 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default AICalculator;