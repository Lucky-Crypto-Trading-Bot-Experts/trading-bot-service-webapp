
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Bot, 
  BarChart4, 
  Search, 
  AlertTriangle, 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  XCircle 
} from "lucide-react";

const AnalyzeBotPage = () => {
  const { t } = useLanguage();
  const [tokenAddress, setTokenAddress] = useState("");
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  const handleAnalyze = () => {
    if (tokenAddress) {
      setIsAnalyzed(true);
    }
  };

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Analyze Trading Bots
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Input a token address to analyze potential trading strategies and risks before deploying your bot
          </p>
        </div>

        <Card className="max-w-3xl mx-auto mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Token Analysis
            </CardTitle>
            <CardDescription>
              Enter a Solana token address to analyze its trading potential
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="tokenAddress">Token Address</Label>
                <div className="flex gap-2">
                  <Input
                    id="tokenAddress"
                    placeholder="Enter Solana token address"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleAnalyze}>Analyze</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {isAnalyzed && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Analysis Results</h2>
            
            <Tabs defaultValue="overview" className="mb-16">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="technical">Technical Analysis</TabsTrigger>
                <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
                <TabsTrigger value="strategy">Strategy Suggestions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Token Overview</CardTitle>
                    <CardDescription>
                      General information about the analyzed token
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Token Name</p>
                        <p className="text-lg font-semibold">Sample Token</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Symbol</p>
                        <p className="text-lg font-semibold">SMPL</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Liquidity</p>
                        <p className="text-lg font-semibold">$1,250,000</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">24h Volume</p>
                        <p className="text-lg font-semibold">$350,000</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Contract Analysis</h3>
                      <div className="flex items-center gap-2 text-green-500 mb-2">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>No mint authority</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-500 mb-2">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>No freeze authority</span>
                      </div>
                      <div className="flex items-center gap-2 text-red-500">
                        <XCircle className="h-5 w-5" />
                        <span>High concentration in top wallets</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="technical">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Analysis</CardTitle>
                    <CardDescription>
                      Market performance indicators
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="h-60 bg-muted rounded-md flex items-center justify-center">
                      <BarChart4 className="h-10 w-10 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Price Chart Visualization</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">RSI</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">65</p>
                          <p className="text-sm text-muted-foreground">Slightly overbought</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">MACD</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">Positive</p>
                          <p className="text-sm text-muted-foreground">Bullish signal</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Volume Profile</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">Increasing</p>
                          <p className="text-sm text-muted-foreground">Strong buying interest</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="risk">
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Assessment</CardTitle>
                    <CardDescription>
                      Potential trading risks and security analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <AlertTriangle className="h-10 w-10 text-amber-500" />
                      <div>
                        <h3 className="text-lg font-medium">Medium Risk Level</h3>
                        <p className="text-muted-foreground">This token has some risk factors to be aware of</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-md font-medium mb-2">Liquidity Risk</h3>
                        <div className="bg-muted rounded-full h-3">
                          <div className="bg-amber-500 h-3 rounded-full w-3/5"></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Moderate - Sufficient liquidity for small to medium trades</p>
                      </div>
                      
                      <div>
                        <h3 className="text-md font-medium mb-2">Volatility Risk</h3>
                        <div className="bg-muted rounded-full h-3">
                          <div className="bg-red-500 h-3 rounded-full w-4/5"></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">High - Significant price swings in recent history</p>
                      </div>
                      
                      <div>
                        <h3 className="text-md font-medium mb-2">Smart Contract Risk</h3>
                        <div className="bg-muted rounded-full h-3">
                          <div className="bg-green-500 h-3 rounded-full w-2/5"></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Low - Standard token implementation without suspicious code</p>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-md border border-amber-200 dark:border-amber-900">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-amber-800 dark:text-amber-400">Security Recommendation</h3>
                          <p className="text-sm text-amber-700 dark:text-amber-500">
                            Use position sizing limits and implement stop-loss orders to mitigate potential losses. Consider using multiple trading strategies rather than a single approach.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="strategy">
                <Card>
                  <CardHeader>
                    <CardTitle>Bot Strategy Suggestions</CardTitle>
                    <CardDescription>
                      Recommended bot configurations for this token
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Recommended Strategies</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-md">Momentum Trading</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Follow existing price trends with technical indicators like RSI and MACD.
                            </p>
                            <div className="mt-4">
                              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full">
                                Recommended
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-md">Grid Trading</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Place buy and sell orders at regular intervals to profit from volatility.
                            </p>
                            <div className="mt-4">
                              <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 rounded-full">
                                Consider with caution
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Bot Configuration Parameters</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Suggested Entry Points</p>
                          <p className="text-sm text-muted-foreground">$0.000142, $0.000128, $0.000115</p>
                        </div>
                        <div>
                          <p className="font-medium">Take-Profit Levels</p>
                          <p className="text-sm text-muted-foreground">+5%, +12%, +20%</p>
                        </div>
                        <div>
                          <p className="font-medium">Stop-Loss Level</p>
                          <p className="text-sm text-muted-foreground">-7%</p>
                        </div>
                        <div>
                          <p className="font-medium">Slippage Tolerance</p>
                          <p className="text-sm text-muted-foreground">1.5%</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <Button size="lg" className="group">
                        Deploy Bot with These Settings
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mb-12">
              <Button variant="outline" size="lg" className="mr-4">
                <Bot className="mr-2 h-4 w-4" />
                Save Analysis
              </Button>
              <Button size="lg">
                Deploy Trading Bot
              </Button>
            </div>
          </div>
        )}
        
        {!isAnalyzed && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold mb-4">
              Why Use Our Bot Analyzer?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Risk Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatically identify potential risks in token contracts and trading patterns before deployment.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <BarChart4 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Strategy Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive tailored strategy recommendations based on token-specific metrics and market conditions.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>One-Click Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seamlessly deploy optimized trading bots with pre-configured parameters based on analysis results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyzeBotPage;
