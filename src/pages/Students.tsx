import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle,
  Eye,
  SortAsc
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Students = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data - in real app this would come from API
  const students = [
    {
      id: "EST001",
      name: "María González Pérez",
      semester: 5,
      career: "Ing. Sistemas",
      riskLevel: "high",
      riskScore: 87,
      gpa: 2.1,
      attendance: 65,
      socioeconomic: "low"
    },
    {
      id: "EST002", 
      name: "Carlos Rodríguez López",
      semester: 3,
      career: "Administración",
      riskLevel: "medium",
      riskScore: 45,
      gpa: 3.2,
      attendance: 78,
      socioeconomic: "medium"
    },
    {
      id: "EST003",
      name: "Ana Patricia Ruiz",
      semester: 7,
      career: "Ing. Industrial",
      riskLevel: "low",
      riskScore: 15,
      gpa: 4.1,
      attendance: 92,
      socioeconomic: "high"
    },
    {
      id: "EST004",
      name: "José Manuel Torres",
      semester: 2,
      career: "Contaduría",
      riskLevel: "high",
      riskScore: 92,
      gpa: 1.8,
      attendance: 45,
      socioeconomic: "low"
    },
    {
      id: "EST005",
      name: "Diana Carolina Vega",
      semester: 6,
      career: "Psicología",
      riskLevel: "medium",
      riskScore: 38,
      gpa: 3.5,
      attendance: 85,
      socioeconomic: "medium"
    },
    {
      id: "EST006",
      name: "Roberto Andres Morales",
      semester: 4,
      career: "Ing. Civil",
      riskLevel: "low",
      riskScore: 22,
      gpa: 3.8,
      attendance: 88,
      socioeconomic: "high"
    }
  ];

  const getRiskBadge = (level: string) => {
    switch (level) {
      case "high":
        return <Badge variant="destructive" className="text-xs">Alto Riesgo</Badge>;
      case "medium":
        return <Badge className="text-xs bg-warning text-warning-foreground">Riesgo Medio</Badge>;
      case "low":
        return <Badge className="text-xs bg-success text-success-foreground">Bajo Riesgo</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Sin evaluar</Badge>;
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "high":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "medium":
        return <TrendingUp className="h-4 w-4 text-warning" />;
      case "low":
        return <CheckCircle className="h-4 w-4 text-success" />;
      default:
        return null;
    }
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.career.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Gestión de Estudiantes
          </h1>
          <p className="text-muted-foreground">
            Monitoreo y análisis individual del riesgo de deserción
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nombre, ID o carrera..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
                <Button variant="outline" size="sm">
                  <SortAsc className="h-4 w-4 mr-2" />
                  Ordenar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Students List */}
        <div className="grid gap-4">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                      {getRiskIcon(student.riskLevel)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-foreground">{student.name}</h3>
                        {getRiskBadge(student.riskLevel)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {student.id} • {student.career} • Semestre {student.semester}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4 mt-3">
                        <div>
                          <p className="text-xs text-muted-foreground">Promedio</p>
                          <p className="text-sm font-medium">{student.gpa}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Asistencia</p>
                          <p className="text-sm font-medium">{student.attendance}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Nivel Socioeconómico</p>
                          <p className="text-sm font-medium capitalize">{student.socioeconomic}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-3">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Riesgo de Deserción</p>
                      <p className="text-lg font-bold text-foreground">{student.riskScore}%</p>
                    </div>
                    
                    <div className="w-32">
                      <Progress 
                        value={student.riskScore} 
                        className="h-2"
                      />
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => navigate(`/student/${student.id}`)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalle
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No se encontraron estudiantes
              </h3>
              <p className="text-muted-foreground">
                Intenta con diferentes términos de búsqueda
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Students;