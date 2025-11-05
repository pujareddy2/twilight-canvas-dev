import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Medal, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Flipkart GRiD",
      description: "Top Performer",
      year: "2024",
    },
    {
      icon: Award,
      title: "AI Hack Days 2025",
      description: "Runner-Up",
      year: "2025",
    },
    {
      icon: Medal,
      title: "Infinity 2K25",
      description: "3rd Place",
      year: "2025",
    },
    {
      icon: Star,
      title: "State First Rank",
      description: "Intermediate 2022",
      year: "2022",
    },
    {
      icon: Trophy,
      title: "State-Level English Literary",
      description: "3× Winner",
      year: "2018-2020",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="achievements">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow animate-slide-down">
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="glow-purple bg-card/50 backdrop-blur-sm border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-500 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg transition-all duration-300 group-hover:bg-secondary/30 group-hover:scale-110 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <achievement.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
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
