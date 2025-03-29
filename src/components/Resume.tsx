
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
          <h2 className="text-3xl font-bold mb-4">RESUME</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My education, work experience, skills, and qualifications
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
              <h4 className="text-lg font-bold border-b border-white/20 pb-2 mb-4">CAREER GOAL STATEMENT</h4>
              <p className="text-sm text-blue-100">
                Aspiring Web3 & Software Developer with a passion for backend development and 
                blockchain technology. Currently building my skills in smart contracts, web development, 
                and API design, aiming to merge traditional backend expertise with emerging Web3 innovations.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold border-b border-white/20 pb-2 mb-4">SKILLS</h4>
              <div className="text-sm space-y-2 text-blue-100">
                <p>UI/UX Design (Figma)</p>
                <p>Tools & Platforms</p>
                <p>Git/GitHub, Postman, Linux Terminal</p>
                <p>Desktop Publishing (MS Word, PowerPoint)</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold border-b border-white/20 pb-2 mb-4">HOBBIES & INTERESTS</h4>
              <ul className="text-sm space-y-2 text-blue-100 list-disc pl-5">
                <li>Surfing the internet & researching new tech</li>
                <li>Solving algorithmic challenges & coding puzzles</li>
                <li>Watching documentaries & historical content</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold border-b border-white/20 pb-2 mb-4">REFERENCES</h4>
              <p className="text-sm text-blue-100">Available upon request.</p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex gap-2 items-center">
                <span className="text-blue-300">📧</span>
                <span>chibuzorprince68@gmail.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-blue-300">📱</span>
                <span>+2347048255509</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-blue-300">📍</span>
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-blue-300">🔗</span>
                <a href="https://github.com/trustedprince01" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                  github.com/trustedprince01
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold">COURSES</h3>
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
                  <span className="text-white text-xl">💼</span>
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
                      <li>Created full-stack projects like a Food Ordering Website, City Guide App, and Expense Tracker API.</li>
                      <li>Currently learning Web3 development, focusing on smart contracts and blockchain integration.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold">NOTABLE PROJECTS</h3>
              </div>
              
              <div className="relative pl-8 pb-6 border-l border-blue-800/50 ml-5">
                <div className="mb-6">
                  <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 mt-1"></div>
                  <div>
                    <h4 className="font-bold">E-Commerce Website for Eyewear (HTML, CSS, JavaScript & MySQL)</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      Built an online store with user authentication, shopping cart & payment integration
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 mt-1"></div>
                  <div>
                    <h4 className="font-bold">City Guide App (Flutter & Firebase)</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      Developed a mobile app with Google Maps API & Firebase for location-based services
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 mt-1"></div>
                  <div>
                    <h4 className="font-bold">Food Ordering Website (Django & MySQL)</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      Created a food ordering system with user authentication & order management
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2 mt-1"></div>
                  <div>
                    <h4 className="font-bold">Expense Tracker API (Django REST Framework)</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      Designed a secure API for tracking expenses with JWT authentication & CRUD operations
                    </p>
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
