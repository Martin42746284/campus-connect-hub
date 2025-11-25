import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Calendar } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCreatePost } from "@/hooks/usePosts";

export const CreatePost = () => {
  const [content, setContent] = useState("");
  const { user } = useAuth();
  const createPost = useCreatePost();

  const handleSubmit = async () => {
    if (!content.trim()) return;

    await createPost.mutateAsync({ content });
    setContent("");
  };

  const userInitials = user?.email?.substring(0, 2).toUpperCase() || "U";

  return (
    <Card className="border-border">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                {userInitials}
              </AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="Quoi de neuf aujourd'hui ?"
              className="min-h-[80px] resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Image className="h-4 w-4 mr-2" />
                Photo
              </Button>
              <Button variant="ghost" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Événement
              </Button>
            </div>
            <Button
              variant="hero"
              onClick={handleSubmit}
              disabled={!content.trim() || createPost.isPending}
            >
              {createPost.isPending ? "Publication..." : "Publier"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
