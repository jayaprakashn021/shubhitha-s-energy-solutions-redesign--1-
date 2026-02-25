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
    installations: "100+",
    warrantyYears: "25",
    emiRate: "Upto 85%",
    floatingBadges: {
      dailyProduction: "145.2 kWh",
      batteryLevel: "98%",
      gridExport: "12.4 kW",
      systemHealthEfficiency: "99.9%",
      treesPlanted: "2,124",
      lifetimeSavings: "Upto ₹25 Lakhs",
      uvIndexStatus: "UV Index High",
      efficiencyStatus: "Peak Efficiency"
    }
  },
  statsBar: {
    yearsExperience: "5+",
    powerInstalled: "50 MW+",
    overallGeneration: "7300 MWh",
    customers: "100+"
  },
  projectBreakdown: {
    commercial: "30+",
    domestic: "100+",
    groundMounted: "30 MW+",
    offGridAndHybrid: "10+",
    otherSolutions: "20+",
    evChargingStations: "02"
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
      title: "Solar Water Heaters/Street Lights/Pumps",
      description: "High-efficiency ETC and FPC solar water heating systems for domestic and industrial use, reducing gas and electric dependencies.",
      color: "bg-orange-500",
      iconKey: "sun"
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
      title: "Laxmi Srinivasa Cold Storage",
      type: "Industrial • 125kW",
      location: "Warangal, Telangana",
      image: "https://shubhithasenergysolutions.com/assets/videos/125%20kW%20Grid%20Connected%20Rooftop%20Solar%20PV%20Power%20Plant.mp4",
      cols: "md:col-span-2"
    },
    /*
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
    */
  ],
  calculator: {
    defaultLocation: "Bangalore, India",
    title: "See Your Savings in Seconds",
    subtitle: "Our AI analyzes solar potential based on your location and usage. No sales calls, just data.",
    placeholderBill: "e.g. 3500",
    placeholderLocation: "e.g. Whitefield, Bangalore"
  },
  gallery: [
    { src: "./gallery/2-kw-residential.jpeg", title: "2 kW Residential Solar", category: "Residential" },
    { src: "./gallery/2-kw-residential-close.jpeg", title: "2 kW Residential - Details", category: "Residential" },
    { src: "./gallery/apartment-common-area.jpeg", title: "Apartment Common Area Solar", category: "Residential" },
    { src: "./gallery/apartment-installation.jpeg", title: "Apartment Building Solar", category: "Residential" },
    { src: "./gallery/cleaning-service.jpeg", title: "Solar Panel Cleaning Service", category: "Maintenance" },
    { src: "./gallery/commercial-installation-1.jpeg", title: "Commercial Rooftop Solar", category: "Commercial" },
    { src: "./gallery/commercial-installation-2.jpeg", title: "Commercial Rooftop - Angle 2", category: "Commercial" },
    { src: "./gallery/gm-installation.jpeg", title: "GM Plant Installation", category: "Industrial" },
    { src: "./gallery/gm-mms.jpeg", title: "GM MMS Structure", category: "Installation" },
    { src: "./gallery/idt-yard.jpeg", title: "IDT Yard Solar Arrays", category: "Commercial" },
    { src: "./gallery/local-labour-installation.jpeg", title: "Local Team Installation", category: "Installation" },
    { src: "./gallery/mms-installation.jpeg", title: "MMS Structure Setup", category: "Installation" },
    { src: "./gallery/modules-lifting.jpeg", title: "Lifting Solar Modules", category: "Installation" },
    { src: "./gallery/pgcil-warangal-1.jpeg", title: "PGCIL Warangal Site 1", category: "Commercial" },
    { src: "./gallery/pgcil-warangal-2.jpeg", title: "PGCIL Warangal Site 2", category: "Commercial" },
    { src: "./gallery/residential-installation-1.jpeg", title: "Home Installation 1", category: "Residential" },
    { src: "./gallery/residential-installation-2.jpeg", title: "Home Installation 2", category: "Residential" },
    { src: "./gallery/residential-installation-3.jpeg", title: "Home Installation 3", category: "Residential" },
    { src: "./gallery/residential-installation-4.jpeg", title: "Home Installation 4", category: "Residential" },
    { src: "./gallery/residential-installation-5.jpeg", title: "Home Installation 5", category: "Residential" },
    { src: "./gallery/residential-installation-6.jpeg", title: "Home Installation 6", category: "Residential" },
    { src: "./gallery/residential-installation-7.jpeg", title: "Home Installation 7", category: "Residential" },
    { src: "./gallery/rice-industry-installation.jpeg", title: "Rice Industry Solar", category: "Industrial" }
  ],
  partners: {
    approvals: [
      { name: "MNRE Govt of India", logo: "./gallery/mnre.svg" },
      { name: "TGREDCO", logo: "./gallery/tgredco.svg" },
      { name: "TGNPDCL", logo: "./gallery/tgnpdcl.svg" },
      { name: "TGSPDCL", logo: "./gallery/tgspdcl.svg" }
    ],
    customers: [
      "Power Grid Corporation of India Warangal",
      "Karnataka",
      "Shubam Oil",
      "Rice Mills",
      "Cotton Jinning Mills",
      "Cold Storages"
    ],
    suppliers: {
      modules: [
        "Renewsys", "Waaree", "Adani", "Vikram", "Novasys", "Premier", "EMV", "Satwik"
      ],
      inverters: [
        "Polycab", "Waaree", "Growatt", "Solis", "Sungrow"
      ]
    }
  }
};

export default metrics;