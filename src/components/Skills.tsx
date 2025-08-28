import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Security Frameworks",
      skills: ["NIST", "ISO 27001", "OWASP", "CIS Controls", "MITRE ATT&CK"]
    },
    {
      title: "Security Tools",
      skills: ["Splunk", "Wireshark", "Nmap", "Burp Suite", "Metasploit", "Nessus"]
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "Go", "PowerShell", "Bash", "SQL"]
    },
    {
      title: "Cloud Security",
      skills: ["AWS Security", "Azure Security", "GCP", "Docker", "Kubernetes"]
    },
    {
      title: "Compliance",
      skills: ["SOC 2", "GDPR", "HIPAA", "PCI DSS", "FISMA"]
    },
    {
      title: "Incident Response",
      skills: ["Threat Hunting", "Forensics", "SIEM", "EDR", "Malware Analysis"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning security frameworks, cutting-edge tools, 
            and emerging technologies in the cybersecurity landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
                <span className="w-2 h-8 bg-gradient-accent rounded-full mr-3" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;