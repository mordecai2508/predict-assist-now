import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, Shield, BarChart3, Users, Brain } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">SPADE</h1>
              <p className="text-sm text-muted-foreground">Sistema Predictivo de Deserción Estudiantil</p>
            </div>
          </div>
          <Button onClick={() => navigate('/login')} className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Acceder al Sistema
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Predicción Inteligente de
            <span className="text-primary block">Deserción Estudiantil</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sistema avanzado que utiliza inteligencia artificial para identificar estudiantes 
            en riesgo de abandono académico y proponer intervenciones preventivas efectivas.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/login')}
            className="text-lg px-8 py-6 h-auto"
          >
            Comenzar Análisis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur">
            <CardHeader className="text-center">
              <Brain className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-xl">IA Predictiva</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Algoritmos avanzados que analizan múltiples variables para 
                predecir el riesgo de deserción con alta precisión.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-xl">Analítica Visual</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Dashboards intuitivos con gráficos claros que facilitan 
                la interpretación de patrones y tendencias.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-xl">Intervención Temprana</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Recomendaciones personalizadas y accionables para 
                implementar estrategias de retención efectivas.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="bg-card/60 backdrop-blur rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">87%</div>
              <p className="text-muted-foreground">Precisión Predictiva</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <p className="text-muted-foreground">Estudiantes Analizados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <p className="text-muted-foreground">Reducción en Deserción</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="border-0 shadow-xl bg-primary text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para transformar la retención estudiantil?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Accede al sistema como Coordinador Académico y comienza a utilizar
                el poder de la predicción inteligente.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/login')}
                className="font-semibold"
              >
                Iniciar Sesión
                <Shield className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
