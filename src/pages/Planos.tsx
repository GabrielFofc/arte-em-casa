import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Planos = () => {
  const plans = [
    {
      name: "Plano Básico",
      price: "20,99",
      description: "Perfeito para começar sua jornada artística",
      features: [
        "Acesso a todas as aulas em vídeo",
        "Exercícios práticos guiados",
        "Certificado de conclusão",
        "Suporte por email"
      ]
    },
    {
      name: "Plano Premium",
      price: "40,99",
      description: "Para quem quer aproveitar ao máximo",
      features: [
        "Tudo do Plano Básico",
        "Acesso ao servidor Discord exclusivo",
        "Aulas premium com técnicas avançadas",
        "Seu nome mencionado no final das videoaulas",
        "Suporte prioritário",
        "Benefícios exclusivos no ranking semanal"
      ],
      highlighted: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Escolha Seu Plano</h1>
          <p className="text-xl text-muted-foreground">
            Invista no seu talento artístico com planos que cabem no seu bolso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.highlighted 
                  ? 'border-primary border-4 shadow-2xl scale-105' 
                  : 'border-2'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-3xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">R$ {plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-6">
                <Link to="/auth" className="w-full">
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Assinar Agora
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Todos os planos incluem 7 dias de garantia. Cancele quando quiser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Planos;
