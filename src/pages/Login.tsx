import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="rounded-lg bg-gradient-hero p-2">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">UAZ Connect</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Bon retour !</h1>
          <p className="text-muted-foreground">Connectez-vous pour accéder à votre communauté</p>
        </div>

        <Card className="border-border shadow-soft">
          <CardHeader>
            <CardTitle>Connexion</CardTitle>
            <CardDescription>Entrez vos identifiants universitaires</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email universitaire</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="votre.nom@uaz.edu"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="rounded border-input"
                  />
                  <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                    Se souvenir de moi
                  </Label>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>
              <Button type="submit" className="w-full" variant="hero" size="lg">
                Se connecter
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Pas encore de compte ?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                S'inscrire
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          En vous connectant, vous acceptez nos{" "}
          <Link to="#" className="text-primary hover:underline">
            conditions d'utilisation
          </Link>{" "}
          et notre{" "}
          <Link to="#" className="text-primary hover:underline">
            politique de confidentialité
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
