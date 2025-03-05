
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
          {t("hero.title")}
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up max-w-3xl mx-auto text-base md:text-lg"
          style={{ animationDelay: "0.1s" }}
        >
          {t("hero.subtitle")}
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Button size="lg" className="group">
            {t("cta.start")}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            {t("cta.demo")}
          </Button>
        </div>
      </div>
    </section>
  );
};
