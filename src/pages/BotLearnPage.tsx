
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { detailedBots } from "@/data/botData";

// Telegram URL
const TELEGRAM_URL = "https://t.me/solanatraderbot";

// This component will dynamically display content based on the bot name from URL
const BotLearnPage = () => {
  const { botName } = useParams();
  const navigate = useNavigate();
  
  // Find the bot data from our imported list
  const botData = detailedBots.find(bot => 
    bot.name.toLowerCase().replace(/\s+/g, '-') === botName
  );

  if (!botData) {
    return (
      <div className="container mx-auto mt-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Bot Not Found</h1>
        <p className="mb-8">We couldn't find information about this bot.</p>
        <Button onClick={() => navigate('/')}>Return to Home</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <Button 
        variant="outline" 
        onClick={() => navigate(-1)} 
        className="mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{botData.name}</h1>
          <p className="text-xl text-muted-foreground mb-8">{botData.description}</p>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
              <CardDescription>What makes this bot special</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {botData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
              <CardDescription>How it works under the hood</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{botData.technical}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Use Cases</CardTitle>
              <CardDescription>Ideal scenarios for this bot</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {botData.useCases ? (
                  botData.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{useCase}</span>
                    </li>
                  ))
                ) : (
                  // Fallback for bots without specific use cases
                  <>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Professional traders looking to automate their strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>DeFi enthusiasts wanting to maximize returns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>New traders seeking to reduce manual monitoring</span>
                    </li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
              <div className="text-3xl font-bold mt-2">{botData.price}</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                One-time payment includes lifetime updates and 24/7 support.
              </p>
              
              <div className="space-y-2">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Button className="w-full" variant="outline" size="lg">
                  Try Demo
                </Button>
              </div>
              
              <Separator className="my-4" />
              
              <div>
                <h3 className="font-medium mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is available to answer any questions about this bot.
                </p>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Support
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BotLearnPage;
