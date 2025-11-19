import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar as CalendarIcon, Users, Edit } from "lucide-react";

interface UserProfileCardProps {
  user: {
    name: string;
    avatar?: string;
    role: string;
    email: string;
    location?: string;
    joinedDate: string;
    bio?: string;
    interests?: string[];
    stats: {
      friends: number;
      groups: number;
      posts: number;
    };
  };
  isOwnProfile?: boolean;
}

export const UserProfileCard = ({ user, isOwnProfile = false }: UserProfileCardProps) => {
  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="border-border">
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Header with Avatar */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="bg-gradient-hero text-primary-foreground text-3xl">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
              <p className="text-muted-foreground">{user.role}</p>
            </div>
            {isOwnProfile && (
              <Button variant="outline" size="sm" className="w-full">
                <Edit className="h-4 w-4 mr-2" />
                Modifier le profil
              </Button>
            )}
          </div>

          {/* Bio */}
          {user.bio && (
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">À propos</h3>
              <p className="text-sm text-muted-foreground">{user.bio}</p>
            </div>
          )}

          {/* Info */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{user.email}</span>
            </div>
            {user.location && (
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
            )}
            <div className="flex items-center gap-3 text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>Membre depuis {user.joinedDate}</span>
            </div>
          </div>

          {/* Interests */}
          {user.interests && user.interests.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Centres d'intérêt</h3>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest, index) => (
                  <Badge key={index} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{user.stats.friends}</p>
              <p className="text-xs text-muted-foreground">Amis</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{user.stats.groups}</p>
              <p className="text-xs text-muted-foreground">Groupes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{user.stats.posts}</p>
              <p className="text-xs text-muted-foreground">Posts</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
