
type Skill = {
  name: string;
  level: number;
};

type SkillsData = {
  frontend: Skill[];
  backend: Skill[];
  other: Skill[];
};

export const skillsData: SkillsData = {
  frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "Redux", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "Python (Django)", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 70 },
    { name: "Firebase", level: 85 },
    { name: "RESTful APIs", level: 85 },
  ],
  other: [
    { name: "Git/GitHub", level: 90 },
    { name: "Figma", level: 75 },
    { name: "Flutter", level: 70 },
    { name: "Jest", level: 70 },
    { name: "Webpack", level: 65 },
    { name: "Vercel/Netlify", level: 80 },
    { name: "Cloudinary", level: 75 },
    { name: "Agile/Scrum", level: 80 },
  ],
};
