import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface Comment {
  id: number;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  postId: string;
  comments?: Comment[];
}

export const CommentSection = ({ postId, comments = [] }: CommentSectionProps) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    // Handle comment submission
    console.log("New comment:", newComment);
    setNewComment("");
  };

  return (
    <div className="space-y-4 pt-4 border-t border-border">
      <h4 className="font-semibold text-foreground">
        Commentaires ({comments.length})
      </h4>
      
      {/* Comment List */}
      <div className="space-y-4">
        {comments.map((comment) => {
          const initials = comment.author.name.split(' ').map(n => n[0]).join('').toUpperCase();
          
          return (
            <div key={comment.id} className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={comment.author.avatar} />
                <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xs">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="rounded-lg bg-muted p-3">
                  <p className="font-medium text-sm text-foreground">
                    {comment.author.name}
                  </p>
                  <p className="text-sm text-foreground mt-1">
                    {comment.content}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground px-3">
                  {comment.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xs">
            JD
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 flex gap-2">
          <Textarea
            placeholder="Écrivez un commentaire..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[80px] resize-none"
          />
          <Button 
            type="submit" 
            size="icon" 
            variant="hero"
            disabled={!newComment.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};
