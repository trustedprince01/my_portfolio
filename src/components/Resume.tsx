
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Code, ArrowRight } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 min-h-screen flex items-center justify-center text-white relative">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">EXPERIENCE</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My education, work experience, and professional growth
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Left Column - Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-900 rounded-lg p-6 text-white"
          >
            <div className="mb-8 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white/20">
                <img 
                  src="/lovable-uploads/f799dc38-e25d-4235-8fe4-bbfc5503fecb.png" 
                  alt="Prince" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">CHIBUZOR PRINCE</h3>
              <p className="text-blue-200">Developer</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold border-b border-white/20 pb-2 mb-4">CORE SKILLS</h4>
              <div className="text-sm space-y-2 text-blue-100">
                <div className="flex justify-between items-center">
                  <span>UI/UX Design</span>
                  <div className="w-1/2 bg-blue-800/30 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>HTML/CSS</span>
                  <div className="w-1/2 bg-blue-800/30 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>JavaScript</span>
                  <div className="w-1/2 bg-blue-800/30 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Python</span>
                  <div className="w-1/2 bg-blue-800/30 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full w-4/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tools & Git</span>
                  <div className="w-1/2 bg-blue-800/30 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold border-b border-white/20 pb-2 mb-4">CONTACT INFO</h4>
              <div className="text-sm space-y-2 text-blue-100">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  chibuzorprince68@gmail.com
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📱</span>
                  +2347048255509
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Lagos, Nigeria
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🔗</span>
                  <a href="https://github.com/trustedprince01" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                    github.com/trustedprince01
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Experience and Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-lg p-6 text-white"
          >
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-1">CHIBUZOR PRINCE</h3>
                <p className="text-blue-300">Developer</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            
            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <GraduationCap className="text-white h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">EDUCATION</h3>
              </div>
              
              <div className="relative pl-8 pb-6 border-l border-blue-800/50 ml-5">
                <div className="mb-4">
                  <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 mt-1"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <span className="text-blue-300 font-semibold">2023-2024</span>
                    <div>
                      <h4 className="font-bold">Software Engineering</h4>
                      <p className="text-blue-300">Aptech Computer Education</p>
                      <ul className="list-disc pl-5 mt-2 text-sm text-gray-300">
                        <li>Figma UI/UX Design</li>
                        <li>HTML, CSS and JavaScript Fundamentals</li>
                        <li>Python Basics & Backend Development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <Briefcase className="text-white h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">EXPERIENCE</h3>
              </div>
              
              <div className="relative pl-8 pb-6 border-l border-blue-800/50 ml-5">
                <div className="mb-4">
                  <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 mt-1"></div>
                  <div>
                    <p className="font-medium text-gray-300">
                      Gained hands-on experience in UI/UX design, frontend development, and backend 
                      programming while working on real-world projects.
                    </p>
                    <ul className="list-disc pl-5 mt-3 text-sm text-gray-300 space-y-2">
                      <li>Designed wireframes & prototypes using Figma.</li>
                      <li>Built web interfaces with HTML, CSS, and JavaScript.</li>
                      <li>Developed backend systems using Python, Django, and MySQL.</li>
                      <li>Currently learning Web3 development, focusing on smart contracts and blockchain integration.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <Code className="text-white h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">KEY PROJECT HIGHLIGHTS</h3>
              </div>
              
              <div className="relative pl-8 pb-6 border-l border-blue-800/50 ml-5">
                <div className="mb-4">
                  <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 mt-1"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-900/30 p-4 rounded-lg">
                      <h4 className="font-bold">E-Commerce Website</h4>
                      <p className="text-xs text-blue-300">HTML, CSS, JavaScript & MySQL</p>
                      <p className="text-sm text-gray-300 mt-1">
                        Created core shopping functionality with secure payment system
                      </p>
                    </div>
                    
                    <div className="bg-blue-900/30 p-4 rounded-lg">
                      <h4 className="font-bold">City Guide App</h4>
                      <p className="text-xs text-blue-300">Flutter & Firebase</p>
                      <p className="text-sm text-gray-300 mt-1">
                        Implemented location services and user recommendations
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <a href="#projects" className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center">
                      View full portfolio details <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
