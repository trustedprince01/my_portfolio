
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-primary rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <Tabs defaultValue="frontend">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="frontend" className="flex-1">Frontend</TabsTrigger>
                <TabsTrigger value="backend" className="flex-1">Backend</TabsTrigger>
                <TabsTrigger value="other" className="flex-1">Other</TabsTrigger>
              </TabsList>
              
              <TabsContent value="frontend">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </TabsContent>
              
              <TabsContent value="backend">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </TabsContent>
              
              <TabsContent value="other">
                {otherSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
