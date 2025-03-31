import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Database, Globe, Server, Layers, Command } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

import { Typewriter } from 'react-simple-typewriter';

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
              <br />
              <span className="text-blue-400">
                <Typewriter
                  words={[
                    "I'm a Software Developer",
                    "I'm a Blockchain Enthusiast",
                    "I build Web3 Applications",
                    "I love Open Source"
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </span>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-h-[400px] overflow-y-auto">
                {techStack.map((tech, index) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: [0, -8, 0], // Floating animation
                        }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: index * 0.2 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
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

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24"
          >
            <h2 className="text-3xl font-bold mb-8 text-left">Testimonials</h2>
            <div className="relative overflow-x-auto scrollbar-hide flex gap-6 snap-x snap-mandatory px-2 sm:px-0">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg min-w-[300px] sm:min-w-[350px] snap-center"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full border border-white/20"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.review}"</p>
                  <div className="flex mt-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-yellow-400 ${i < testimonial.rating ? "opacity-100" : "opacity-50"}`}>⭐</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
  // Frontend Development
  {
    name: "HTML",
    icon: () => <img src="/images/html.svg" alt="HTML Logo" className="h-10 w-10" />,
    color: "text-orange-400",
    description: "Markup language for web pages"
  },
  {
    name: "CSS",
    icon: () => <img src="/images/css.svg" alt="CSS Logo" className="h-10 w-10" />,
    color: "text-blue-500",
    description: "Styling language for web pages"
  },
  {
    name: "JavaScript",
    icon: () => <img src="/images/javascript.svg" alt="Java Script" className="h-10 w-10" />, 
    color: "text-yellow-500",
    description: "Programming language for web development"
  },
  {
    name: "React",
    icon: () => <img src="/images/react.svg" alt="React" className="h-10 w-10" />,
    color: "text-blue-400",
    description: "Building interactive UIs with React"
  },
  {
    name: "Tailwind CSS",
    icon: () => <img src="/images/tailwind.svg" alt="tailwind" className="h-10 w-10" />,
    color: "text-cyan-400",
    description: "Utility-first CSS framework"
  },
  {
    name: "Bootstrap",
    icon: () => <img src="/images/bootstrap.svg" alt="Bootstrap Logo" className="h-10 w-10" />,
    color: "text-purple-500",
    description: "CSS framework for responsive design"
  },
  {
    name: "Figma",
    icon: () => <img src="/images/figma.svg" alt="figma logo" className="h-10 w-10" />,
    color: "text-purple-500",
    description: "Designs responsive design"
  },

  // Backend Development
  {
    name: "Python (Django)",
    icon: () => <img src="/images/python.svg" alt="Python Logo" className="h-10 w-10" />, 
    color: "text-blue-400",
    description: "Backend web development framework"
  },
  {
    name: "Node.js",
    icon: Server,
    color: "text-green-400",
    description: "JavaScript runtime for backend development"
  },
  {
    name: "Firebase Auth",
    icon: () => <img src="/images/firebase.svg" alt="Firebase Logo" className="h-10 w-10" />,
    color: "text-yellow-400",
    description: "Authentication for web and mobile apps"
  },

  // Database Management
  {
    name: "PostgreSQL",
    icon: Database,
    color: "text-green-500",
    description: "Relational database management system"
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "text-green-500",
    description: "NoSQL database for modern applications"
  },
  {
    name: "Firebase Firestore",
    icon: Database,
    color: "text-green-400",
    description: "NoSQL cloud database from Firebase"
  },

  // DevOps & Deployment
  {
    name: "Vercel",
    icon: Globe,
    color: "text-blue-400",
    description: "Cloud platform for static sites and serverless functions"
  },
  {
    name: "Netlify",
    icon: Globe,
    color: "text-green-400",
    description: "Hosting and automation platform"
  },
  {
    name: "AWS",
    icon: Globe,
    color: "text-yellow-500",
    description: "Cloud hosting and services"
  },
  {
    name: "Render",
    icon: Globe,
    color: "text-indigo-500",
    description: "Cloud platform for web applications"
  },
  {
    name: "GitHub",
    icon: () => <img src="/images/github.svg" alt="github logo" className="h-10 w-10" />,
    color: "text-gray-500",
    description: "Automates code integration, testing, and deployment."

  }
];

const testimonials = [
  {
    name: "John Doe",
    role: "Product Designer",
    review: "Prince is an exceptional developer! His attention to detail and creative approach made our project a success.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jane Smith",
    role: "Startup Founder",
    review: "Working with Prince was a game changer! His web development skills are top-notch.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Brown",
    role: "Blockchain Engineer",
    review: "Prince's understanding of smart contracts and Web3 is truly impressive. Highly recommend him!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/76.jpg"
  }
];


export default Hero;
