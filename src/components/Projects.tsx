import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise SIEM Implementation",
      description: "Designed and deployed a comprehensive SIEM solution for a Fortune 500 company, reducing incident response time by 60% and improving threat detection accuracy.",
      technologies: ["Splunk", "Python", "REST APIs", "Machine Learning"],
      type: "Enterprise Security",
      icon: Shield
    },
    {
      title: "Automated Vulnerability Scanner",
      description: "Built a custom vulnerability scanning platform that integrates with CI/CD pipelines, scanning 10,000+ endpoints daily with minimal false positives.",
      technologies: ["Python", "Docker", "Jenkins", "PostgreSQL"],
      type: "Security Automation",
      icon: Github
    },
    {
      title: "Cloud Security Framework",
      description: "Developed a multi-cloud security framework ensuring compliance across AWS, Azure, and GCP environments with automated policy enforcement.",
      technologies: ["Terraform", "Go", "AWS", "Azure", "GCP"],
      type: "Cloud Security",
      icon: ExternalLink
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-cyber">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of cybersecurity projects demonstrating technical expertise, 
            innovative solutions, and measurable impact on organizational security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-accent group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-accent border-accent">
                    {project.type}
                  </Badge>
                  <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10"
                >
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;