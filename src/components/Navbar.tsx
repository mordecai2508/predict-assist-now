import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  LogOut, 
  Bell,
  Home,
  Users,
  Upload,
  BarChart3
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Sesión cerrada",
      description: "Ha salido del sistema correctamente",
    });
    navigate("/");
  };

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/students", label: "Estudiantes", icon: Users },
    { path: "/upload", label: "Cargar Datos", icon: Upload },
    { path: "/reports", label: "Reportes", icon: BarChart3 },
  ];

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">SPADE</h1>
              <p className="text-xs text-muted-foreground">Sistema Predictivo de Deserción</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => navigate(item.path)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center"
              >
                3
              </Badge>
            </Button>
            
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  CA
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-foreground">Coordinador</p>
                <p className="text-xs text-muted-foreground">Académico</p>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};