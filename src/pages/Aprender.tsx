import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Lock, Play, BookOpen } from "lucide-react";
import Header from "@/components/Header";

interface Lesson {
  id: number;
  title: string;
  type: "video" | "practice";
  duration: string;
  completed: boolean;
  locked: boolean;
}

const Aprender = () => {
  const [lessons] = useState<Lesson[]>([
    { id: 1, title: "Introdução à Arte", type: "video", duration: "10 min", completed: true, locked: false },
    { id: 2, title: "Prática: Linhas Básicas", type: "practice", duration: "15 min", completed: true, locked: false },
    { id: 3, title: "Teoria das Cores", type: "video", duration: "12 min", completed: false, locked: false },
    { id: 4, title: "Prática: Círculo Cromático", type: "practice", duration: "20 min", completed: false, locked: true },
    { id: 5, title: "Técnicas de Sombreamento", type: "video", duration: "15 min", completed: false, locked: true },
    { id: 6, title: "Prática: Sombreamento Básico", type: "practice", duration: "25 min", completed: false, locked: true },
    { id: 7, title: "Perspectiva e Proporção", type: "video", duration: "18 min", completed: false, locked: true },
    { id: 8, title: "Prática: Desenho em Perspectiva", type: "practice", duration: "30 min", completed: false, locked: true },
  ]);

  const completedLessons = lessons.filter(l => l.completed).length;
  const progress = (completedLessons / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">Seu Progresso</h2>
                <p className="text-muted-foreground">
                  {completedLessons} de {lessons.length} aulas concluídas
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-primary">{Math.round(progress)}%</div>
                <p className="text-sm text-muted-foreground">Completo</p>
              </div>
            </div>
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>

        {/* Learning Path */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Trilha de Aprendizado</h2>
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-border" />
            <div 
              className="absolute left-8 top-0 w-1 bg-primary transition-all duration-500"
              style={{ height: `${progress}%` }}
            />

            {/* Lessons */}
            <div className="space-y-6">
              {lessons.map((lesson, index) => (
                <div key={lesson.id} className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    lesson.completed 
                      ? 'bg-primary text-primary-foreground' 
                      : lesson.locked
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-accent text-accent-foreground border-4 border-primary'
                  }`}>
                    {lesson.completed ? (
                      <CheckCircle2 className="h-8 w-8" />
                    ) : lesson.locked ? (
                      <Lock className="h-8 w-8" />
                    ) : lesson.type === "video" ? (
                      <Play className="h-8 w-8" />
                    ) : (
                      <BookOpen className="h-8 w-8" />
                    )}
                  </div>

                  {/* Content */}
                  <Card className={`flex-1 ${!lesson.locked && !lesson.completed ? 'border-primary border-2' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={lesson.type === "video" ? "default" : "secondary"}>
                              {lesson.type === "video" ? "Aula" : "Prática"}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
                          <p className="text-muted-foreground text-sm">
                            {lesson.type === "video" 
                              ? "Assista a videoaula completa sobre este tópico"
                              : "Pratique o que aprendeu com exercícios guiados"
                            }
                          </p>
                        </div>
                        <Button 
                          disabled={lesson.locked}
                          variant={lesson.completed ? "outline" : "default"}
                        >
                          {lesson.completed ? "Revisar" : lesson.locked ? "Bloqueado" : "Começar"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aprender;
