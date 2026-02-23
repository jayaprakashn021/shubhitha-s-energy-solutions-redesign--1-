import React from 'react';
import metrics from '../data/metrics';

const Stats: React.FC = () => {
  return (
    <div className="bg-brand-600 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white divide-x divide-brand-500/50">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{metrics.statsBar.yearsExperience}</div>
            <div className="text-brand-100 text-sm font-medium">Years Experience</div>
          </div>
          <div className="p-4 group relative cursor-help">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{metrics.statsBar.powerInstalled}</div>
            <div className="text-brand-100 text-sm font-medium">Power Installed</div>

            {/* Tooltip for Project Breakdown */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-slate-900 text-white text-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 shadow-xl">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-slate-900"></div>
              <h4 className="font-bold text-brand-300 mb-2 border-b border-slate-700 pb-1">Installations Breakdown</h4>
              <ul className="space-y-1 text-left text-slate-300">
                <li className="flex justify-between"><span>Commercial:</span> <span className="font-semibold text-white">{metrics.projectBreakdown?.commercial}</span></li>
                <li className="flex justify-between"><span>Domestic:</span> <span className="font-semibold text-white">{metrics.projectBreakdown?.domestic}</span></li>
                <li className="flex justify-between"><span>Ground Mounted:</span> <span className="font-semibold text-white">{metrics.projectBreakdown?.groundMounted}</span></li>
                <li className="flex justify-between"><span>Off Grid & Hybrid:</span> <span className="font-semibold text-white">{metrics.projectBreakdown?.offGridAndHybrid}</span></li>
                <li className="flex justify-between"><span>Other Solutions:</span> <span className="font-semibold text-white">{metrics.projectBreakdown?.otherSolutions}</span></li>
                <li className="flex justify-between"><span>EV Charging:</span> <span className="font-semibold text-white">{metrics.projectBreakdown?.evChargingStations}</span></li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{metrics.statsBar.overallGeneration}</div>
            <div className="text-brand-100 text-sm font-medium">Overall Generation</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{metrics.statsBar.customers}</div>
            <div className="text-brand-100 text-sm font-medium">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;