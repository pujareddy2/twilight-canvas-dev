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
            <p className="text-muted text-base mb-3 animate-slide-down">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-glow my-0 mx-0 py-0 px-0 animate-slide-up">
              Puja Midde
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-primary mx-0 my-0 px-0 py-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              AI-Integrated Full Stack Developer | Building Smart Applications
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed max-w-2xl lg:mx-0 mx-0 px-0 py-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              I design intelligent, scalable applications that merge AI and full-stack development to deliver real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a href="/Puja_Cv.pdf" download>
                <Button size="lg" className="glow-soft text-base px-8 py-6 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(72,209,204,0.5)]">
                  Download CV
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="glow-purple text-base px-8 py-6 border-2 transition-all duration-500 hover:scale-105" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glow-purple text-base px-8 py-6 border-2 transition-all duration-500 hover:scale-105" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl animate-glow-pulse" />
              <img 
                src={profilePhoto} 
                alt="Puja Midde - AI-Integrated Full Stack Developer" 
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-3xl border-2 border-primary/20 transition-all duration-500 hover:scale-105 hover:border-primary/40" 
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary drop-shadow-[0_0_10px_rgba(72,209,204,0.7)]" />
        </div>
      </div>
    </section>
  );
};
export default Hero;