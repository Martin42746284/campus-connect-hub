import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Home, Calendar, Users, MessageSquare, User } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-gradient-hero p-2">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">UAZ Connect</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
            <span>Accueil</span>
          </Link>
          <Link to="/groups" className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Users className="h-4 w-4" />
            <span>Groupes</span>
          </Link>
          <Link to="/events" className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Calendar className="h-4 w-4" />
            <span>Événements</span>
          </Link>
          <Link to="/messages" className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <MessageSquare className="h-4 w-4" />
            <span>Messages</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost">Connexion</Button>
          </Link>
          <Link to="/signup">
            <Button variant="hero">S'inscrire</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
