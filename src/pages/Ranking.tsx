import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";
import Header from "@/components/Header";

interface RankingUser {
  position: number;
  name: string;
  lessonsCompleted: number;
  initials: string;
}

const Ranking = () => {
  const users: RankingUser[] = [
    { position: 1, name: "Maria Silva", lessonsCompleted: 24, initials: "MS" },
    { position: 2, name: "João Santos", lessonsCompleted: 22, initials: "JS" },
    { position: 3, name: "Ana Costa", lessonsCompleted: 20, initials: "AC" },
    { position: 4, name: "Pedro Lima", lessonsCompleted: 18, initials: "PL" },
    { position: 5, name: "Carla Souza", lessonsCompleted: 16, initials: "CS" },
    { position: 6, name: "Lucas Alves", lessonsCompleted: 14, initials: "LA" },
    { position: 7, name: "Julia Rodrigues", lessonsCompleted: 12, initials: "JR" },
    { position: 8, name: "Marcos Oliveira", lessonsCompleted: 10, initials: "MO" },
  ];

  const getPositionIcon = (position: number) => {
    switch(position) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return null;
    }
  };

  const getPositionBadge = (position: number) => {
    if (position <= 3) {
      return (
        <Badge variant={position === 1 ? "default" : "secondary"} className="text-lg px-3 py-1">
          TOP {position}
        </Badge>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Ranking Semanal</h1>
          <p className="text-xl text-muted-foreground">
            Os alunos mais dedicados da semana
          </p>
        </div>

        {/* Winner Highlight */}
        <Card className="mb-8 border-4 border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="text-center text-2xl">🏆 Campeão da Semana 🏆</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-24 w-24 border-4 border-primary">
                <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">
                  {users[0].initials}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-3xl font-bold">{users[0].name}</h3>
                <p className="text-xl text-muted-foreground">
                  {users[0].lessonsCompleted} aulas completadas
                </p>
              </div>
              <Badge className="text-lg px-4 py-2">
                Benefícios Premium no Discord Desbloqueados!
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Ranking List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {users.map((user) => (
            <Card 
              key={user.position}
              className={`transition-all hover:shadow-lg ${
                user.position <= 3 ? 'border-2 border-primary/50' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  {/* Position */}
                  <div className="flex items-center gap-2 w-20">
                    {getPositionIcon(user.position)}
                    <span className="text-3xl font-bold text-muted-foreground">
                      #{user.position}
                    </span>
                  </div>

                  {/* Avatar */}
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="text-lg font-bold bg-accent">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{user.name}</h3>
                    <p className="text-muted-foreground">
                      {user.lessonsCompleted} aulas completadas esta semana
                    </p>
                  </div>

                  {/* Badge */}
                  {getPositionBadge(user.position)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="mt-8 max-w-3xl mx-auto bg-accent/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Como Funciona o Ranking?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• O ranking é atualizado toda segunda-feira</li>
              <li>• Complete mais aulas para subir no ranking</li>
              <li>• O 1º lugar ganha benefícios premium no servidor Discord</li>
              <li>• Os TOP 3 recebem badges especiais de reconhecimento</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ranking;
