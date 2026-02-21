import { Code, Brain, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "Languages",
      items: ["Python", "Java", "C", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      items: [
        "Supervised Learning (Logistic Regression, Naive Bayes, KNN, SVM)",
        "Model Evaluation (Precision, Recall, F1-score)",
        "NLP (TF-IDF, Text Classification)",
        "Computer Vision (OpenCV)",
        "LLM Integration (OpenAI API)",
        "Generative AI Concepts",
      ],
    },
    {
      icon: Database,
      title: "Data & Tools",
      items: ["Pandas, NumPy", "MySQL", "Git & GitHub", "Flask", "Power BI", "Oracle Cloud, Google Cloud"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="skills">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow animate-slide-down">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="glow-soft bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <skill.icon className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(72,209,204,0.5)]" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-muted-foreground text-sm flex items-center hover:text-primary transition-all duration-300 cursor-default hover:translate-x-1"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:animate-pulse" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
