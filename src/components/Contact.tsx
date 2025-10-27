import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow animate-slide-down">
          Let's Connect
        </h2>
        
        <Card className="glow-soft bg-card/50 backdrop-blur-sm border-2 border-primary/20 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-xl text-foreground text-center">
              Let's Build Something Amazing Together
            </CardTitle>
            <p className="text-muted-foreground text-center text-base mt-2">
              I'm always interested in hearing about new projects and opportunities
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary text-base h-11 transition-all duration-300 focus:shadow-[0_0_20px_rgba(72,209,204,0.3)]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary text-base h-11 transition-all duration-300 focus:shadow-[0_0_20px_rgba(72,209,204,0.3)]"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 border-primary/20 focus:border-primary text-base resize-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(72,209,204,0.3)]"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-base py-6 glow-soft hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-center text-muted-foreground mb-3 text-base">Connect with me</p>
              <div className="flex flex-col gap-2 text-center text-sm text-muted-foreground mb-4">
                <p className="hover:text-primary transition-colors duration-300">Email: middepuja1005@gmail.com</p>
                <p className="hover:text-primary transition-colors duration-300">Phone: +91 9121290915</p>
              </div>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="glow-purple border-2 w-12 h-12 transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('mailto:middepuja1005@gmail.com')}
                >
                  <Mail className="w-6 h-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="glow-purple border-2 w-12 h-12 transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('https://linkedin.com/in/puja-midde3', '_blank')}
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="glow-purple border-2 w-12 h-12 transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('https://github.com/pujareddy2', '_blank')}
                >
                  <Github className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
