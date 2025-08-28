import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "harshil.varia@email.com",
      href: "mailto:harshil.varia@email.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/harshilvaria",
      href: "https://linkedin.com/in/harshilvaria"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/harshilvaria",
      href: "https://github.com/harshilvaria"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available for Remote Work",
      href: null
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss cybersecurity challenges, collaborate on projects, 
            or explore new opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={index}
                className={`p-6 bg-card/30 backdrop-blur-sm border-border transition-all duration-300 ${
                  method.href 
                    ? 'hover:border-primary/50 hover:shadow-accent cursor-pointer' 
                    : ''
                }`}
                {...(method.href && {
                  onClick: () => window.open(method.href, '_blank', 'noopener,noreferrer')
                })}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {method.value}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-cyber border-border">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Ready to Secure Your Future?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you need security consulting, threat assessment, or want to discuss 
                the latest in cybersecurity innovations, I'm here to help.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber transition-all duration-300 hover:shadow-glow"
              >
                Get In Touch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;