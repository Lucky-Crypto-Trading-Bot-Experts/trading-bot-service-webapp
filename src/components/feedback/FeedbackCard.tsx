import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface FeedbackCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export function FeedbackCard({ name, role, content, avatar, rating }: FeedbackCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
}