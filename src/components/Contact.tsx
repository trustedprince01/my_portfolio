
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real application, you would send this data to a server
    alert("Message sent! (This is just a demo)");
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
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
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
        >
          CONTACT
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold mb-6">Let's connect!</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-8">
              Get in touch to start a conversation about your project. You can expect 
              a prompt response with an honest assessment of whether I'm a good fit for your needs.
            </p>
            
            <div className="space-y-4 text-xs sm:text-sm text-gray-400">
              <p>• Please send a detailed request that is easy to understand.</p>
              <p>• I would love to know what high priority, medium priority, and low priority features/functionalities entails.</p>
              <p className="text-yellow-400">• I would happily consider your job-type, but for the Hourly one is recommended.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 p-4 sm:p-6 rounded-lg backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">Contact me</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Name" 
                          {...field} 
                          className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11"
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Email" 
                          {...field} 
                          className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11"
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          className="w-full min-h-[100px] sm:min-h-[120px] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm sm:text-base text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none"
                          placeholder="Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-white/90 transition-all group text-sm sm:text-base"
                >
                  SUBMIT
                  <Send className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
