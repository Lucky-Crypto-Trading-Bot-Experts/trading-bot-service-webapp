import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { ArrowRight, CheckCircle2, Download, FileText, BookOpen, Users, MessageCircle, ShoppingCart } from "lucide-react";
import { FeedbackSection } from "@/components/feedback/FeedbackSection";
import { SocialSection } from "@/components/social/SocialSection";
import { Contributors, Contributor } from "@/components/team/Contributors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();

  const products = [
    {
      title: "Solana Raydium Sniper Bot",
      description: "Instantly snipe new token listings on Raydium with customizable parameters",
      icon: "🚀",
      features: ["Auto-detection of new listings", "Custom slippage settings", "Gas optimization", "Multi-wallet support"],
      price: "$199",
    },
    {
      title: "Solana PumpFun Sniper Bot",
      description: "Lightning-fast execution for PumpFun token launches",
      icon: "⚡",
      features: ["Millisecond transaction execution", "Anti-rug protection", "Profit take automation", "Loss prevention"],
      price: "$199",
    },
    {
      title: "Solana Raydium Copy Trading",
      description: "Automatically copy successful traders on Raydium",
      icon: "👥",
      features: ["Follow top traders", "Custom allocation settings", "Real-time trade mirroring", "Performance analytics"],
      price: "$249",
    },
    {
      title: "Solana PumpFun Copy Trading",
      description: "Mirror the best PumpFun traders with automated execution",
      icon: "🔄",
      features: ["Whale wallet tracking", "Customizable delay settings", "Position sizing options", "Stop-loss automation"],
      price: "$249",
    },
    {
      title: "Raydium + PumpFun Combo Bot",
      description: "Complete trading solution for both Raydium and PumpFun platforms",
      icon: "🔥",
      features: ["Cross-platform arbitrage", "Unified dashboard", "Advanced automation rules", "Priority transaction routing"],
      price: "$399",
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

  const contributors: Contributor[] = [
    {
      name: "Benjamin Tan",
      role: "Lead Developer",
      bio: "Blockchain expert with 7+ years in DeFi development",
      image: "/lovable-uploads/df652ef2-2575-4bdb-b715-f142a6b72bd8.png",
      github: "https://github.com/benjaminTan10",
    },
    {
      name: "LuckyRay",
      role: "Trading Strategist",
      bio: "Former quant trader specializing in crypto markets",
      image: "/lovable-uploads/de4e8169-8565-4b35-84aa-31f5ef052ec2.png",
      github: "https://github.com/0xluckyray",
    },
    {
      name: "Amazia Tower",
      role: "Security Specialist",
      bio: "Ensures all our bots meet the highest security standards",
      image: "/lovable-uploads/39b2b4ba-52aa-4817-be27-28b4f7c47b34.png",
      github: "https://github.com/amaziatower",
    },
    {
      name: "Adam Sandler",
      role: "Customer Success",
      bio: "Dedicated to helping traders maximize their potential",
      image: "/lovable-uploads/b5de9bae-e1ed-4ed6-a36f-ad99608a7a31.png",
      github: "https://github.com/adamsandler14",
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

  // New expanded Solana bot types with detailed information
  const detailedBots = [
    {
      name: "Liquidation Monitoring Bot",
      description: "Monitor positions at risk of liquidation across Solana lending platforms",
      features: [
        "Real-time debt position tracking",
        "Multi-protocol coverage (Solend, Mango, Jet)",
        "Adjustable alert thresholds",
        "Health factor visualization"
      ],
      technical: "Uses Solana RPC subscriptions to track account changes and monitor liquidation thresholds in real-time.",
      price: "$299"
    },
    {
      name: "MEV Arbitrage Bot",
      description: "Capture value from price discrepancies across Solana DEXs",
      features: [
        "Cross-DEX price monitoring",
        "Flash loan integration",
        "Priority fee optimization",
        "Profit threshold settings"
      ],
      technical: "Leverages Solana's parallel transaction processing to execute atomic arbitrage trades with minimal latency.",
      price: "$499"
    },
    {
      name: "Limit Order Bot",
      description: "Place limit orders on Solana DEXs that don't natively support them",
      features: [
        "Multiple DEX support",
        "GoodTillCancelled orders",
        "Partial fill handling",
        "Stop-loss integration"
      ],
      technical: "Monitors on-chain price feeds and executes market orders when target prices are reached, simulating limit order functionality.",
      price: "$199"
    },
    {
      name: "NFT Sniping Bot",
      description: "Automatically purchase NFTs that meet your criteria the moment they're listed",
      features: [
        "Magic Eden & Tensor coverage",
        "Rarity-based purchasing",
        "Floor price monitoring",
        "Collection-specific strategies"
      ],
      technical: "Subscribes to NFT marketplace program activities and executes purchases based on configurable parameters.",
      price: "$349"
    },
    {
      name: "Yield Farming Optimizier",
      description: "Automatically rebalance positions to maximize yield across Solana protocols",
      features: [
        "APY comparison algorithms",
        "Automated position migration",
        "Compound frequency optimization",
        "Risk-adjusted return analysis"
      ],
      technical: "Compares real yields across lending protocols, liquidity pools, and staking options, rebalancing to maximize returns.",
      price: "$399"
    },
    {
      name: "Custom Trading Bot Development",
      description: "Bespoke trading bot development based on your specific strategy requirements",
      features: [
        "Strategy consultation",
        "Customized implementation",
        "Back-testing capabilities",
        "Ongoing support & maintenance"
      ],
      technical: "Developed by our expert team using Rust or TypeScript SDK based on performance requirements and strategy complexity.",
      price: "Custom"
    },
    {
      name: "Grid Trading Bot",
      description: "Automate buys and sells at fixed price intervals to capitalize on market range movements",
      features: [
        "Dynamic grid sizing",
        "Auto-rebalancing",
        "Multi-market support",
        "Custom price range configuration"
      ],
      technical: "Uses math models to create a grid of buy and sell orders across a price range, automatically adjusting position sizes based on volatility.",
      price: "$279"
    },
    {
      name: "Sentiment Analysis Bot",
      description: "Trade based on real-time social media sentiment around Solana tokens",
      features: [
        "Twitter/X data integration",
        "Discord server monitoring",
        "Telegram group analysis",
        "News sentiment scoring"
      ],
      technical: "Employs NLP algorithms to analyze social media posts and news articles, scoring sentiment to trigger trading decisions.",
      price: "$349"
    },
    {
      name: "Flash Loan Arbitrage Bot",
      description: "Execute complex arbitrage strategies using uncollateralized flash loans",
      features: [
        "Multi-step transaction paths",
        "Risk assessment algorithms",
        "Gas optimization",
        "Profit threshold controls"
      ],
      technical: "Utilizes Solana's composability to borrow assets, execute trades across multiple venues, and repay loans within a single transaction.",
      price: "$599"
    },
    {
      name: "Solana Wallet Tracker",
      description: "Monitor and copy trades from specific wallets or smart contracts",
      features: [
        "Whale wallet alerts",
        "Transaction analysis",
        "Automatic trade mirroring",
        "Custom notification settings"
      ],
      technical: "Subscribes to account update events on the Solana blockchain to detect transactions from specified wallets and analyze trading patterns.",
      price: "$249"
    },
    {
      name: "Impermanent Loss Shield",
      description: "Protect liquidity positions from impermanent loss with automated hedging",
      features: [
        "Dynamic delta hedging",
        "Auto position adjustment",
        "IL risk calculator",
        "Portfolio rebalancing"
      ],
      technical: "Monitors price divergence in liquidity pools and executes offsetting positions to minimize impermanent loss exposure.",
      price: "$429"
    },
    {
      name: "Metadata Sniper Bot",
      description: "Target tokens with specific on-chain metadata characteristics",
      features: [
        "Custom metadata filters",
        "Supply analysis",
        "Holder distribution scoring",
        "Token permission scanning"
      ],
      technical: "Scans and indexes token metadata on Solana to identify tokens meeting specified criteria for quality and security.",
      price: "$329"
    }
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
                </CardContent>
                <CardFooter className="pt-4 flex flex-col space-y-3">
                  <div className="text-2xl font-bold text-center w-full">{product.price}</div>
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1" variant="outline">{t("button.learnMore")}</Button>
                    <Button className="flex-1 gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      {t("button.buy")}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/analyze">
              <Button size="lg" variant="outline" className="group">
                Analyze Token for Bot Trading
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
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

      {/* Advanced Solana Bots Section */}
      <section id="advanced-bots" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Advanced Solana Trading Bots
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our specialized Solana trading bots leverage the blockchain's unique capabilities for maximum performance and profitability
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedBots.map((bot, index) => (
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
                    <Button className="flex-1" variant="outline">Details</Button>
                    <Button className="flex-1 gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Buy Now
                    </Button>
                  </div>
                </CardFooter>
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

      {/* Team Section - replaced with Contributors component */}
      <Contributors contributors={contributors} />

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
