
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { LanguageProvider } from "./components/language-provider";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { ChatBox } from "./components/chat/ChatBox";
import Index from "./pages/Index";
import DocumentPage from "./pages/DocumentPage";
import AnalyzeBotPage from "./pages/AnalyzeBotPage";
import BotLearnPage from "./pages/BotLearnPage";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider defaultLanguage="en">
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/documents" element={<DocumentPage />} />
                  <Route path="/analyze" element={<AnalyzeBotPage />} />
                  <Route path="/bot/:botName/learn" element={<BotLearnPage />} />
                </Routes>
              </main>
              <Footer />
              <ChatBox />
              <Toaster />
              <Sonner />
            </div>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
