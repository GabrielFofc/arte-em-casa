import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Palette, Play, Trophy, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-art.jpg";

const Home = () => {
  const features = [
    {
      icon: <Play className="h-8 w-8" />,
      title: "Vídeo Aulas",
      description: "Aprenda com instruções passo a passo em vídeo de alta qualidade"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Prática Guiada",
      description: "Alterne entre aprendizado e prática para fixar o conhecimento"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Sistema de Ranking",
      description: "Compete com outros alunos e ganhe benefícios exclusivos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Aprenda Arte do Conforto da Sua Casa
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transforme sua criatividade em obras de arte com nosso método gamificado de ensino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planos">
                <Button size="lg" className="text-lg px-8">
                  Ver Planos
                </Button>
              </Link>
              <Link to="/aprender">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Começar a Aprender
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="py-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Comece Sua Jornada Artística Hoje</h2>
              <p className="text-xl mb-8 opacity-90">
                Junte-se a centenas de alunos que já transformaram suas vidas através da arte
              </p>
              <Link to="/planos">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Ver Planos e Preços
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/arte.emcasaofc?igsh=MTFxbjV4cHIwbHIxbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Instagram className="h-6 w-6" />
                </div>
                <span className="text-lg font-medium">Siga-nos no Instagram</span>
              </a>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 Arte em Casa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
