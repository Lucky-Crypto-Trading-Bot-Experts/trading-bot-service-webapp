
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

// Telegram URL
const TELEGRAM_URL = "https://t.me/solanatraderbot";

interface DetailedBot {
  name: string;
  description: string;
  features: string[];
  technical: string;
  price: string;
}

interface AdvancedBotsSectionProps {
  detailedBots: DetailedBot[];
}

export const AdvancedBotsSection = ({ detailedBots }: AdvancedBotsSectionProps) => {
  const renderAdvancedBotCard = (bot: DetailedBot, index: number) => (
    <Card key={index} className="card-hover h-full flex flex-col">
      <CardHeader>
        <CardTitle>{bot.name}</CardTitle>
        <CardDescription className="mt-2">{bot.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-medium mb-2 text-primary">Key Features:</h4>
        <ul className="space-y-3 mb-4">
          {bot.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <h4 className="font-medium mb-2 text-primary">Technical Details:</h4>
        <p className="text-sm text-muted-foreground mb-4">{bot.technical}</p>
      </CardContent>
      <CardFooter className="pt-4 flex flex-col space-y-3">
        <div className="text-2xl font-bold text-center w-full">{bot.price}</div>
        <div className="flex gap-2 w-full">
          <Link to={`/bot/${bot.name.toLowerCase().replace(/\s+/g, '-')}/learn`} className="flex-1">
            <Button className="w-full" variant="outline">
              Details
            </Button>
          </Link>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full gap-2">
              <ShoppingCart className="h-4 w-4" />
              Buy Now
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <section id="advanced-bots" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Advanced Solana Trading Bots
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our specialized Solana trading bots leverage the blockchain's unique capabilities for maximum performance and profitability
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedBots.map((bot, index) => renderAdvancedBotCard(bot, index))}
        </div>
      </div>
    </section>
  );
};
