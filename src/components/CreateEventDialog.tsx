import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useCreateEvent } from "@/hooks/useEvents";

export const CreateEventDialog = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const createEvent = useCreateEvent();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dateTime = `${date}T${time}:00`;
    await createEvent.mutateAsync({
      title,
      date: dateTime,
      location,
      category,
      description,
    });
    setOpen(false);
    setTitle("");
    setDate("");
    setTime("");
    setLocation("");
    setCategory("");
    setDescription("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="hero" size="lg">
          <Plus className="h-5 w-5 mr-2" />
          Créer un événement
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Créer un nouvel événement</DialogTitle>
            <DialogDescription>
              Organisez une activité pour la communauté universitaire
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titre de l'événement</Label>
              <Input 
                id="title" 
                placeholder="Ex: Conférence Intelligence Artificielle" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Heure</Label>
                <Input 
                  id="time" 
                  type="time" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Lieu</Label>
              <Input 
                id="location" 
                placeholder="Ex: Amphithéâtre A" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Catégorie</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Sélectionnez une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technologie">Technologie</SelectItem>
                  <SelectItem value="Culture">Culture</SelectItem>
                  <SelectItem value="Sport">Sport</SelectItem>
                  <SelectItem value="Musique">Musique</SelectItem>
                  <SelectItem value="Conférence">Conférence</SelectItem>
                  <SelectItem value="Autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Décrivez l'événement en détail..."
                className="min-h-[100px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" variant="hero" disabled={createEvent.isPending}>
              {createEvent.isPending ? "Création..." : "Créer l'événement"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
