import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Arte em Casa" className="h-12 w-12" />
            <span className="text-2xl font-bold text-primary">Arte em Casa</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/planos" className="text-foreground hover:text-primary transition-colors">
              Planos
            </Link>
            <Link to="/aprender" className="text-foreground hover:text-primary transition-colors">
              Aprender
            </Link>
            <Link to="/ranking" className="text-foreground hover:text-primary transition-colors">
              Ranking
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline">Entrar</Button>
            <Button>Começar Agora</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
