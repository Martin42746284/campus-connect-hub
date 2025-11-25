import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Users } from "lucide-react";
import { Post } from "@/components/Post";
import { CreatePost } from "@/components/CreatePost";
import { usePosts } from "@/hooks/usePosts";
import { useAuth } from "@/hooks/useAuth";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const { data: posts, isLoading } = usePosts();
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (data) {
          setProfile(data);
        }
      };
      fetchProfile();
    }
  }, [user]);

  const userInitials = profile?.full_name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profile?.avatar_url || ""} />
                    <AvatarFallback className="bg-gradient-hero text-primary-foreground text-2xl">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {profile?.full_name || "Utilisateur"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {profile?.user_type === "student" 
                        ? `Étudiant${profile?.program ? ` en ${profile.program}` : ""}`
                        : "Professeur"}
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t border-border grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="font-semibold text-foreground">127</p>
                      <p className="text-xs text-muted-foreground">Amis</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">8</p>
                      <p className="text-xs text-muted-foreground">Groupes</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">42</p>
                      <p className="text-xs text-muted-foreground">Posts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Événements à venir</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="rounded-lg bg-primary/10 p-2 mt-1">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">Conférence IA</p>
                    <p className="text-xs text-muted-foreground">15 Mars, 14h00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="rounded-lg bg-secondary/10 p-2 mt-1">
                    <Users className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">Réunion Club Photo</p>
                    <p className="text-xs text-muted-foreground">18 Mars, 18h30</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Feed */}
          <main className="lg:col-span-2 space-y-6">
            <CreatePost />

            {/* Feed Posts */}
            {isLoading ? (
              <Card className="border-border">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">Chargement des posts...</p>
                </CardContent>
              </Card>
            ) : posts && posts.length > 0 ? (
              posts.map((post) => (
                <Post
                  key={post.id}
                  author={{
                    name: post.profiles?.full_name || "Utilisateur",
                    avatar: post.profiles?.avatar_url || "",
                    role: post.profiles?.user_type === "student" 
                      ? `Étudiant${post.profiles?.program ? ` en ${post.profiles.program}` : ""}`
                      : "Professeur",
                  }}
                  content={post.content}
                  image={post.image_url || undefined}
                  timestamp={formatDistanceToNow(new Date(post.created_at!), {
                    addSuffix: true,
                    locale: fr,
                  })}
                  likes={post.likes_count || 0}
                  comments={post.comments_count || 0}
                />
              ))
            ) : (
              <Card className="border-border">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    Aucun post pour le moment. Soyez le premier à publier !
                  </p>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
