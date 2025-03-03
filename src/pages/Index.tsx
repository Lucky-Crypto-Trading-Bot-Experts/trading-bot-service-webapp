
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { ArrowRight, CheckCircle2, Download, FileText, BookOpen, Users, MessageCircle } from "lucide-react";
import { FeedbackSection } from "@/components/feedback/FeedbackSection";
import { SocialSection } from "@/components/social/SocialSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const { t } = useLanguage();

  const products = [
    {
      title: "Solana Raydium Sniper Bot",
      description: "Instantly snipe new token listings on Raydium with customizable parameters",
      icon: "🚀",
      features: ["Auto-detection of new listings", "Custom slippage settings", "Gas optimization", "Multi-wallet support"],
    },
    {
      title: "Solana PumpFun Sniper Bot",
      description: "Lightning-fast execution for PumpFun token launches",
      icon: "⚡",
      features: ["Millisecond transaction execution", "Anti-rug protection", "Profit take automation", "Loss prevention"],
    },
    {
      title: "Solana Raydium Copy Trading",
      description: "Automatically copy successful traders on Raydium",
      icon: "👥",
      features: ["Follow top traders", "Custom allocation settings", "Real-time trade mirroring", "Performance analytics"],
    },
    {
      title: "Solana PumpFun Copy Trading",
      description: "Mirror the best PumpFun traders with automated execution",
      icon: "🔄",
      features: ["Whale wallet tracking", "Customizable delay settings", "Position sizing options", "Stop-loss automation"],
    },
    {
      title: "Raydium + PumpFun Combo Bot",
      description: "Complete trading solution for both Raydium and PumpFun platforms",
      icon: "🔥",
      features: ["Cross-platform arbitrage", "Unified dashboard", "Advanced automation rules", "Priority transaction routing"],
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      description: "Single bot access",
      features: ["1 Trading Bot", "Basic Analytics", "24/7 Support", "Weekly Updates"],
    },
    {
      name: "Professional",
      price: "$299",
      description: "Access to all bots with enhanced features",
      features: [
        "All Trading Bots",
        "Advanced Analytics",
        "Priority Support",
        "Daily Updates",
        "Custom Parameters",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced solutions for professional traders",
      features: [
        "All Trading Bots",
        "Custom Strategy Development",
        "Dedicated Support Team",
        "White-label Options",
        "API Access",
      ],
    },
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      bio: "Blockchain expert with 7+ years in DeFi development",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Sophia Rodriguez",
      role: "Trading Strategist",
      bio: "Former quant trader specializing in crypto markets",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Marcus Johnson",
      role: "Customer Success",
      bio: "Dedicated to helping traders maximize their potential",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Olivia Zhang",
      role: "Security Specialist",
      bio: "Ensures all our bots meet the highest security standards",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  const docSections = [
    {
      title: "Getting Started",
      items: [
        "Installation Guide",
        "Bot Configuration",
        "First Trade Setup",
        "Security Best Practices",
      ],
    },
    {
      title: "Advanced Usage",
      items: [
        "Custom Strategy Development",
        "API Integration",
        "Performance Optimization",
        "Multi-wallet Management",
      ],
    },
  ];

  const guideItems = [
    "Beginner's Guide to Solana Trading",
    "Understanding Raydium Liquidity Pools",
    "PumpFun Trading Strategies",
    "Risk Management in Crypto Trading",
    "Technical Analysis for Bot Trading",
    "Maximizing Profits with Sniping Bots",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Products Section */}
      <section id="products" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t("products.title")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="card-hover h-full flex flex-col">
                <CardHeader>
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription className="mt-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trading Bot Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`card-hover ${index === 1 ? 'border-primary border-2' : ''}`}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold my-4">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${index === 1 ? 'bg-primary' : ''}`}>Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation & Guides Section */}
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

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("team.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="text-center">
                  <div className="mx-auto rounded-full overflow-hidden w-24 h-24 mb-4">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection />

      {/* Social Section */}
      <SocialSection />

      {/* Contact Section */}
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
                  <Button className="w-full">Send Message</Button>
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
                  <Button className="w-full" variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat with Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
