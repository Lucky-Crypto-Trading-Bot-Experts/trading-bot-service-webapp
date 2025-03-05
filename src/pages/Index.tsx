
import { useLanguage } from "@/components/language-provider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Contributors, Contributor } from "@/components/team/Contributors";
import { FeedbackSection } from "@/components/feedback/FeedbackSection";
import { SocialSection } from "@/components/social/SocialSection";
import { WorkflowDiagram } from "@/components/visualization/WorkflowDiagram";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { AdvancedBotsSection } from "@/components/home/AdvancedBotsSection";
import { DocumentationSection } from "@/components/home/DocumentationSection";
import { ContactSection } from "@/components/home/ContactSection";
import { detailedBots } from "@/data/botData";
import { 
  products, 
  pricingPlans, 
  docSections,
  guideItems 
} from "@/data/homeData";

const Index = () => {
  const { t } = useLanguage();

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Workflow Diagram Section */}
      <WorkflowDiagram />

      {/* Products Section */}
      <ProductsSection products={products} />

      {/* Pricing Section */}
      <PricingSection pricingPlans={pricingPlans} />

      {/* Advanced Solana Bots Section */}
      <AdvancedBotsSection detailedBots={detailedBots} />

      {/* Documentation & Guides Section */}
      <DocumentationSection docSections={docSections} guideItems={guideItems} />

      {/* Team Section - Contributors */}
      <Contributors contributors={contributors} />

      {/* Feedback Section */}
      <FeedbackSection />

      {/* Social Section */}
      <SocialSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
