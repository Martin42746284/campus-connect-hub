import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { usePostLike, usePostComments, useCreateComment } from "@/hooks/usePostInteractions";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

interface PostProps {
  postId: string;
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

export const Post = ({ postId, author, content, image, timestamp, likes = 0, comments = 0 }: PostProps) => {
  const initials = author.name.split(' ').map(n => n[0]).join('').toUpperCase();
  const { hasLiked, toggleLike } = usePostLike(postId);
  const { data: postComments } = usePostComments(postId);
  const createComment = useCreateComment(postId);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    toggleLike.mutate();
  };

  const handleComment = async () => {
    if (!commentText.trim()) return;
    await createComment.mutateAsync(commentText);
    setCommentText("");
  };
  
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
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2"
              onClick={handleLike}
            >
              <Heart className={`h-4 w-4 ${hasLiked ? 'fill-red-500 text-red-500' : ''}`} />
              <span>{likes}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageCircle className="h-4 w-4" />
              <span>{comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Partager
            </Button>
          </div>

          {showComments && (
            <div className="pt-4 border-t border-border space-y-4">
              {/* Add comment */}
              <div className="flex items-start space-x-2">
                <Textarea
                  placeholder="Ajouter un commentaire..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="min-h-[60px] resize-none"
                />
                <Button 
                  onClick={handleComment}
                  disabled={!commentText.trim() || createComment.isPending}
                >
                  {createComment.isPending ? "..." : "Publier"}
                </Button>
              </div>

              {/* Comments list */}
              {postComments && postComments.length > 0 && (
                <div className="space-y-3">
                  {postComments.map((comment) => (
                    <div key={comment.id} className="flex items-start space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.profiles?.avatar_url || ""} />
                        <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xs">
                          {comment.profiles?.full_name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 bg-muted rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-medium text-sm">{comment.profiles?.full_name}</h5>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(comment.created_at), {
                              addSuffix: true,
                              locale: fr,
                            })}
                          </span>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
