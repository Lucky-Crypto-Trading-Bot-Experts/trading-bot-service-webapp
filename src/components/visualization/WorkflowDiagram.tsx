
import { ArrowRight, Bot, BarChart, Cpu, Zap, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WorkflowDiagram = () => {
  const steps = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Select Bot",
      description: "Choose from our specialized Solana trading bots"
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Configure",
      description: "Set your trading parameters and risk tolerance"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Deploy",
      description: "Launch your bot on the Solana network"
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Monitor",
      description: "Track performance with real-time analytics"
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Secure Profits",
      description: "Automated take-profit and stop-loss features"
    }
  ];

  return (
    <div className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="relative">
          {/* Background connection line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-muted transform -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <Card className="w-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-background">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                      {step.icon}
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-primary mx-2 mt-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
