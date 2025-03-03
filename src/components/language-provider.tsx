
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es" | "zh";

type TranslationsType = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: TranslationsType = {
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.docs": "Docs",
    "nav.guides": "Guides",
    "nav.contact": "Contact",
    "nav.analyze": "Analyze Bot",
    "hero.title": "Automated Solana Trading Solutions",
    "hero.subtitle": "Maximize your profits with high-performance trading bots for Raydium and PumpFun",
    "cta.start": "Get Started",
    "cta.demo": "Watch Demo",
    "products.title": "Our Trading Bots",
    "products.subtitle": "Professional-grade tools designed for optimal performance on Solana's leading DEXs",
    "docs.title": "Documentation & Resources",
    "docs.subtitle": "Comprehensive guides to help you get the most out of our trading bots",
    "feedback.title": "What Our Users Say",
    "team.title": "Meet Our Team",
    "contact.title": "Get In Touch",
    "social.title": "Join Our Community",
    "social.subtitle": "Connect with us and stay updated on the latest developments",
    "chat.title": "Chat",
    "chat.greeting": "Hello! How can we help you today?",
    "chat.placeholder": "Type your message...",
    "button.buy": "Buy Now",
    "button.learnMore": "Learn More",
    "analyze.title": "Analyze Trading Bots",
    "analyze.subtitle": "Input a token address to analyze potential trading strategies and risks",
    "docs.page.title": "Solana Trading Bot Development Guide",
    "docs.page.subtitle": "A comprehensive guide to building and optimizing trading bots on the Solana blockchain"
  },
  es: {
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.docs": "Documentación",
    "nav.guides": "Guías",
    "nav.contact": "Contacto",
    "nav.analyze": "Analizar Bot",
    "hero.title": "Soluciones Automatizadas de Trading en Solana",
    "hero.subtitle": "Maximiza tus ganancias con bots de trading de alto rendimiento para Raydium y PumpFun",
    "cta.start": "Comenzar",
    "cta.demo": "Ver Demo",
    "products.title": "Nuestros Bots de Trading",
    "products.subtitle": "Herramientas de nivel profesional diseñadas para un rendimiento óptimo en los principales DEX de Solana",
    "docs.title": "Documentación y Recursos",
    "docs.subtitle": "Guías completas para ayudarte a aprovechar al máximo nuestros bots de trading",
    "feedback.title": "Lo que dicen nuestros usuarios",
    "team.title": "Conoce a nuestro equipo",
    "contact.title": "Ponte en contacto",
    "social.title": "Únete a nuestra comunidad",
    "social.subtitle": "Conéctate con nosotros y mantente actualizado sobre los últimos desarrollos",
    "chat.title": "Chat",
    "chat.greeting": "¡Hola! ¿Cómo podemos ayudarte hoy?",
    "chat.placeholder": "Escribe tu mensaje...",
    "button.buy": "Comprar Ahora",
    "button.learnMore": "Más Información",
    "analyze.title": "Analizar Bots de Trading",
    "analyze.subtitle": "Ingresa una dirección de token para analizar posibles estrategias y riesgos",
    "docs.page.title": "Guía de Desarrollo de Bots de Trading en Solana",
    "docs.page.subtitle": "Una guía completa para construir y optimizar bots de trading en la blockchain de Solana"
  },
  zh: {
    "nav.home": "首页",
    "nav.features": "功能",
    "nav.pricing": "价格",
    "nav.docs": "文档",
    "nav.guides": "指南",
    "nav.contact": "联系我们",
    "nav.analyze": "分析机器人",
    "hero.title": "Solana自动化交易解决方案",
    "hero.subtitle": "使用高性能交易机器人为Raydium和PumpFun最大化您的利润",
    "cta.start": "开始使用",
    "cta.demo": "观看演示",
    "products.title": "我们的交易机器人",
    "products.subtitle": "为Solana领先的DEX设计的专业级工具",
    "docs.title": "文档和资源",
    "docs.subtitle": "全面的指南，帮助您充分利用我们的交易机器人",
    "feedback.title": "用户评价",
    "team.title": "认识我们的团队",
    "contact.title": "联系我们",
    "social.title": "加入我们的社区",
    "social.subtitle": "与我们联系并了解最新动态",
    "chat.title": "聊天",
    "chat.greeting": "您好！今天我们能为您做些什么？",
    "chat.placeholder": "输入您的消息...",
    "button.buy": "立即购买",
    "button.learnMore": "了解更多",
    "analyze.title": "分析交易机器人",
    "analyze.subtitle": "输入代币地址以分析潜在的交易策略和风险",
    "docs.page.title": "Solana交易机器人开发指南",
    "docs.page.subtitle": "构建和优化Solana区块链上交易机器人的综合指南"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key
});

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider = ({ 
  children, 
  defaultLanguage = "en" 
}: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
