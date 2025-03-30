
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Database, Globe, Server, Layers, Command } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const Hero = () => {
  return (
    <section className="min-h-screen py-20 md:py-28 relative overflow-hidden bg-black text-white">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="grid grid-cols-12 grid-rows-12 gap-8 h-full w-full opacity-10">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="col-span-1 row-span-1 border-t border-l border-white/10"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Hey, I'm <span className="text-gray-400">Prince</span> <span className="text-yellow-400">👋</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Hello there! I'm a passionate web developer focused on creating clean, intuitive web designs. I love bringing ideas to life with elegant and effective solutions, crafting user experiences that inspire and delight.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-[1px] transition-transform" />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex gap-2 mb-3">
                  {service.icons.map((Icon, i) => (
                    <Icon key={i} className={`h-5 w-5 ${service.iconColors[i]}`} />
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-24"
          >
            <h2 className="text-3xl font-bold mb-8 text-left">Tech Stack</h2>
            <TooltipProvider>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {techStack.map((tech, index) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1, 
                          y: [0, -8, 0], // Floating animation
                          transition: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.2
                          }
                        }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        <tech.icon className={`h-10 w-10 ${tech.color}`} />
                        <span className="mt-3 text-sm text-gray-300">{tech.name}</span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-900 border border-gray-700 text-white">
                      <p>{tech.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Web & UI Design",
    icons: [ArrowRight, ArrowRight, ArrowRight],
    iconColors: ["text-red-400", "text-blue-400", "text-green-400"],
    description: "Creating beautiful and functional interfaces with a focus on user experience and accessibility."
  },
  {
    title: "SEO & Webmaster Services",
    icons: [ArrowRight, ArrowRight, ArrowRight],
    iconColors: ["text-yellow-400", "text-purple-400", "text-yellow-400"],
    description: "Optimizing websites for search engines to increase visibility and drive organic traffic."
  },
  {
    title: "Full-stack Development",
    icons: [ArrowRight, ArrowRight, ArrowRight],
    iconColors: ["text-blue-400", "text-red-400", "text-green-400"],
    description: "Building complete web applications from front-end interfaces to back-end systems and databases."
  },
  {
    title: "Full-stack Development",
    icons: [ArrowRight, ArrowRight, ArrowRight],
    iconColors: ["text-blue-400", "text-red-400", "text-green-400"],
    description: "Building complete web applications from front-end interfaces to back-end systems and databases."
  }
];

const techStack = [
  {
    name: "React",
    icon: Code,
    color: "text-blue-400",
    description: "Building interactive UIs with React"
  },
  {
    name: "Node.js",
    icon: Server,
    color: "text-green-400",
    description: "Server-side JavaScript runtime"
  },
  {
    name: "TypeScript",
    icon: Command,
    color: "text-blue-500",
    description: "Strongly typed programming language"
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "text-green-500",
    description: "NoSQL database for modern applications"
  },
  {
    name: "Tailwind CSS",
    icon: Layers,
    color: "text-cyan-400",
    description: "Utility-first CSS framework"
  },
  {
    name: "Ethereum",
    icon: Globe,
    color: "text-purple-400",
    description: "Smart contract development"
  },
  {
    name: "Solidity",
    icon: Code,
    color: "text-yellow-500",
    description: "Smart contract programming language"
  },
  {
    name: "Web3.js",
    icon: Globe,
    color: "text-orange-400",
    description: "Ethereum JavaScript API"
  }
];

export default Hero;
