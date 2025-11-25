import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CreateEventDialog } from "@/components/CreateEventDialog";
import { useEvents, useToggleEventAttendance, useEventAttendance } from "@/hooks/useEvents";
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Events = () => {
  const { data: events, isLoading } = useEvents();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events?.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Événements</h1>
              <p className="text-muted-foreground mt-2">
                Découvrez et participez aux événements du campus
              </p>
            </div>
            <CreateEventDialog />
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un événement..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Chargement des événements...</p>
            </div>
          ) : filteredEvents && filteredEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  {searchQuery ? "Aucun événement trouvé pour cette recherche" : "Aucun événement disponible"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event }: { event: any }) => {
  const isAttending = useEventAttendance(event.id);
  const toggleAttendance = useToggleEventAttendance(event.id);

  return (
    <Card className="border-border hover:border-primary/50 transition-colors">
      {event.image_url && (
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{event.category}</Badge>
            </div>
            <CardTitle className="text-xl">{event.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {event.description || "Aucune description disponible"}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {format(new Date(event.date), "d MMMM yyyy 'à' HH:mm", { locale: fr })}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {event.attendees_count || 0} participants
          </div>
        </div>

        <Button
          variant={isAttending ? "outline" : "hero"}
          className="w-full"
          onClick={() => toggleAttendance.mutate()}
          disabled={toggleAttendance.isPending}
        >
          {toggleAttendance.isPending
            ? "..."
            : isAttending
              ? "Se désinscrire"
              : "S'inscrire"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Events;
