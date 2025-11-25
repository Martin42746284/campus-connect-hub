import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CreateGroupDialog } from "@/components/CreateGroupDialog";
import { useGroups, useToggleGroupMembership, useGroupMembership } from "@/hooks/useGroups";
import { useState } from "react";

const Groups = () => {
  const { data: groups, isLoading } = useGroups();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = groups?.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Groupes</h1>
              <p className="text-muted-foreground mt-2">
                Rejoignez des groupes et connectez-vous avec d'autres étudiants
              </p>
            </div>
            <CreateGroupDialog />
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un groupe..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Chargement des groupes...</p>
            </div>
          ) : filteredGroups && filteredGroups.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredGroups.map((group) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  {searchQuery ? "Aucun groupe trouvé pour cette recherche" : "Aucun groupe disponible"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

const GroupCard = ({ group }: { group: any }) => {
  const isMember = useGroupMembership(group.id);
  const toggleMembership = useToggleGroupMembership(group.id);

  return (
    <Card className="border-border hover:border-primary/50 transition-colors">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{group.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{group.category}</p>
          </div>
          <div className="rounded-lg bg-primary/10 p-2">
            <Users className="h-4 w-4 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {group.description || "Aucune description disponible"}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-muted-foreground">
            {group.member_count || 0} membres
          </span>
          <Button
            variant={isMember ? "outline" : "hero"}
            size="sm"
            onClick={() => toggleMembership.mutate()}
            disabled={toggleMembership.isPending}
          >
            {toggleMembership.isPending 
              ? "..." 
              : isMember 
                ? "Quitter" 
                : "Rejoindre"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Groups;
