import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cyber.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Harshil Varia
          </h1>
          <div className="text-2xl md:text-3xl text-foreground mb-4">
            Cybersecurity Engineer
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Protecting digital landscapes through advanced security engineering, 
            threat analysis, and innovative defense strategies.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber transition-all duration-300 hover:shadow-glow"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyber-purple rounded-full animate-pulse delay-500" />
      </div>
    </section>
  );
};

export default Hero;