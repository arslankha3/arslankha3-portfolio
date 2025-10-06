import { Project } from "@/app/types";

const projects: Project[] = [
  {
    image: "",
    category: "fullstack",
    name: "Todo App with Fiber",
    description:
      "A Todo List app built with React as the frontend, and Fiber (Go) as the backend.",
    github: "https://github.com/arslankha3/todo-go?tab=readme-ov-file#table-of-contents",
    stack: ["reactjs", "typescript", "tailwindcss", "go", "mongodb"],
    date: "Nov 2024",
  },
  {
    image: "./covers/electivor-cover.webp",
    category: "fullstack",
    name: "Electivor.ai",
    description:
      "Feeling overwhelmed by the choices of courses you can enroll as a UNSW student? Ask this Course Recommender Chatbot!",
    link: "https://electivor.vercel.app/",
    github: "https://github.com/arslankha3/electivor.ai?tab=readme-ov-file#table-of-contents",
    stack: ["nextjs2", "typescript", "tailwindcss", "firebase", "gcloud"],
    date: "Oct 2024",
  },
  {
    image: "./covers/positivus-cover.webp",
    category: "frontend",
    name: "Positivus",
    description:
      "Figma to Code using React with TypeScript, Vite, and Tailwind CSS.",
    link: "https://positivus-phot.vercel.app/",
    github: "https://github.com/arslankha3/positivus?tab=readme-ov-file#table-of-contents",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "Sep 2024",
  },
  {
    image: "./covers/smarttrip-cover.webp",
    category: "fullstack",
    name: "Smart Trip",
    description:
      "Create, customize, and optimize your itineraries with this free AI trip planner, powered by Gemini AI.",
    link: "https://smart-trip-alpha.vercel.app/",
    github: "https://github.com/arslankha3/smart-trip?tab=readme-ov-file#table-of-contents",
    stack: ["nextjs2", "shadcnui", "redux", "firebase", "gcloud"],
    date: "Sep 2024",
    show: true,
  },
  {
    image: "./covers/wam-to-gpa-cover.webp",
    category: "frontend",
    name: "WAM to GPA Convertor",
    description:
      "An app that helps UNSW students convert their WAM to GPA by simply uploading their academic statement.",
    link: "https://unsw-wam-to-gpa-convertor.vercel.app/",
    github: "https://github.com/arslankha3/unsw-wam-to-gpa-convertor?tab=readme-ov-file#table-of-contents",
    stack: ["nextjs2", "typescript", "tailwindcss", "shadcnui"],
    date: "Aug 2024",
    show: true,
  },
  {
    category: "backend",
    name: "Cinevent",
    description:
      "An API that handles movie theater bookings, seat reservations, and admin management.",
    github: "https://github.com/arslankha3/cinevent?tab=readme-ov-file#table-of-contents",
    stack: ["nodejs", "mongoose", "mongodb"],
    date: "Aug 2024",
  },
  {
    image: "./covers/task-cover.webp",
    category: "fullstack",
    name: "Task A Gotchi",
    description:
      "A responsive web app that gamifies users' habits to boost their productivity. For UNSW Flagship Hackathon 2024.",
    github: "https://github.com/arslankha3/task-a-gotchi?tab=readme-ov-file#table-of-contents",
    stack: ["nextjs2", "tailwindcss", "antd", "mongodb", "prisma"],
    date: "Jul 2024",
    show: true,
  },
  {
    image: "./covers/dota2-cover.webp",
    category: "frontend",
    name: "Dota 2 Hero Matchmaker",
    description:
      "A responsive web app that helps DOTA 2 players find the perfect hero according to their preferences.",
    link: "https://arslankha3.github.io/dota2-hero-matchmaker/#/",
    github: "https://github.com/arslankha3/dota2-hero-matchmaker?tab=readme-ov-file#table-of-contents",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "Jun 2024",
  },
  {
    image: "./covers/flexbox-cover.webp",
    category: "frontend",
    name: "Flexbox Froggy Hardcore",
    description:
      "A game practicing CSS flexbox properties, featuring an UNLIMITED number of challenges.",
    link: "https://arslankha3.github.io/flexboxfroggy-hardcore/",
    github: "https://github.com/arslankha3/flexboxfroggy-hardcore?tab=readme-ov-file#table-of-contents",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "Jun 2024",
    show: true,
  },
  {
    image: "./covers/pogo-cover.webp",
    category: "frontend",
    name: "POGO - Power Up",
    description:
      "Easily calculate and plan out your resources for powering up your pokemons with this tool!",
    link: "https://arslankha3.github.io/pogo-powerup/",
    github: "https://github.com/arslankha3/pogo-powerup?tab=readme-ov-file#table-of-contents",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss", "antd"],
    date: "May 2024",
  },
  {
    image: "./covers/geo-cover.webp",
    category: "frontend",
    name: "GeoGenius Info",
    description:
      "Explore the information of each country with just a click on a world map.",
    link: "https://geogenius-two.vercel.app/",
    github: "https://github.com/arslankha3/geogenius?tab=readme-ov-file#table-of-contents",
    stack: ["nextjs2", "typescript", "tailwindcss"],
    date: "Apr 2024",
  },
  {
    image: "./covers/chillflix-cover.webp",
    category: "frontend",
    name: "ChillFlix - Anime Recommender",
    description:
      "Looking for an anime to watch but not sure what to watch? Search for it here!",
    link: "https://chillflix-phot.vercel.app/",
    github: "https://github.com/arslankha3/chillflix?tab=readme-ov-file#table-of-contents",
    stack: ["nextjs2", "typescript", "tailwindcss", "zod", "redux"],
    date: "Mar 2024",
  },
  {
    image: "./covers/xo-cover.webp",
    category: "frontend",
    name: "XO is Unbeatable (AI)",
    description:
      "How good are you in Tic Tac Toe? Try beating my AI (Alpha-Beta Pruning) in this Tic Tac Toe game!",
    link: "https://arslankha3.github.io/xo-is-unbeatable/",
    github: "https://github.com/arslankha3/xo-is-unbeatable?tab=readme-ov-file#table-of-contents",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "Mar 2024",
  },
  {
    image: "./covers/blackpeach-cover.webp",
    category: "frontend",
    name: "BlackPeach | SHOP",
    description:
      "An e-commerce platform selling all of albums and merchandise of a popular K-pop band.",
    link: "https://blackpeach.vercel.app/",
    github: "https://github.com/arslankha3/blackpeach?tab=readme-ov-file#table-of-contents",
    stack: ["nextjs2", "typescript", "tailwindcss", "redux"],
    date: "Feb 2024",
    show: true,
  },
  {
    image: "./covers/portfolio2-cover.webp",
    category: "frontend",
    name: "Portfolio Website 2nd Edition",
    description:
      "This is the site you are looking at right now. Check out my other projects!",
    link: "https://arslankha3.vercel.app/",
    github: "https://github.com/arslankha3/next-portfolio?tab=readme-ov-file#table-of-contents",
    stack: ["nextjs2", "typescript", "tailwindcss", "shadcnui"],
    date: "Dec 2023",
  },
  {
    image: "./covers/towers-cover.webp",
    category: "frontend",
    name: "Pymetrics Towers Game",
    description:
      "Want to practice Pymetrics tests for your interview? Try this game out!",
    link: "https://arslankha3.github.io/react-pymetrics-towers/",
    github: "https://github.com/arslankha3/react-pymetrics-towers?tab=readme-ov-file#table-of-contents",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "Dec 2023",
  },
  // {
  //   image: "./covers/airbrb-cover.webp",
  //   category: "frontend",
  //   name: "AirBrB",
  //   description:
  //     "A property renting service website with React JS, Tailwind CSS, and MUI. Component testing with React Testing Library, and UI Testing with Cypress",
  //   github: "https://github.com/arslankha3/react-airbrb",
  //   stack: ["reactjs", "tailwindcss", "materialui", "cypress"],
  //   date: "Nov 2023",
  // },
  {
    category: "others",
    name: "Network Analyzer",
    description:
      "Looking for a tool to capture and monitor network traffic? Try this tool out!",
    github: "https://github.com/arslankha3/network-analyzer?tab=readme-ov-file#network-analyzer",
    stack: ["go"],
    date: "Nov 2023",
  },
  // {
  //   image: "./covers/slackr-cover.webp",
  //   category: "frontend",
  //   name: "Slackr",
  //   description: "A messaging platform with Vanilla JS, and Bootstrap",
  //   github: "https://github.com/arslankha3/vanilla-slackr",
  //   stack: ["js", "html5", "css3", "bootstrap5"],
  //   date: "Oct 2023",
  // },
  // {
  //   category: "others",
  //   name: "DNS Resolver",
  //   description:
  //     "A homemade DNS resolver without supported libraries in Python, using Wireshark to help debuging",
  //   github: "https://github.com/arslankha3/dns-resolver",
  //   stack: ["python"],
  //   date: "Jul 2023",
  // },
  // {
  //   category: "others",
  //   name: "Virtual Memory",
  //   description: "Implementing virtual memory translation in C",
  //   github: "https://github.com/arslankha3/vm-fault",
  //   stack: [],
  //   date: "Apr 2023",
  // },
  // {
  //   category: "others",
  //   name: "System Calls",
  //   description: "Implementationing common system calls in C",
  //   github: "https://github.com/arslankha3/file-management",
  //   stack: [],
  //   date: "Mar 2023",
  // },
  // {
  //   category: "backend",
  //   name: "Tributary",
  //   description:
  //     "A Java API building event-driven systems, applying OOP principles with a UML diagram. Testing with Gradle",
  //   github: "https://github.com/arslankha3/tributary",
  //   stack: ["java"],
  //   uml: "https://drive.google.com/file/d/1RplnTzt38UexT7zDhYWakjefp2hCob3S/view",
  //   date: "Nov 2022",
  // },
  // {
  //   category: "backend",
  //   image: "./covers/dungeonmania-cover.webp",
  //   name: "Dungeon Mania",
  //   description:
  //     "A 2D adventure game in Java, applying OOP principles with a UML diagram. Testing with Gradle",
  //   github: "https://github.com/arslankha3/dungeon-mania",
  //   stack: ["java"],
  //   uml: "https://drive.google.com/file/d/1uJqEFKwZRKXHGMQgYjq-tQ8MB0pi_Rb3/view",
  //   date: "Oct 2022",
  // },
  // {
  //   category: "backend",
  //   image: "./covers/backtoblackout-cover.webp",
  //   name: "Back to Blackout",
  //   description:
  //     "A demo of satellite orbit and communication in Java, applying OOP principles with a UML diagram. Testing with Gradle",
  //   github: "https://github.com/arslankha3/back-to-blackout",
  //   stack: ["java"],
  //   uml: "https://drive.google.com/file/d/1mV0JWhQIZe4L92LekX2HKLVFP1bh0QYj/view",
  //   date: "Sep 2022",
  // },
  // {
  //   category: "backend",
  //   name: "UNSW Treats",
  //   description:
  //     "A messaging platform with Express and TypeScript. Testing with Jest",
  //   github: "https://github.com/arslankha3/unsw-treats",
  //   stack: ["nodejs", "typescript", "jest"],
  //   date: "Jul 2022",
  // },
];

export default projects;
