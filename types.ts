import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface SolarCalculationResult {
  estimatedSystemSize: string;
  monthlySavings: string;
  roiPeriod: string;
  environmentalImpact: string;
  recommendation: string;
}

export interface NavItem {
  label: string;
  href: string;
}