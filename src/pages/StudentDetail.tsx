import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle,
  User,
  GraduationCap,
  Calendar,
  DollarSign,
  BarChart3,
  Lightbulb,
  Target
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data - in real app this would come from API
  const student = {
    id: "EST001",
    name: "María González Pérez",
    semester: 5,
    career: "Ingeniería en Sistemas",
    riskLevel: "high",
    riskScore: 87,
    gpa: 2.1,
    attendance: 65,
    socioeconomic: "low",
    age: 22,
    enrollmentDate: "2021-08-15",
    lastUpdate: "2024-02-15"
  };

  const riskFactors = [
    { factor: "Promedio Académico", value: 2.1, risk: "high", weight: 35 },
    { factor: "Asistencia", value: 65, risk: "medium", weight: 25 },
    { factor: "Situación Socioeconómica", value: "Baja", risk: "high", weight: 20 },
    { factor: "Semestre Actual", value: 5, risk: "medium", weight: 15 },
    { factor: "Edad de Ingreso", value: 18, risk: "low", weight: 5 }
  ];

  const recommendations = [
    {
      type: "academic",
      title: "Tutoría Académica Personalizada",
      description: "Asignar tutor especializado en matemáticas y programación",
      priority: "high",
      timeframe: "Inmediato"
    },
    {
      type: "financial",
      title: "Beca de Apoyo Socioeconómico",
      description: "Evaluar elegibilidad para beca de manutención",
      priority: "high",
      timeframe: "2 semanas"
    },
    {
      type: "psychological",
      title: "Acompañamiento Psicológico",
      description: "Sesiones de orientación y manejo del estrés académico", 
      priority: "medium",
      timeframe: "1 mes"
    },
    {
      type: "academic",
      title: "Programa de Nivelación",
      description: "Inscribir en curso de refuerzo de materias básicas",
      priority: "medium",
      timeframe: "Próximo periodo"
    }
  ];

  const getRiskBadge = (level: string) => {
    switch (level) {
      case "high":
        return <Badge variant="destructive">Alto Riesgo</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">Riesgo Medio</Badge>;
      case "low":
        return <Badge className="bg-success text-success-foreground">Bajo Riesgo</Badge>;
      default:
        return <Badge variant="outline">Sin evaluar</Badge>;
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "high":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "medium":
        return <TrendingUp className="h-5 w-5 text-warning" />;
      case "low":
        return <CheckCircle className="h-5 w-5 text-success" />;
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive" className="text-xs">Alta</Badge>;
      case "medium":
        return <Badge className="text-xs bg-warning text-warning-foreground">Media</Badge>;
      case "low":
        return <Badge variant="outline" className="text-xs">Baja</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Normal</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate("/students")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Análisis Individual
            </h1>
            <p className="text-muted-foreground">
              Perfil completo y predicción de riesgo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Student Profile */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl">{student.name}</CardTitle>
                <CardDescription>ID: {student.id}</CardDescription>
                <div className="flex justify-center mt-4">
                  {getRiskBadge(student.riskLevel)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{student.career}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Semestre {student.semester}</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Nivel socioeconómico: {student.socioeconomic}</span>
                </div>
              </CardContent>
            </Card>

            {/* Risk Score */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getRiskIcon(student.riskLevel)}
                  Predicción de Riesgo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {student.riskScore}%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Probabilidad de deserción
                  </p>
                </div>
                <Progress value={student.riskScore} className="h-3" />
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Última actualización: {new Date(student.lastUpdate).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Analysis and Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            {/* Risk Factors */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Factores de Riesgo
                </CardTitle>
                <CardDescription>
                  Análisis detallado de variables predictivas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskFactors.map((factor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">{factor.factor}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              Peso: {factor.weight}%
                            </span>
                            {getRiskBadge(factor.risk)}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-bold">
                            {typeof factor.value === 'number' && factor.factor.includes('Asistencia') 
                              ? `${factor.value}%` 
                              : factor.value}
                          </span>
                          <div className="flex-1">
                            <Progress 
                              value={typeof factor.value === 'number' ? factor.value : 50} 
                              className="h-2" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Recomendaciones de Intervención
                </CardTitle>
                <CardDescription>
                  Acciones sugeridas para reducir el riesgo de deserción
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          <h4 className="font-medium">{rec.title}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          {getPriorityBadge(rec.priority)}
                          <Badge variant="outline" className="text-xs">
                            {rec.timeframe}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {rec.description}
                      </p>
                      <Button size="sm" variant="outline">
                        Implementar Acción
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDetail;