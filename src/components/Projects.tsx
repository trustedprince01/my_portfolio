
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Eye, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with shopping cart and payment processing",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Frontend",
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity tool for organizing and tracking personal and team tasks",
    tags: ["React", "Firebase", "Tailwind CSS"],
    category: "Frontend",
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting with location-based services",
    tags: ["JavaScript", "REST API", "CSS"],
    category: "Frontend",
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Social Media API",
    description: "Backend services for a social networking platform",
    tags: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A showcase of my skills and projects",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "UI/UX",
    image: "/images/Portfolio.png",
    githubUrl: "https://github.com/trustedprince01/my_portfolio",
    demoUrl: "#"
  },
  {
    id: 6,
    title: "Blog Platform Design",
    description: "User interface design for a content management system",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/lovable-uploads/d06b5809-1a8d-4942-9949-ffc2b8c1d125.png",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/proto/example-link" // Example Figma prototype link
  }
];

const categories = ["All", "Frontend", "Backend", "UI/UX"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <section id="projects" className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
        >
          PORTFOLIO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-8"
        >
          Detailed showcase of my complete projects with live demos and source code
        </motion.p>
        
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1); // Reset to first page when changing category
              }}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" 
                  : "border-white/20 text-gray-400 hover:text-white hover:border-white/40"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent border border-white/10 hover:border-white/20 transition-all overflow-hidden h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="flex-grow flex flex-col p-4 sm:p-6 bg-black/80">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                      {/* Only show View Code for non-UI/UX projects */}
                      {project.category !== "UI/UX" ? (
                        <a href={project.githubUrl} className="text-gray-400 hover:text-white flex items-center text-xs">
                          <Github className="mr-1 h-3 w-3" /> View Code
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500">Design Project</span>
                      )}
                      <a 
                        href={project.demoUrl} 
                        className="text-gray-400 hover:text-white flex items-center text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="mr-1 h-3 w-3" /> 
                        {project.category === "UI/UX" ? "View Design" : "Live Demo"}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                    className={`${
                      currentPage === i + 1 
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 border-none" 
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default Projects;
