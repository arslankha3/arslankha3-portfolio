import { Project } from "@/app/types";

const projects: Project[] = [
  // Key Professional Projects
  {
    image: "",
    category: "fullstack",
    name: "ISP-Manager V3",
    description:
      "Microservices-based ERP system for telecom resellers using NestJS, NATS, Redis, and CockroachDB, featuring automated CI/CD pipelines and scalable multi-tenant architecture.",
    stack: ["nestjs", "nodejs", "typescript", "postgresql", "docker"],
    date: "2025",
    show: true,
  },
  {
    image: "",
    category: "fullstack",
    name: "iSHerpCloud",
    description:
      "Cloud-based modular ERP with microservices architecture, multi-tenancy support, and domain-driven design serving multiple clients simultaneously.",
    stack: ["nodejs", "typescript", "postgresql", "docker"],
    date: "2023 - 2025",
    show: true,
  },
  {
    image: "",
    category: "fullstack",
    name: "SHerp (Sidat Hyder ERP)",
    description:
      "Comprehensive business solution deployed to 300+ clients across textile, pharmaceutical, cement, and manufacturing industries with 20+ integrated modules.",
    stack: ["csharp", "microsoft", "mssql", "js"],
    date: "2014 - 2022",
    show: true,
  },
  {
    image: "",
    category: "backend",
    name: "ERP Integrations",
    description:
      "Developed SOAP/REST APIs integrating ERP with Dubai Islamic Bank, Meezan Bank, FBR, warehouse systems, and third-party applications.",
    stack: ["csharp", "nodejs", "mssql"],
    date: "2018 - 2022",
    show: true,
  },
  {
    image: "",
    category: "fullstack",
    name: "HRMS-ESS",
    description:
      "Human resource management platform automating attendance, performance management, and employee self-service operations.",
    stack: ["csharp", "microsoft", "mssql", "js"],
    date: "2016 - 2022",
  },
  {
    image: "",
    category: "fullstack",
    name: "Kitchen Display System (KDS)",
    description:
      "Real-time order management system integrated with POS, featuring item-level tracking and category-based organization for restaurant operations.",
    stack: ["csharp", "js", "mssql"],
    date: "2020",
    show: true,
  },
  {
    image: "",
    category: "fullstack",
    name: "Property Care and Management System",
    description:
      "Comprehensive real estate management solution for mixed-use developments, handling apartments, towers, villas, plots, amenities, and billing on unified platform.",
    stack: ["csharp", "microsoft", "mssql", "js"],
    date: "2019 - 2021",
  },
  // Personal Projects
  {
    image: "",
    category: "fullstack",
    name: "Retail/Restaurant Point of Sale",
    description:
      "Complete POS solution for retail and restaurant businesses with inventory management, billing, and reporting features.",
    stack: ["csharp", "mssql", "js"],
    date: "Personal Project",
  },
  {
    image: "",
    category: "fullstack",
    name: "Clinic Management (OPD/Emergency Room)",
    description:
      "Healthcare management system for outpatient and emergency room operations including patient records, appointments, and billing.",
    stack: ["csharp", "mssql", "js"],
    date: "Personal Project",
  },
  {
    image: "",
    category: "frontend",
    name: "Custom Dashboards",
    description:
      "Interactive business intelligence dashboards with real-time data visualization and KPI tracking.",
    stack: ["js", "html5", "css3"],
    date: "Personal Project",
  },
  {
    image: "",
    category: "fullstack",
    name: "Customer Portal",
    description:
      "Self-service customer portal for order tracking, account management, and support ticket handling.",
    stack: ["csharp", "js", "mssql"],
    date: "Personal Project",
  },
  {
    image: "",
    category: "backend",
    name: "FBR Digital Invoicing",
    description:
      "Integration with Federal Board of Revenue (FBR) for automated digital invoice generation and tax compliance.",
    stack: ["csharp", "mssql"],
    date: "Personal Project",
  },
  {
    image: "",
    category: "fullstack",
    name: "Medical Store Management",
    description:
      "Pharmacy management system with inventory tracking, expiry management, and prescription handling.",
    stack: ["csharp", "mssql", "js"],
    date: "Personal Project",
  },
  {
    image: "",
    category: "fullstack",
    name: "Warehouse Inventory Management",
    description:
      "Complete warehouse management solution with stock tracking, goods receipt, dispatch, and reporting.",
    stack: ["csharp", "mssql", "js"],
    date: "Personal Project",
  },
  {
    image: "",
    category: "fullstack",
    name: "Small Business E-commerce",
    description:
      "E-commerce platform for small businesses with product catalog, cart, checkout, and order management.",
    stack: ["nodejs", "js", "mongodb"],
    date: "Personal Project",
  },
];

export default projects;
