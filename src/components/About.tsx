
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card>
              <CardContent className="p-0 overflow-hidden">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-square flex items-center justify-center">
                  <div className="text-6xl">👋</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate front-end developer with expertise in React, TypeScript, and 
              modern UI frameworks. With a strong focus on creating intuitive and responsive 
              user interfaces, I strive to build applications that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
