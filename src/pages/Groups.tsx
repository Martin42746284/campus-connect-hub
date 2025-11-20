import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Plus } from "lucide-react";
import { CreateGroupDialog } from "@/components/CreateGroupDialog";

const Groups = () => {
  const groups = [
    {
      name: "Club de Robotique",
      members: 45,
      category: "Technologie",
      description: "Conception et programmation de robots",
    },
    {
      name: "Association Photo",
      members: 32,
      category: "Arts",
      description: "Photographie créative et technique",
    },
    {
      name: "Débat et Éloquence",
      members: 28,
      category: "Culture",
      description: "Art oratoire et débats d'idées",
    },
    {
      name: "Club d'Échecs",
      members: 38,
      category: "Jeux",
      description: "Stratégie et compétitions d'échecs",
    },
    {
      name: "Environnement UAZ",
      members: 52,
      category: "Écologie",
      description: "Actions pour un campus plus vert",
    },
    {
      name: "Théâtre Universitaire",
      members: 41,
      category: "Arts",
      description: "Création et représentations théâtrales",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Groupes & Clubs</h1>
            <p className="text-muted-foreground mt-2">
              Rejoignez des communautés qui partagent vos passions
            </p>
          </div>
          <Button variant="hero" size="lg">
            <Plus className="h-5 w-5 mr-2" />
            Créer un groupe
          </Button>
          <CreateGroupDialog />
        </div>

        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher des groupes par nom, catégorie ou intérêt..." 
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Mes groupes</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">Membre</Badge>
                  </div>
                  <CardTitle className="mt-4">{groups[0].name}</CardTitle>
                  <CardDescription>{groups[0].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {groups[0].members} membres
                    </span>
                    <Button variant="outline" size="sm">Voir</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg bg-secondary/10 p-3">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <Badge variant="secondary">Membre</Badge>
                  </div>
                  <CardTitle className="mt-4">{groups[4].name}</CardTitle>
                  <CardDescription>{groups[4].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {groups[4].members} membres
                    </span>
                    <Button variant="outline" size="sm">Voir</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Découvrir</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {groups.slice(1, 4).map((group, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="rounded-lg bg-accent/10 p-3">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <Badge>{group.category}</Badge>
                    </div>
                    <CardTitle className="mt-4">{group.name}</CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {group.members} membres
                      </span>
                      <Button variant="hero" size="sm">Rejoindre</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
