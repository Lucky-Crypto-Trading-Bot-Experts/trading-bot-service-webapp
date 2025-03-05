
import { ArrowRight, FileText, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DocSection {
  title: string;
  items: string[];
}

interface DocumentationSectionProps {
  docSections: DocSection[];
  guideItems: string[];
}

export const DocumentationSection = ({ docSections, guideItems }: DocumentationSectionProps) => {
  const { t } = useLanguage();

  return (
    <section id="docs" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t("docs.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("docs.subtitle")}
        </p>
        
        <Tabs defaultValue="documentation" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="documentation" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" /> Documentation
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" /> Guides
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="documentation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {docSections.map((section, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-primary mr-2" />
                          <a href="#" className="hover:text-primary transition-colors">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="group">
                Complete Documentation
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="guides">
            <Card>
              <CardHeader>
                <CardTitle>Trading Guides</CardTitle>
                <CardDescription>
                  Learn how to maximize your trading potential
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guideItems.map((item, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="p-4 border rounded-md hover:bg-primary/5 transition-colors flex items-center"
                    >
                      <BookOpen className="h-5 w-5 text-primary mr-3" />
                      {item}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
