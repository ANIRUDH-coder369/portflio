export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile';
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  note?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export const portfolioData = {
  hero: {
    name: "Anirudh Sontakke",
    title: "MERN Stack Developer",
    subtitle: "MERN Stack Developer ",
    image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    githubUrl: "https://github.com/ANIRUDH-coder369",
    linkedinUrl: "https://www.linkedin.com/in/anirudh-sontakke-67877a31a/?isSelfProfile=true",
  },
  stats: {
    yearsExperience: "1+",
    projectsCompleted: "1+",
    technologies: "1+",
    happyClients: "1+",
  },
  bio: {
    introduction:
      "I'm Anirudh Sontakke, a MERN Stack Developer based in Chhatrapati Sambhajinagar, Maharashtra. With a strong foundation in web development, I specialize in creating responsive and user-friendly web applications.",
    journey:
      "My journey in web development began during my studies where I developed a passion for creating elegant solutions to complex problems. Since then, I've worked on various projects ranging from e-commerce platforms to real-time communication applications.",
    current:
      "I create scalable web and mobile applications using React, Next.js, Node.js, and modern cloud technologies, collaborating with teams to deliver high-quality products that exceed expectations.",
  },
  personalInfo: {
    dateOfBirth: "07 March 2006",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    languages: ["English", "Hindi", "Marathi"],
  },
  contact: {
    email: "anirudhsontakke@gmail.com",
    phone: "+91 98765 43210",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
  },
  education: [
    {
      degree: "12th class",
    },

  ] as Education[],
  learningApproach: [
    {
      title: "Continuous Learning",
      description:
        "I regularly take online courses and follow industry blogs to stay updated with the latest trends and technologies.",
    },
    {
      title: "Hands-On Projects",
      description: "I build real-world projects to practice and reinforce my learning.",
    },
    {
      title: "Developer Community",
      description:
        "I actively participate in developer communities, attend meetups, and contribute to open-source projects when possible.",
    },
  ],
  skills: [
    { name: "Html" },
    { name: "CSS" },
    { name: "Javascrit" },
    { name: "Bootstrep" },
    { name: "React" },
    { name: "Node" },
    { name: "MongoDB" },
    { name: "Express.js" },
    { name: "Mongoose" },
    { name: "Shadcn UI" },
    { name: "RTK" },
    { name: "Tailwind CSS" },
    { name: "TypeScript" },
    { name: "GitHub" },
    { name: "Git" },
    { name: "Vs code" },
    { name: "Gitbash" },
    { name: "MERN stack" },

  ] as Skill[],
  projects: [
    {
      id: "1",
      title: "🌾 Kedar Krushi Seva Kendra - Billing & Inventory",
      description:
        "A powerful inventory and billing management system ",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2023/4/302663181/YM/KA/MO/188616549/product-jpeg-1000x1000.jpg",
      category: "web",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Shadcn UI",
        "RTK",
        "Tailwind CSS",
        "TypeScript",
      ],
      liveUrl: "https://kdedar-client-seven.vercel.app",
      githubUrl: "https://github.com/17komalkshirsagar",
      featured: true,
    },
  ] as Project[],
};
