export type Certificate = {
  id: number;
  title: string;
  organization: string;
  date: string;
  category: string;
  image: string;
  credential: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Python Programming",
    organization: "Coursera",
    date: "2026",
    category: "Python",
    image: "/certificates/python.jpg",
    credential: "#",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    organization: "IBM",
    date: "2026",
    category: "Data Science",
    image: "/certificates/datascience.jpg",
    credential: "#",
  },
  {
    id: 3,
    title: "AI Engineering",
    organization: "Google",
    date: "2026",
    category: "AI",
    image: "/certificates/ai.jpg",
    credential: "#",
  },
  {
    id: 4,
    title: "Next.js Developer",
    organization: "Vercel",
    date: "2026",
    category: "Web",
    image: "/certificates/nextjs.jpg",
    credential: "#",
  },
];