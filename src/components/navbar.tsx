
import { Moon, Sun, FileText, BookOpen, Bot } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed w-full top-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold">
              SolanaTraderBot
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </a>
            <a href="#products" className="hover:text-primary transition-colors">
              {t("nav.features")}
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              {t("nav.pricing")}
            </a>
            <Link to="/documents" className="hover:text-primary transition-colors flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              {t("nav.docs")}
            </Link>
            <Link to="/analyze" className="hover:text-primary transition-colors flex items-center">
              <Bot className="h-4 w-4 mr-1" />
              Analyze Bot
            </Link>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9">
                  <span className="font-semibold">{language.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("zh")}>
                  中文
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="w-9 h-9"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
