import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      if (credentials.username === "coordinator" && credentials.password === "admin123") {
        toast({
          title: "Acceso autorizado",
          description: "Bienvenido al Sistema de Predicción de Deserción",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Error de autenticación",
          description: "Credenciales incorrectas. Intente nuevamente.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <Card className="w-full max-w-md shadow-xl border-0 bg-card/80 backdrop-blur">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">Sistema Predictivo</CardTitle>
            <CardDescription className="text-muted-foreground">
              Deserción Estudiantil - Coordinador Académico
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                Usuario
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Ingrese su usuario"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                required
                className="h-11"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Shield className="w-4 h-4 mr-2 animate-spin" />
                  Verificando...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </>
              )}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Demo: coordinator / admin123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;