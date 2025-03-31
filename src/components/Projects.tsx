
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Eye } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with shopping cart and payment processing",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity tool for organizing and tracking personal and team tasks",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting with location-based services",
    tags: ["JavaScript", "REST API", "CSS"],
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A platform for connecting and sharing with friends",
    tags: ["React", "GraphQL", "PostgreSQL"],
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A showcase of my skills and projects",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A content management system for publishing articles",
    tags: ["Next.js", "MDX", "Prisma"],
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
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
          className="text-3xl font-bold text-center mb-4"
        >
          PORTFOLIO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-8"
        >
          Detailed showcase of my complete projects with live demos and source code
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-transparent border border-white/10 hover:border-white/20 transition-all overflow-hidden h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="flex-grow flex flex-col p-6 bg-black/80">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                    <a href={project.githubUrl} className="text-gray-400 hover:text-white flex items-center text-xs">
                      <Github className="mr-1 h-3 w-3" /> View Code
                    </a>
                    <a href={project.demoUrl} className="text-gray-400 hover:text-white flex items-center text-xs">
                      <Eye className="mr-1 h-3 w-3" /> Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
