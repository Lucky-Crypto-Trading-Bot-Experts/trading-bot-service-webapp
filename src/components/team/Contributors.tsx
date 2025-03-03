
import { Github } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Contributor {
  name: string;
  role: string;
  bio: string;
  image: string;
  github: string;
}

interface ContributorsProps {
  contributors: Contributor[];
}

export function Contributors({ contributors }: ContributorsProps) {
  const { t } = useLanguage();
  
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("team.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contributors.map((contributor, index) => (
            <Card key={index} className="card-hover h-full flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full overflow-hidden w-24 h-24 mb-4">
                  <img src={contributor.image} alt={contributor.name} className="w-full h-full object-cover" />
                </div>
                <CardTitle>{contributor.name}</CardTitle>
                <CardDescription className="font-medium text-primary">
                  {contributor.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center flex flex-col flex-grow">
                <p className="text-muted-foreground mb-4">{contributor.bio}</p>
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center"
                    onClick={() => window.open(contributor.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
