
import { ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/components/language-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Telegram URL
const TELEGRAM_URL = "https://t.me/solanatraderbot";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("contact.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Have questions about our trading bots? We're here to help!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    className="w-full p-2 rounded-md border min-h-[120px]"
                    placeholder="Your message"
                  />
                </div>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Contact on Telegram
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-muted-foreground">support@solanatraderbot.com</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-2">Discord</h3>
                <p className="text-muted-foreground">discord.gg/solanatraderbot</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-2">Telegram</h3>
                <p className="text-muted-foreground">t.me/solanatraderbot</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-4">Live Chat</h3>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat with Support
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
