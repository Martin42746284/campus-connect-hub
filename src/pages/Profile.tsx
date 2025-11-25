import { Navbar } from "@/components/Navbar";
import { UserProfileCard } from "@/components/UserProfileCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Post } from "@/components/Post";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";

const Profile = () => {
  const currentUser = {
    name: "Jean Dupont",
    avatar: "",
    role: "Étudiant en Informatique - Master 2",
    email: "jean.dupont@uaz.edu",
    location: "Campus UAZ, Bâtiment Sciences",
    joinedDate: "Septembre 2022",
    bio: "Passionné par l'intelligence artificielle et le développement web. Membre actif du club de robotique et organisateur d'événements tech sur le campus.",
    interests: ["IA", "Web Dev", "Robotique", "Photographie", "Échecs"],
    stats: {
      friends: 127,
      groups: 8,
      posts: 42,
    },
  };

  const userGroups = [
    {
      name: "Club de Robotique",
      members: 45,
      role: "Membre actif",
    },
    {
      name: "Association Photo",
      members: 32,
      role: "Organisateur",
    },
    {
      name: "Débat et Éloquence",
      members: 28,
      role: "Membre",
    },
  ];

  const userEvents = [
    {
      title: "Hackathon 48h",
      date: "22 Mars 2024",
      status: "Inscrit",
    },
    {
      title: "Conférence IA",
      date: "15 Mars 2024",
      status: "Participé",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Sidebar - Profile Card */}
          <aside className="lg:col-span-1">
            <UserProfileCard user={currentUser} isOwnProfile={true} />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2">
            <Tabs defaultValue="posts" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="posts">Publications</TabsTrigger>
                <TabsTrigger value="groups">Groupes</TabsTrigger>
                <TabsTrigger value="events">Événements</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-6">
                <Post
                  postId="post-1"
                  author={{
                    name: currentUser.name,
                    avatar: currentUser.avatar,
                    role: currentUser.role,
                  }}
                  content="Excellente session de travail avec l'équipe robotique aujourd'hui! Notre projet avance bien 🤖"
                  timestamp="Il y a 3 heures"
                  likes={34}
                  comments={7}
                />
                <Post
                  postId="post-2"
                  author={{
                    name: currentUser.name,
                    avatar: currentUser.avatar,
                    role: currentUser.role,
                  }}
                  content="Quelqu'un aurait des recommandations de ressources pour approfondir le machine learning?"
                  timestamp="Il y a 2 jours"
                  likes={19}
                  comments={12}
                />
                <Post
                  postId="post-3"
                  author={{
                    name: currentUser.name,
                    avatar: currentUser.avatar,
                    role: currentUser.role,
                  }}
                  content="Photos de notre dernière sortie photo club! 📸"
                  timestamp="Il y a 1 semaine"
                  image="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800"
                  likes={68}
                  comments={15}
                />
              </TabsContent>

              <TabsContent value="groups" className="space-y-4">
                {userGroups.map((group, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="rounded-lg bg-primary/10 p-3">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{group.name}</h3>
                            <p className="text-sm text-muted-foreground">{group.members} membres</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{group.role}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="events" className="space-y-4">
                {userEvents.map((event, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="rounded-lg bg-secondary/10 p-3">
                            <Calendar className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.date}</p>
                          </div>
                        </div>
                        <Badge 
                          variant={event.status === "Inscrit" ? "default" : "secondary"}
                        >
                          {event.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;