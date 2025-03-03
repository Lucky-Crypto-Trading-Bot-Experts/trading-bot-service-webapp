
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Code, 
  FileText, 
  ArrowRight, 
  Github, 
  Download,
  ExternalLink
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const DocumentPage = () => {
  const { t } = useLanguage();

  const documentSections = [
    {
      title: "Introduction to Solana Trading Bots",
      content: "Solana's high-speed and low-cost transactions make it an ideal blockchain for trading bots. In 2024, with increased DEX activity and market volatility, trading bots have become essential tools for traders seeking to maximize profits and minimize risks through automation.",
      icon: <BookOpen className="h-12 w-12 text-primary" />
    },
    {
      title: "Key Components of a Solana Trading Bot",
      content: "Modern Solana trading bots integrate with DEXs like Raydium and PumpFun, implementing strategies through smart order routing, MEV protection, and risk management features. They typically include market analysis tools, execution modules, and user interfaces for configuration and monitoring.",
      icon: <Code className="h-12 w-12 text-primary" />
    },
    {
      title: "Development Frameworks and Resources",
      content: "Developers building Solana trading bots utilize the Solana Web3.js library, Anchor framework, and Serum's order book infrastructure. These tools enable interaction with the Solana blockchain and DEX protocols, while RPC providers ensure reliable network connectivity.",
      icon: <Github className="h-12 w-12 text-primary" />
    },
    {
      title: "Sniping Strategies and Implementation",
      content: "Effective sniping bots monitor liquidity pools and token listings, executing trades with millisecond precision when opportunities arise. Advanced implementations include slippage protection, multi-wallet support, and gas optimization to ensure successful trades in competitive markets.",
      icon: <FileText className="h-12 w-12 text-primary" />
    }
  ];

  const resources = [
    {
      title: "Solana Developer Resources",
      description: "Official documentation and guides for Solana blockchain development",
      link: "https://solana.com/developers"
    },
    {
      title: "Raydium Protocol Documentation",
      description: "Technical information for integrating with Raydium DEX",
      link: "https://raydium.io/swap/"
    },
    {
      title: "Solana Web3.js Library",
      description: "JavaScript API for interacting with the Solana blockchain",
      link: "https://solana-labs.github.io/solana-web3.js/"
    },
    {
      title: "Anchor Framework",
      description: "Framework for Solana smart contract development",
      link: "https://project-serum.github.io/anchor/"
    }
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Solana Trading Bot Development Guide
        </h1>
        <p className="text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
          A comprehensive guide to building and optimizing trading bots on the Solana blockchain in 2024
        </p>

        {/* Main document sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {documentSections.map((section, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="mb-4">{section.icon}</div>
                <CardTitle className="text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical implementation section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Technical Implementation Challenges</CardTitle>
            <CardDescription>
              Key considerations when developing Solana trading bots
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Network Congestion Handling</h3>
              <p className="text-muted-foreground">
                Implement retry mechanisms and prioritized transaction sending during high network load. Use multiple RPC endpoints to ensure transaction delivery even during network congestion.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-medium mb-3">MEV Protection</h3>
              <p className="text-muted-foreground">
                Utilize private transaction relays and randomized transaction timing to prevent front-running. Consider implementing time-lock puzzles for sensitive transactions.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-medium mb-3">Risk Management</h3>
              <p className="text-muted-foreground">
                Build in position sizing limits, stop-loss mechanisms, and profit-taking algorithms. Implement token contract analysis to identify potential scams or high-risk investments.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Resources section */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {resources.map((resource, index) => (
            <a 
              key={index} 
              href={resource.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {resource.title}
                    <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  </CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <Button size="lg" className="group">
            Download Full Development Guide
            <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
