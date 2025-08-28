import { Card } from "@/components/ui/card";
import { Shield, Code, Database, Network } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Shield,
      title: "Security Architecture",
      description: "Designing robust security frameworks and implementing defense-in-depth strategies."
    },
    {
      icon: Code,
      title: "Secure Development",
      description: "Building secure applications with industry best practices and threat modeling."
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Implementing encryption, access controls, and compliance frameworks."
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Analyzing traffic, detecting threats, and securing network infrastructure."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-cyber">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate cybersecurity engineer with expertise in protecting digital assets, 
            building secure systems, and staying ahead of emerging threats. My approach combines 
            technical excellence with strategic thinking to create comprehensive security solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-accent"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;