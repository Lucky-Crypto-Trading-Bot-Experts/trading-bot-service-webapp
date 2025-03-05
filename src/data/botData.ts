
// Bot data types
export interface BotData {
  name: string;
  description: string;
  features: string[];
  technical: string;
  price: string;
  useCases?: string[]; // Making this optional since not all bots may have it defined yet
}

// Detailed information about each trading bot
export const detailedBots: BotData[] = [
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
    price: "$299",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$499",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$199",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$349",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$399",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "Custom",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$279",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$349",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$599",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$249",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$429",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
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
    price: "$329",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
  },
  {
    name: "Solana Raydium Sniper Bot",
    description: "Instantly snipe new token listings on Raydium with customizable parameters",
    features: [
      "Auto-detection of new listings",
      "Custom slippage settings",
      "Gas optimization",
      "Multi-wallet support"
    ],
    technical: "Monitors Raydium pools for new listings and executes trades with millisecond precision to capitalize on early price movements.",
    price: "$199",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
  },
  {
    name: "Solana PumpFun Sniper Bot",
    description: "Lightning-fast execution for PumpFun token launches",
    features: [
      "Millisecond transaction execution",
      "Anti-rug protection",
      "Profit take automation",
      "Loss prevention"
    ],
    technical: "Specialized for the PumpFun platform with optimized transaction execution to get in early on new token launches.",
    price: "$199",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
  },
  {
    name: "Solana Raydium Copy Trading",
    description: "Automatically copy successful traders on Raydium",
    features: [
      "Follow top traders",
      "Custom allocation settings",
      "Real-time trade mirroring",
      "Performance analytics"
    ],
    technical: "Monitors specified wallets and replicates their Raydium trades with configurable delay and position sizing.",
    price: "$249",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
  },
  {
    name: "Solana PumpFun Copy Trading",
    description: "Mirror the best PumpFun traders with automated execution",
    features: [
      "Whale wallet tracking",
      "Customizable delay settings",
      "Position sizing options",
      "Stop-loss automation"
    ],
    technical: "Identifies and copies successful PumpFun traders with settings to adjust risk and execution parameters.",
    price: "$249",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
  },
  {
    name: "Raydium + PumpFun Combo Bot",
    description: "Complete trading solution for both Raydium and PumpFun platforms",
    features: [
      "Cross-platform arbitrage",
      "Unified dashboard",
      "Advanced automation rules",
      "Priority transaction routing"
    ],
    technical: "Integrates multiple trading strategies across both platforms with a unified control interface and reporting.",
    price: "$399",
    useCases: [
      "Professional traders looking to automate their strategies",
      "DeFi enthusiasts wanting to maximize returns",
      "New traders seeking to reduce manual monitoring"
    ]
  }
];
