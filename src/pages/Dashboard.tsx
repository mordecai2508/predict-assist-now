import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  FileSpreadsheet,
  Brain,
  Target,
  BarChart3,
  UserCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const riskStats = {
    total: 1247,
    high: 89,
    medium: 156,
    low: 1002
  };

  const riskPercentage = {
    high: (riskStats.high / riskStats.total) * 100,
    medium: (riskStats.medium / riskStats.total) * 100,
    low: (riskStats.low / riskStats.total) * 100
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Panel de Control - Predicción de Deserción
          </h1>
          <p className="text-muted-foreground">
            Monitoreo y análisis predictivo del riesgo de abandono académico
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Estudiantes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{riskStats.total.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Activos en el sistema</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Riesgo Alto</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{riskStats.high}</div>
              <p className="text-xs text-muted-foreground">
                {riskPercentage.high.toFixed(1)}% del total
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Riesgo Medio</CardTitle>
              <TrendingUp className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{riskStats.medium}</div>
              <p className="text-xs text-muted-foreground">
                {riskPercentage.medium.toFixed(1)}% del total
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bajo Riesgo</CardTitle>
              <UserCheck className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{riskStats.low}</div>
              <p className="text-xs text-muted-foreground">
                {riskPercentage.low.toFixed(1)}% del total
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Risk Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Distribución de Riesgo
              </CardTitle>
              <CardDescription>
                Análisis predictivo de deserción estudiantil
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Riesgo Alto</span>
                  <Badge variant="destructive" className="text-xs">
                    {riskStats.high} estudiantes
                  </Badge>
                </div>
                <Progress value={riskPercentage.high} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Riesgo Medio</span>
                  <Badge className="text-xs bg-warning text-warning-foreground">
                    {riskStats.medium} estudiantes
                  </Badge>
                </div>
                <Progress value={riskPercentage.medium} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Bajo Riesgo</span>
                  <Badge className="text-xs bg-success text-success-foreground">
                    {riskStats.low} estudiantes
                  </Badge>
                </div>
                <Progress value={riskPercentage.low} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Predicciones Recientes
              </CardTitle>
              <CardDescription>
                Análisis realizados en las últimas 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Modelo de IA actualizado</p>
                    <p className="text-xs text-muted-foreground">Precisión: 87.3%</p>
                  </div>
                  <Badge variant="outline">Activo</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Nuevos casos detectados</p>
                    <p className="text-xs text-muted-foreground">12 estudiantes en riesgo</p>
                  </div>
                  <Badge className="bg-warning text-warning-foreground">Nuevo</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Intervenciones sugeridas</p>
                    <p className="text-xs text-muted-foreground">23 recomendaciones generadas</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Listo</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate('/upload')}>
            <CardHeader className="text-center">
              <FileSpreadsheet className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle className="text-lg">Cargar Datos</CardTitle>
              <CardDescription>
                Importar archivos CSV con información estudiantil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Importar CSV
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate('/students')}>
            <CardHeader className="text-center">
              <Target className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle className="text-lg">Análisis Individual</CardTitle>
              <CardDescription>
                Consultar riesgo específico de estudiantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Ver Estudiantes
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle className="text-lg">Reportes</CardTitle>
              <CardDescription>
                Generar informes y estadísticas detalladas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Generar Reporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;