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
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{metrics.statsBar.projectsCompleted}</div>
            <div className="text-brand-100 text-sm font-medium">Projects Completed</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{metrics.statsBar.powerInstalled}</div>
            <div className="text-brand-100 text-sm font-medium">Power Installed</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{metrics.statsBar.clientSatisfaction}</div>
            <div className="text-brand-100 text-sm font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;