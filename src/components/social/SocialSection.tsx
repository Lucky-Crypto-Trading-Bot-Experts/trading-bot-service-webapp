
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Github, Twitter, Linkedin, Instagram, MessageCircle, MessagesSquare } from "lucide-react";

export function SocialSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6">{t("social.title")}</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t("social.subtitle")}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <MessagesSquare className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
