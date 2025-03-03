
import { createContext, useContext, useState } from "react";

type Language = "en" | "es" | "zh";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "nav.home": "Home",
    "nav.features": "Products",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.docs": "Documentation",
    "nav.guides": "Guides",
    "hero.title": "Professional Solana Trading Bots",
    "hero.subtitle": "Automated solutions for Raydium & Pumpfun trading on Solana blockchain",
    "cta.start": "Get Started",
    "cta.demo": "Request Demo",
    "footer.subscribe": "Subscribe",
    "footer.newsletter": "Subscribe to our newsletter",
    "footer.rights": "All rights reserved",
    "feedback.title": "What Our Traders Say",
    "social.title": "Join Our Trading Community",
    "social.subtitle": "Follow us on social media for trading tips and platform updates",
    "chat.title": "Live Support",
    "chat.placeholder": "Ask us anything about our bots...",
    "chat.button": "Send",
    "chat.greeting": "Hello! How can we help you with our trading bots today?",
    "products.title": "Our Trading Bots",
    "products.subtitle": "Advanced solutions for Solana traders",
    "docs.title": "Documentation & Guides",
    "docs.subtitle": "Learn how to maximize your trading with our bots",
    "team.title": "Our Team",
    "contact.title": "Get in Touch",
  },
  es: {
    "nav.home": "Inicio",
    "nav.features": "Productos",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    "nav.docs": "Documentación",
    "nav.guides": "Guías",
    "hero.title": "Bots de Trading para Solana",
    "hero.subtitle": "Soluciones automatizadas para trading en Raydium y Pumpfun en la blockchain de Solana",
    "cta.start": "Comenzar",
    "cta.demo": "Solicitar Demo",
    "footer.subscribe": "Suscribirse",
    "footer.newsletter": "Suscríbete a nuestro boletín",
    "footer.rights": "Todos los derechos reservados",
    "feedback.title": "Lo Que Dicen Nuestros Traders",
    "social.title": "Únete a Nuestra Comunidad de Trading",
    "social.subtitle": "Síguenos en redes sociales para consejos de trading y actualizaciones de la plataforma",
    "chat.title": "Soporte en Vivo",
    "chat.placeholder": "Pregúntanos sobre nuestros bots...",
    "chat.button": "Enviar",
    "chat.greeting": "¡Hola! ¿Cómo podemos ayudarte con nuestros bots de trading hoy?",
    "products.title": "Nuestros Bots de Trading",
    "products.subtitle": "Soluciones avanzadas para traders de Solana",
    "docs.title": "Documentación y Guías",
    "docs.subtitle": "Aprende a maximizar tu trading con nuestros bots",
    "team.title": "Nuestro Equipo",
    "contact.title": "Contáctanos",
  },
  zh: {
    "nav.home": "首页",
    "nav.features": "产品",
    "nav.pricing": "价格",
    "nav.contact": "联系我们",
    "nav.docs": "文档",
    "nav.guides": "指南",
    "hero.title": "专业Solana交易机器人",
    "hero.subtitle": "Solana区块链上Raydium和Pumpfun交易的自动化解决方案",
    "cta.start": "立即开始",
    "cta.demo": "请求演示",
    "footer.subscribe": "订阅",
    "footer.newsletter": "订阅我们的新闻通讯",
    "footer.rights": "版权所有",
    "feedback.title": "交易者的评价",
    "social.title": "加入我们的交易社区",
    "social.subtitle": "在社交媒体上关注我们，获取交易技巧和平台更新",
    "chat.title": "在线支持",
    "chat.placeholder": "询问有关我们机器人的任何问题...",
    "chat.button": "发送",
    "chat.greeting": "您好！今天我们如何帮助您使用我们的交易机器人？",
    "products.title": "我们的交易机器人",
    "products.subtitle": "为Solana交易者提供的高级解决方案",
    "docs.title": "文档和指南",
    "docs.subtitle": "了解如何通过我们的机器人最大化您的交易",
    "team.title": "我们的团队",
    "contact.title": "联系我们",
  },
};

const LanguageContext = createContext<LanguageProviderState | undefined>(undefined);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
