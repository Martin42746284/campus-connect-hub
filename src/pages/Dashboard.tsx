import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Calendar, Users } from "lucide-react";
import { Post } from "@/components/Post";

const Dashboard = () => {
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
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-hero text-primary-foreground text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Jean Dupont</h3>
                    <p className="text-sm text-muted-foreground">Étudiant en Informatique</p>
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
            {/* Create Post */}
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-hero text-primary-foreground">JD</AvatarFallback>
                    </Avatar>
                    <Textarea 
                      placeholder="Quoi de neuf aujourd'hui ?" 
                      className="min-h-[80px] resize-none"
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
                    <Button variant="hero">Publier</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feed Posts */}
            <Post
              author={{
                name: "Marie Laurent",
                avatar: "",
                role: "Étudiante en Physique"
              }}
              content="Super conférence sur l'intelligence artificielle aujourd'hui ! 🤖 J'ai hâte de partager ce que j'ai appris avec le club de robotique."
              timestamp="Il y a 2 heures"
              likes={24}
              comments={8}
            />

            <Post
              author={{
                name: "Paul Dubois",
                avatar: "",
                role: "Étudiant en Mathématiques"
              }}
              content="Quelqu'un aurait les notes du cours de mathématiques de ce matin ? J'ai dû partir plus tôt. Merci d'avance ! 📚"
              timestamp="Il y a 5 heures"
              likes={12}
              comments={15}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
