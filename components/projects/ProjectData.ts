export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "AI" | "Web" | "Python" | "Data Science";
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  status: "Completed" | "In Progress";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Portfolio Website",
    description:
      "A futuristic portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion and AI-inspired UI.",
    image: "/projects/portfolio.png",
    category: "Web",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
    github: "https://github.com/sunilach12",
    demo: "#",
    featured: true,
    status: "Completed",
  },

  {
    id: 2,
    title: "Python + MySQL CRUD",
    description:
      "Desktop application for managing records using Python and MySQL.",
    image: "/projects/mysql.png",
    category: "Python",
    technologies: [
      "Python",
      "MySQL",
    ],
    github: "https://github.com/sunilach12",
    demo: "#",
    featured: false,
    status: "Completed",
  },

  {
    id: 3,
    title: "Olist Data Analysis",
    description:
      "Data analysis project using Pandas, NumPy and Matplotlib.",
    image: "/projects/olist.png",
    category: "Data Science",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    github: "https://github.com/sunilach12",
    demo: "#",
    featured: false,
    status: "Completed",
  },

  {
    id: 4,
    title: "Future AI Chatbot",
    description:
      "An intelligent AI assistant integrated into the portfolio.",
    image: "/projects/chatbot.png",
    category: "AI",
    technologies: [
      "OpenAI",
      "Next.js",
      "TypeScript",
    ],
    github: "https://github.com/sunilach12",
    demo: "#",
    featured: false,
    status: "In Progress",
  },
];