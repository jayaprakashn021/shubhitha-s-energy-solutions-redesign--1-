const metrics = {
  company: {
    name: "Shubhitha S",
    suffix: "Energy Solutions",
    phone: "+91 85558 34486",
    email: "shubhithasenergysolutions@gmail.com",
    address: {
      line1: "H. No: 2-57/10, Arepally, Geesugonda,",
      line2: "Warangal, Telangana State, INDIA-506330"
    },
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  navigation: [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Projects', href: '#projects' },
  ],
  hero: {
    titleLine1: "Power Your",
    titleLine2: "World Cleanly.",
    subtitle: "Transform your property with next-generation solar solutions. Reduce costs, gain independence, and build a sustainable legacy.",
    installations: "50+",
    warrantyYears: "25",
    emiRate: "0%",
    floatingBadges: {
      dailyProduction: "45.2 kWh",
      batteryLevel: "92%",
      gridExport: "2.4 kW",
      systemHealthEfficiency: "98.5%",
      treesPlanted: "124",
      lifetimeSavings: "Upto ₹5 Lakhs",
      uvIndexStatus: "UV Index High",
      efficiencyStatus: "Peak Efficiency"
    }
  },
  statsBar: {
    yearsExperience: "5+",
    projectsCompleted: "50+",
    powerInstalled: "2MW+",
    clientSatisfaction: "100%"
  },
  services: [
    {
      id: "residential",
      title: "Residential Rooftop",
      description: "Turn your roof into a power station. Customized solar solutions for independent homes and apartments that blend seamlessly with your architecture.",
      color: "bg-blue-500",
      iconKey: "home"
    },
    {
      id: "commercial",
      title: "Commercial & Industrial",
      description: "Large-scale solar installations for Cold Storages, Factories and Offices to significantly cut operational costs and meet sustainability goals.",
      color: "bg-brand-500",
      iconKey: "factory"
    },
    {
      id: "water_heaters",
      title: "Solar Water Heaters",
      description: "High-efficiency ETC and FPC solar water heating systems for domestic and industrial use, reducing gas and electric dependencies.",
      color: "bg-orange-500",
      iconKey: "sun"
    },
    {
      id: "street_lights",
      title: "Solar Street Lights",
      description: "Autonomous, dusk-to-dawn solar street lighting solutions for communities, roadways, and private campuses.",
      color: "bg-yellow-500",
      iconKey: "lightbulb"
    },
    {
      id: "maintenance",
      title: "O&M Services",
      description: "Comprehensive operation and maintenance packages. We monitor, clean, and repair to ensure your plant performs at peak efficiency.",
      color: "bg-slate-500",
      iconKey: "wrench"
    },
    {
      id: "consultancy",
      title: "Energy Consultancy",
      description: "Expert audit and consultancy services. We analyze your consumption patterns to optimize energy planning.",
      color: "bg-purple-500",
      iconKey: "battery"
    }
  ],
  projects: [
    {
      title: "Peenya Industrial Complex",
      type: "Industrial • 100kW",
      location: "Peenya, Bangalore",
      image: "https://shubhithasenergysolutions.com/assets/videos/125%20kW%20Grid%20Connected%20Rooftop%20Solar%20PV%20Power%20Plant.mp4",
      cols: "md:col-span-2"
    },
    {
      title: "Lakeside Villa",
      type: "Residential • 5kW",
      location: "Whitefield, Bangalore",
      image: "https://images.unsplash.com/photo-1595831980375-727827295773?q=80&w=2574&auto=format&fit=crop",
      cols: "md:col-span-1"
    },
    {
      title: "Tech Park Carport",
      type: "Commercial • 50kW",
      location: "Hitech City, Hyderabad",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2574&auto=format&fit=crop",
      cols: "md:col-span-1"
    },
    {
      title: "Green Valley School",
      type: "Institutional • 25kW",
      location: "Mysore, Karnataka",
      image: "https://images.unsplash.com/photo-1545209463-eb2a009c5d19?q=80&w=2669&auto=format&fit=crop",
      cols: "md:col-span-2"
    }
  ],
  calculator: {
    defaultLocation: "Bangalore, India",
    title: "See Your Savings in Seconds",
    subtitle: "Our AI analyzes solar potential based on your location and usage. No sales calls, just data.",
    placeholderBill: "e.g. 3500",
    placeholderLocation: "e.g. Whitefield, Bangalore"
  }
};

export default metrics;