
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

// Telegram URL
const TELEGRAM_URL = "https://t.me/solanatraderbot";

interface Product {
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

interface ProductsSectionProps {
  products: Product[];
}

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  const { t } = useLanguage();

  const renderProductCard = (product: Product, index: number) => (
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
          <Link to={`/bot/${product.title.toLowerCase().replace(/\s+/g, '-')}/learn`} className="flex-1">
            <Button className="w-full" variant="outline">
              {t("button.learnMore")}
            </Button>
          </Link>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full gap-2">
              <ShoppingCart className="h-4 w-4" />
              {t("button.buy")}
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <section id="products" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t("products.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("products.subtitle")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => renderProductCard(product, index))}
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
  );
};
