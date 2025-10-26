import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/professional_photo.jpg";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Radial gradient background */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <p className="text-muted text-base mb-3">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-glow my-0 mx-[222px] px-[22px] py-[22px]">
              Puja Midde
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-primary mx-0 my-0 px-[21px] py-[10px]">
              AI-Integrated Full Stack Developer | Building Smart Applications
            </h2>
            <p className="text-muted text-base sm:text-lg mb-6 leading-relaxed max-w-2xl lg:mx-0 mx-[11px] py-[22px] px-[40px]">
              I design intelligent, scalable applications that merge AI and full-stack development to deliver real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="/Puja_Cv.pdf" download>
                <Button size="lg" className="glow-soft text-base px-6 py-5">
                  Download CV
                </Button>
              </a>
              <Button size="lg" variant="outline" className="glow-purple text-base px-6 py-5 border-2" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="glow-purple text-base px-6 py-5 border-2" onClick={() => document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl animate-glow-pulse" />
              <img src={profilePhoto} alt="Puja Midde - AI-Integrated Full Stack Developer" className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-3xl border-2 border-primary/20" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>;
};
export default Hero;