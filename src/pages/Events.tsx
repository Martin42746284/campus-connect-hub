import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Plus } from "lucide-react";
import { CreateEventDialog } from "@/components/CreateEventDialog";

const Events = () => {
  const events = [
    {
      title: "Conférence Intelligence Artificielle",
      date: "15 Mars 2024",
      time: "14h00 - 17h00",
      location: "Amphithéâtre A",
      attendees: 127,
      category: "Technologie",
      description: "Découverte des dernières avancées en IA",
    },
    {
      title: "Tournoi d'Échecs Inter-Campus",
      date: "18 Mars 2024",
      time: "10h00 - 18h00",
      location: "Salle de Jeux",
      attendees: 45,
      category: "Sport",
      description: "Compétition amicale entre facultés",
    },
    {
      title: "Exposition Photo Étudiante",
      date: "20 Mars 2024",
      time: "18h00 - 22h00",
      location: "Galerie Campus",
      attendees: 89,
      category: "Culture",
      description: "Vernissage des œuvres étudiantes",
    },
    {
      title: "Hackathon 48h",
      date: "22 Mars 2024",
      time: "9h00 - Dim 18h00",
      location: "Lab Informatique",
      attendees: 64,
      category: "Technologie",
      description: "Marathon de programmation",
    },
    {
      title: "Concert Universitaire",
      date: "25 Mars 2024",
      time: "20h00 - 23h00",
      location: "Grand Hall",
      attendees: 234,
      category: "Musique",
      description: "Performances des talents du campus",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Événements</h1>
            <p className="text-muted-foreground mt-2">
              Découvrez et participez aux activités du campus
            </p>
          </div>
          <Button variant="hero" size="lg">
            <Plus className="h-5 w-5 mr-2" />
            Créer un événement
          </Button>
          <CreateEventDialog />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Calendar View */}
          <aside className="lg:col-span-1">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Mars 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-muted-foreground">
                    <div>L</div>
                    <div>M</div>
                    <div>M</div>
                    <div>J</div>
                    <div>V</div>
                    <div>S</div>
                    <div>D</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {Array.from({ length: 31 }, (_, i) => {
                      const day = i + 1;
                      const hasEvent = [15, 18, 20, 22, 25].includes(day);
                      return (
                        <button
                          key={day}
                          className={`aspect-square rounded-md transition-colors ${
                            hasEvent
                              ? 'bg-primary text-primary-foreground font-medium hover:bg-primary/90'
                              : 'text-foreground hover:bg-muted'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border mt-6">
              <CardHeader>
                <CardTitle className="text-base">Catégories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Tous les événements
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Technologie
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Culture
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Sport
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Musique
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Events List */}
          <main className="lg:col-span-2 space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge>{event.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.attendees} participants
                        </span>
                      </div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-secondary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      {event.location}
                    </div>
                    <div className="flex gap-3 pt-3">
                      <Button variant="hero" className="flex-1">
                        Je participe
                      </Button>
                      <Button variant="outline">Partager</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Events;
