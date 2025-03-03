import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FeedbackCard } from "./FeedbackCard";
import { useLanguage } from "@/components/language-provider";

const feedbacks = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content: "This platform has transformed how we operate. Highly recommended!",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "CTO, StartupX",
    content: "The features and support are outstanding. A game-changer for us.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Director, InnovateNow",
    content: "Exceptional platform that delivered beyond our expectations.",
    avatar: "/placeholder.svg",
    rating: 4,
  },
];

export function FeedbackSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">{t("feedback.title")}</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {feedbacks.map((feedback, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <FeedbackCard {...feedback} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}