export const siteData = {
  name: "Priya Kumari",
  title: "Full Stack .NET Developer",
  tagline: "I build scalable APIs | I integrate platforms | I craft interactive UIs",
  email: "priya836thakur101@gmail.com",
  phone: "+91-9736373826",
  linkedin: "https://linkedin.com/in/priya-kumari",
  github: "https://github.com/priya4042",
  resume: "/PRIYA_KUMARI.pdf", // put the pdf in /public

  about: `Full Stack .NET Developer with 3+ years experience building enterprise-grade web apps. Skilled in ASP.NET Core, SQL Server, Angular, React and API integrations. I love solving performance problems and crafting seamless user interfaces.`,

  skills: {
    frontend: [
      { name: "React", level: 85 },
      { name: "Angular", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 88 }
    ],
    backend: [
      { name: "C# / .NET Core", level: 90 },
      { name: "ASP.NET MVC", level: 88 },
      { name: "SQL Server", level: 85 },
      { name: "Azure Functions", level: 70 }
    ],
    tools: ["Git", "Telerik", "CK-Editor", "QuickBooks", "Shopify", "PayPal"]
  },

  experience: [
    {
      company: "SoftWebPOS",
      role: "Full Stack Developer",
      period: "Sep 2023 - Present",
      bullets: [
        "Built cloud-based CRM for sales, inventory, vendor transactions.",
        "Integrated QuickBooks, Xero, Shopify, FedEx, PayPal.",
        "Developed warehouse management system with real-time stock tracking."
      ]
    },
    {
      company: "CS Soft Solutions",
      role: "Software Developer",
      period: "Sep 2021 - Aug 2023",
      bullets: [
        "Designed APIs for property management systems using .NET Core & Angular.",
        "Improved backend performance with query optimizations."
      ]
    },
    {
      company: "CS InfoTech",
      role: "Trainee ASP.NET Core Developer",
      period: "Mar 2021 - Aug 2021",
      bullets: [
        "Worked on BookShopping app with auth and payment integration."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "CRM System",
      desc: "Cloud CRM for sales, inventory and vendor management with advanced tagging and invoicing.",
      tech: ["ASP.NET MVC", "SQL Server", "JavaScript"],
      image: "/assets/projects/crm.png",
      repo: "https://github.com/priya4042/crm",
      live: "#"
    },
    {
      id: 2,
      title: "Warehouse Management",
      desc: "Real-time stock tracking, flexible pricing and location-based inventory.",
      tech: ["C#", "SQL Server", "Azure Functions"],
      image: "/assets/projects/warehouse.png",
      repo: "https://github.com/priya4042/warehouse",
      live: "#"
    }
    // add more projects by copying the object format
  ]
};
