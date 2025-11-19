import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Users, Calendar, MessageSquare, FileText, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-university.jpg";
import communityImage from "@/assets/community-groups.jpg";
import eventsImage from "@/assets/events-calendar.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                Connectez-vous avec votre
                <span className="block text-transparent bg-clip-text bg-gradient-hero">
                  communauté universitaire
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                UAZ Connect est la plateforme sociale qui réunit étudiants, personnels et clubs de l'Université Advantist Zurcher. 
                Partagez, collaborez et participez à la vie étudiante comme jamais auparavant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="xl" variant="hero" className="w-full sm:w-auto">
                    Rejoindre la communauté
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="xl" variant="outline" className="w-full sm:w-auto">
                    Se connecter
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={heroImage} 
                  alt="Étudiants collaborant sur le campus" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une plateforme complète pour enrichir votre expérience universitaire
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Groupes & Clubs</h3>
                <p className="text-muted-foreground">
                  Rejoignez ou créez des groupes pour vos clubs, associations et projets collaboratifs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="rounded-lg bg-secondary/10 w-12 h-12 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Calendrier d'événements</h3>
                <p className="text-muted-foreground">
                  Ne manquez plus aucun événement universitaire. Créez, partagez et participez facilement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="rounded-lg bg-accent/10 w-12 h-12 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Messagerie instantanée</h3>
                <p className="text-muted-foreground">
                  Communiquez en temps réel avec vos camarades via chat privé ou de groupe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Partage de documents</h3>
                <p className="text-muted-foreground">
                  Partagez et accédez à des ressources pédagogiques, notes de cours et documents.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="rounded-lg bg-secondary/10 w-12 h-12 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Fil d'actualité</h3>
                <p className="text-muted-foreground">
                  Restez informé des dernières nouvelles et activités de votre communauté universitaire.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="rounded-lg bg-accent/10 w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Sécurité & Confidentialité</h3>
                <p className="text-muted-foreground">
                  Vos données sont protégées. Conformité RGPD et authentification sécurisée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={communityImage} 
                  alt="Groupes et communautés" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Une communauté vivante et engagée
              </h2>
              <p className="text-lg text-muted-foreground">
                Rejoignez des centaines d'étudiants, enseignants et membres du personnel qui utilisent déjà UAZ Connect 
                pour enrichir leur expérience universitaire. Créez des liens durables et participez activement à la vie du campus.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">Profils personnalisés avec centres d'intérêt</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">Recherche avancée par compétences et intérêts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">Notifications en temps réel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Ne manquez plus aucun événement
              </h2>
              <p className="text-lg text-muted-foreground">
                Découvrez tous les événements organisés sur le campus : conférences, ateliers, compétitions sportives, 
                soirées culturelles et bien plus encore. Inscrivez-vous en un clic et recevez des rappels automatiques.
              </p>
              <Link to="/signup">
                <Button size="lg" variant="hero">
                  Découvrir les événements
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={eventsImage} 
                  alt="Calendrier d'événements" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 text-center shadow-medium">
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary-foreground">
                Prêt à rejoindre UAZ Connect ?
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Créez votre compte gratuitement avec votre email universitaire et commencez à profiter de toutes les fonctionnalités dès maintenant.
              </p>
              <Link to="/signup">
                <Button size="xl" variant="accent" className="text-base font-semibold">
                  Créer mon compte gratuitement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">À propos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">Notre mission</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">L'équipe</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Ressources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">Guide d'utilisation</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Légal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">Conditions d'utilisation</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Politique de confidentialité</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">RGPD</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Université</h3>
              <p className="text-sm text-muted-foreground">
                Université Advantist Zurcher
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 UAZ Connect. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
