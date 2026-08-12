// Style reminder: This data supports the liquid-glass editorial system; keep copy honest, concise, and easy to replace without changing component layout.

export const portfolio = {
  name: "MD SAMI",
  status: "3rd Year CSE Student",
  eyebrow: "CSE STUDENT",
  title: "Computer Science Engineering Student",
  roles: ["Developer", "Problem Solver", "AI/ML Enthusiast"],
  description:
    "I build digital experiences, solve problems with code, and continuously explore modern technologies to create practical solutions.",
  bio: [
    "I'm a third-year Computer Science Engineering student exploring software development, full-stack technologies and AI/ML. I turn ideas into practical projects while building stronger technical fundamentals.",
  ],
  profileImage: "/portfolio/profile.jpeg",
  resume: "#resume-placeholder",
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    leetcode: "https://leetcode.com/yourusername",
  },
  skills: {
    Programming: ["C++", "Java", "Python", "JavaScript"],
    Frontend: ["HTML", "CSS", "React"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MongoDB", "MySQL"],
    "AI / ML": ["Python", "NumPy", "Pandas", "Machine Learning"],
    Tools: ["Git", "GitHub", "VS Code", "Postman"],
    "Core CS": ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  projects: [
    {
      id: "veroir",
      number: "01",
      title: "VEROIR",
      subtitle: "Fashion E-Commerce Website",
      description:
        "A modern fashion e-commerce website focused on product discovery, authentication and shopping experience.",
      status: "PROJECT 01",
      image: "/manus-storage/md-sami-project-orbit_afcfc1fd.png",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      live: "#veroir-placeholder",
      github: "#veroir-github-placeholder",
    },
    {
      id: "outfit-recommender",
      number: "02",
      title: "OUTFIT RECOMMENDER AI",
      subtitle: "AI-Powered Fashion Recommendation System",
      description:
        "An AI-powered application that recommends outfits based on user preferences, style, occasion and other relevant inputs.",
      status: "CURRENTLY BUILDING",
      image: "/manus-storage/md-sami-project-notes_c7beefbb.png",
      technologies: [
        "Python",
        "Machine Learning",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      live: "#outfit-placeholder",
      github: "#outfit-github-placeholder",
    },
    {
      id: "coming-soon",
      number: "03",
      title: "COMING SOON",
      subtitle: "The next idea is taking shape",
      description:
        "A future project will appear here as the next chapter of the learning journey takes form.",
      status: "IN THE WORKS",
      image: undefined,
      technologies: ["Ideas", "Experiments", "Learning"],
      live: "#coming-soon-placeholder",
      github: "#coming-soon-github-placeholder",
    },
  ],
  journey: [
    {
      year: "2024",
      label: "FOUNDATIONS",
      description: "Programming fundamentals and Computer Science basics.",
    },
    {
      year: "2025",
      label: "BUILDING",
      description: "DSA, Web Development and practical projects.",
    },
    {
      year: "2026",
      label: "EXPLORING",
      description: "Full-stack development and AI/ML.",
    },
    {
      year: "NOW",
      label: "NEXT CHAPTER",
      description:
        "Preparing for internships, placements and becoming a stronger developer.",
    },
  ],
} as const;

export type SkillCategory = keyof typeof portfolio.skills;
