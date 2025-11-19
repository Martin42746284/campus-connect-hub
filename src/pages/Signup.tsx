import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8 py-8">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="rounded-lg bg-gradient-hero p-2">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">UAZ Connect</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Rejoignez la communauté</h1>
          <p className="text-muted-foreground">Créez votre compte avec votre email universitaire</p>
        </div>

        <Card className="border-border shadow-soft">
          <CardHeader>
            <CardTitle>Inscription</CardTitle>
            <CardDescription>Remplissez le formulaire pour créer votre compte</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    placeholder="Jean"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input 
                    id="lastName" 
                    type="text" 
                    placeholder="Dupont"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email universitaire</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="jean.dupont@uaz.edu"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Utilisez votre adresse email universitaire officielle
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="program">Programme d'études</Label>
                  <Select>
                    <SelectTrigger id="program">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="licence">Licence</SelectItem>
                      <SelectItem value="master">Master</SelectItem>
                      <SelectItem value="doctorat">Doctorat</SelectItem>
                      <SelectItem value="staff">Personnel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="field">Domaine d'étude</Label>
                  <Select>
                    <SelectTrigger id="field">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sciences">Sciences</SelectItem>
                      <SelectItem value="arts">Arts et Lettres</SelectItem>
                      <SelectItem value="engineering">Ingénierie</SelectItem>
                      <SelectItem value="business">Gestion</SelectItem>
                      <SelectItem value="health">Santé</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 rounded border-input"
                  required
                />
                <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
                  J'accepte les{" "}
                  <Link to="#" className="text-primary hover:underline">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link to="#" className="text-primary hover:underline">
                    politique de confidentialité
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full" variant="hero" size="lg">
                Créer mon compte
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Vous avez déjà un compte ?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Se connecter
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
