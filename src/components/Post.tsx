import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface PostProps {
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes?: number;
  comments?: number;
}

export const Post = ({ author, content, image, timestamp, likes = 0, comments = 0 }: PostProps) => {
  const initials = author.name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className="border-border">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={author.avatar} />
              <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">{author.name}</h4>
                  {author.role && (
                    <p className="text-sm text-muted-foreground">{author.role}</p>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">{timestamp}</span>
              </div>
            </div>
          </div>
          
          <p className="text-foreground">{content}</p>
          
          {image && (
            <div className="rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt="Post content" 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              <span>{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>{comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Partager
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
