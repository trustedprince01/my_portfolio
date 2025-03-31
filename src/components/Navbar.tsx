
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-bold text-white">P</Link>
        <div className="flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">ABOUT</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">PORTFOLIO</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">SKILLS</a>
          <a href="#resume" className="text-gray-300 hover:text-white transition-colors">EXPERIENCE</a>
        </div>
        <Button size="sm" asChild className="bg-white text-black hover:bg-white/90 rounded-full">
          <a href="#contact">CONTACT ME</a>
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
