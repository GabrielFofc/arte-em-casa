import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, Play, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Aprender = () => {
  const [showDialog, setShowDialog] = useState(false);
  
  const lessons = [
    { id: 1, title: "Introdução aos Materiais", type: "video" as const, locked: false },
    { id: 2, title: "Prática: Conhecendo seus Pincéis", type: "practice" as const, locked: true },
    { id: 3, title: "Teoria das Cores", type: "video" as const, locked: true },
    { id: 4, title: "Prática: Misturando Cores", type: "practice" as const, locked: true },
    { id: 5, title: "Técnicas de Sombreamento", type: "video" as const, locked: true },
    { id: 6, title: "Prática: Criando Profundidade", type: "practice" as const, locked: true },
    { id: 7, title: "Perspectiva Básica", type: "video" as const, locked: true },
    { id: 8, title: "Prática: Desenhando em 3D", type: "practice" as const, locked: true },
  ];

  const handleLockedClick = () => {
    setShowDialog(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Sua Jornada de Aprendizado</h1>
          <p className="text-xl text-muted-foreground">
            Aprenda no seu ritmo, alterne entre teoria e prática
          </p>
        </div>

        {/* Zigzag Learning Path */}
        <div className="max-w-4xl mx-auto relative">
          {lessons.map((lesson, index) => {
            const isLeft = index % 2 === 0;
            const isLocked = lesson.locked;
            
            return (
              <div
                key={lesson.id}
                className={`mb-8 flex items-center gap-8 ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Lesson Card */}
                <div className={`w-1/2 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
                  <Card
                    className={`p-6 ${
                      isLocked 
                        ? "cursor-pointer hover:border-primary/50 transition-colors blur-sm" 
                        : "border-primary"
                    }`}
                    onClick={isLocked ? handleLockedClick : undefined}
                  >
                    <div className="flex items-center gap-4 justify-between">
                      <div className={`flex items-center gap-3 ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
                        {lesson.type === "video" ? (
                          <div className="p-3 bg-primary/10 rounded-full">
                            <Play className="h-6 w-6 text-primary" />
                          </div>
                        ) : (
                          <div className="p-3 bg-secondary/10 rounded-full">
                            <BookOpen className="h-6 w-6 text-secondary" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-bold text-lg">{lesson.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {lesson.type === "video" ? "Vídeo Aula" : "Prática Guiada"}
                          </p>
                        </div>
                      </div>
                      {isLocked && (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </Card>
                </div>

                {/* Center Circle */}
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
                      isLocked
                        ? "bg-muted border-muted-foreground/30"
                        : "bg-primary border-primary"
                    }`}
                  >
                    <span className="text-sm font-bold text-primary-foreground">
                      {isLocked ? <Lock className="h-5 w-5" /> : lesson.id}
                    </span>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < lessons.length - 1 && (
                    <div
                      className={`absolute top-12 left-1/2 w-1 h-16 -ml-0.5 ${
                        isLocked ? "bg-muted-foreground/30" : "bg-primary/30"
                      }`}
                    />
                  )}
                </div>

                {/* Empty Space for Balance */}
                <div className="w-1/2" />
              </div>
            );
          })}
        </div>

        {/* Subscription Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl">Conteúdo Bloqueado</DialogTitle>
              <DialogDescription className="text-base pt-4">
                Para acessar todas as aulas e práticas, você precisa assinar um dos nossos planos.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 pt-4">
              <Link to="/planos" className="w-full">
                <Button className="w-full" size="lg">
                  Ver Planos e Assinar
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setShowDialog(false)}
                className="w-full"
              >
                Voltar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Aprender;
