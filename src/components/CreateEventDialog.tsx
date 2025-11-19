import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

export const CreateEventDialog = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setOpen(false);
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
                required 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input 
                  id="date" 
                  type="date" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Heure</Label>
                <Input 
                  id="time" 
                  type="time" 
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Lieu</Label>
              <Input 
                id="location" 
                placeholder="Ex: Amphithéâtre A" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Catégorie</Label>
              <Select required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Sélectionnez une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technologie">Technologie</SelectItem>
                  <SelectItem value="culture">Culture</SelectItem>
                  <SelectItem value="sport">Sport</SelectItem>
                  <SelectItem value="musique">Musique</SelectItem>
                  <SelectItem value="conference">Conférence</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Décrivez l'événement en détail..."
                className="min-h-[100px]"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" variant="hero">
              Créer l'événement
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
