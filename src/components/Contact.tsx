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
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-glow">
          Get In Touch
        </h2>
        
        <Card className="glow-soft bg-card/50 backdrop-blur-sm border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground text-center">
              Let's Build Something Amazing Together
            </CardTitle>
            <p className="text-muted-foreground text-center text-lg mt-2">
              I'm always interested in hearing about new projects and opportunities
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary text-lg h-12 glow-soft"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary text-lg h-12 glow-soft"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background/50 border-primary/20 focus:border-primary text-lg resize-none glow-soft"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg py-6 glow-soft hover:bg-primary hover:text-background transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-primary/20">
              <p className="text-center text-muted-foreground mb-4 text-lg">Connect with me</p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="glow-purple border-2 w-12 h-12"
                  onClick={() => window.open('mailto:puja.midde@example.com')}
                >
                  <Mail className="w-6 h-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="glow-purple border-2 w-12 h-12"
                  onClick={() => window.open('https://linkedin.com/in/puja-midde', '_blank')}
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="glow-purple border-2 w-12 h-12"
                  onClick={() => window.open('https://github.com/puja-midde', '_blank')}
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
