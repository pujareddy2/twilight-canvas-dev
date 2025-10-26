import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/professional_photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Radial gradient background */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <p className="text-muted text-lg mb-4">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-glow">
              Puja Midde
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-primary">
              AI/ML Developer & Full Stack Engineer
            </h2>
            <p className="text-muted text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate about building intelligent systems that solve real-world problems. 
              Specializing in AI/ML, computer vision, and full-stack development with a focus 
              on creating impactful solutions for healthcare, education, and legal tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/Puja_Cv.pdf" download>
                <Button size="lg" className="glow-soft text-lg px-8 py-6">
                  Download CV
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="glow-purple text-lg px-8 py-6 border-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl animate-glow-pulse" />
              <img 
                src={profilePhoto} 
                alt="Puja Midde - AI/ML Developer" 
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border-2 border-primary/20"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
