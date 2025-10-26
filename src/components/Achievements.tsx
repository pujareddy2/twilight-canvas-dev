import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Medal, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Flipkart Grid",
      description: "Participant",
      year: "2024",
    },
    {
      icon: Award,
      title: "AI Hackdates",
      description: "Runner-up",
      year: "2024",
    },
    {
      icon: Medal,
      title: "Infinity 2K25",
      description: "Runner-up",
      year: "2025",
    },
    {
      icon: Star,
      title: "State 1st Rank",
      description: "Intermediate Education",
      year: "2021",
    },
    {
      icon: Trophy,
      title: "State-Level English Literacy",
      description: "3× Competition Winner",
      year: "2018-2020",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-glow">
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="glow-purple bg-card/50 backdrop-blur-sm border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <achievement.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-base mb-2">
                      {achievement.description}
                    </p>
                    <span className="text-sm text-primary font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
