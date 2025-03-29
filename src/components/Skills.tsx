
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Redux", level: 80 },
];

const backendSkills = [
  { name: "Node.js", level: 80 },
  { name: "Express", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Firebase", level: 85 },
  { name: "RESTful APIs", level: 85 },
];

const otherSkills = [
  { name: "Git/GitHub", level: 90 },
  { name: "Figma", level: 75 },
  { name: "Jest", level: 70 },
  { name: "Webpack", level: 65 },
  { name: "Agile/Scrum", level: 80 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-300">{name}</span>
      <span className="text-gray-400">{level}%</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  
  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="grid grid-cols-12 grid-rows-12 gap-8 h-full w-full opacity-10">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="col-span-1 row-span-1 border-t border-l border-white/10"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          SKILLS
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <div className="flex mb-6 border-b border-white/10">
            <button
              onClick={() => setActiveTab("frontend")}
              className={`flex-1 pb-3 text-center transition-colors ${
                activeTab === "frontend" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`flex-1 pb-3 text-center transition-colors ${
                activeTab === "backend" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("other")}
              className={`flex-1 pb-3 text-center transition-colors ${
                activeTab === "other" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Other
            </button>
          </div>
          
          <div className="mt-6">
            {activeTab === "frontend" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </motion.div>
            )}
            
            {activeTab === "backend" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </motion.div>
            )}
            
            {activeTab === "other" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {otherSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
